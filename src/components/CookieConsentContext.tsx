"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import {
  type ConsentState,
  readStoredConsent,
  subscribeConsent,
  writeStoredConsent,
} from "@/lib/consent";

type CookieConsentContextValue = {
  consent: ConsentState | null;
  /** true assim que o valor salvo (ou a ausência dele) foi lido no cliente */
  hydrated: boolean;
  setConsent: (consent: Omit<ConsentState, "timestamp">) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function getServerSnapshot(): ConsentState | null {
  return null;
}

// Truque padrão para saber se já passamos da hidratação, sem usar
// setState em efeito: no servidor (e no primeiro render do cliente,
// para casar com o HTML do servidor) retorna false; depois do mount,
// React reconsulta e passa a retornar true.
function subscribeNoop() {
  return () => {};
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const consent = useSyncExternalStore(subscribeConsent, readStoredConsent, getServerSnapshot);
  const hydrated = useSyncExternalStore(subscribeNoop, () => true, () => false);

  function setConsent(next: Omit<ConsentState, "timestamp">) {
    writeStoredConsent(next);
  }

  return (
    <CookieConsentContext.Provider value={{ consent, hydrated, setConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent deve ser usado dentro de CookieConsentProvider");
  }
  return ctx;
}
