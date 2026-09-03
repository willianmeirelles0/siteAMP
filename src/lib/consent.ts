export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  /** ISO timestamp de quando a escolha foi registrada */
  timestamp: string;
};

export const CONSENT_STORAGE_KEY = "amp-cookie-consent";

export const CONSENT_ALL: Omit<ConsentState, "timestamp"> = {
  necessary: true,
  analytics: true,
  marketing: true,
};

export const CONSENT_ESSENTIAL_ONLY: Omit<ConsentState, "timestamp"> = {
  necessary: true,
  analytics: false,
  marketing: false,
};

type Listener = () => void;
const listeners = new Set<Listener>();

/** Store mínima para uso com useSyncExternalStore (ver CookieConsentContext). */
export function subscribeConsent(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function emitConsentChange() {
  for (const listener of listeners) listener();
}

function parseConsent(raw: string | null): ConsentState | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ConsentState;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

// Cache simples para que getSnapshot devolva a mesma referência quando o
// conteúdo do localStorage não mudou (exigido por useSyncExternalStore).
let cachedRaw: string | null = null;
let cachedValue: ConsentState | null = null;

export function readStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  let raw: string | null;
  try {
    raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    raw = null;
  }

  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  cachedValue = parseConsent(raw);
  return cachedValue;
}

export function writeStoredConsent(consent: Omit<ConsentState, "timestamp">): ConsentState {
  const full: ConsentState = { ...consent, timestamp: new Date().toISOString() };
  const raw = JSON.stringify(full);

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, raw);
    } catch {
      // localStorage indisponível (modo privado, etc.) — segue sem persistir
    }
  }

  cachedRaw = raw;
  cachedValue = full;
  emitConsentChange();
  return full;
}
