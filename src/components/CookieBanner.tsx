"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useCookieConsent } from "./CookieConsentContext";
import { CONSENT_ALL, CONSENT_ESSENTIAL_ONLY } from "@/lib/consent";

export default function CookieBanner() {
  const { hydrated, consent, setConsent } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] = useState(false);
  const [marketingChoice, setMarketingChoice] = useState(false);

  if (!hydrated || consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-amp-gold/40 bg-amp-wine px-5 py-6 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] sm:px-8">
      <div className="mx-auto max-w-content">
        {!showPreferences ? (
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-sans text-sm font-light leading-relaxed text-amp-cream/85">
              Usamos cookies para melhorar sua experiência e, mediante seu
              consentimento, para análise e marketing. Você pode aceitar
              todos, recusar os não essenciais ou ajustar suas preferências.
              Saiba mais na nossa{" "}
              <Link href="/privacidade" className="underline underline-offset-2 hover:text-amp-sand">
                Política de Privacidade
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="rounded-full border border-amp-gold px-5 py-2.5 text-xs font-medium uppercase tracking-widest2 text-amp-cream transition-colors duration-300 hover:bg-amp-gold hover:text-amp-wine"
              >
                Preferências
              </button>
              <button
                type="button"
                onClick={() => setConsent(CONSENT_ESSENTIAL_ONLY)}
                className="rounded-full border border-amp-gold px-5 py-2.5 text-xs font-medium uppercase tracking-widest2 text-amp-cream transition-colors duration-300 hover:bg-amp-gold hover:text-amp-wine"
              >
                Recusar não essenciais
              </button>
              <button
                type="button"
                onClick={() => setConsent(CONSENT_ALL)}
                className="rounded-full border border-amp-gold px-5 py-2.5 text-xs font-medium uppercase tracking-widest2 text-amp-cream transition-colors duration-300 hover:bg-amp-gold hover:text-amp-wine"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-display text-lg font-medium text-amp-cream">
                Preferências de cookies
              </h2>
              <p className="mt-1 font-sans text-sm font-light text-amp-cream/75">
                Escolha quais categorias de cookies deseja permitir.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <PreferenceToggle
                label="Necessários"
                description="Essenciais ao funcionamento do site. Sempre ativos."
                checked
                disabled
              />
              <PreferenceToggle
                label="Analíticos"
                description="Ajudam a entender como o site é usado."
                checked={analyticsChoice}
                onChange={setAnalyticsChoice}
              />
              <PreferenceToggle
                label="Marketing"
                description="Usados para anúncios mais relevantes."
                checked={marketingChoice}
                onChange={setMarketingChoice}
              />
            </div>

            <div className="flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="rounded-full border border-amp-gold px-5 py-2.5 text-xs font-medium uppercase tracking-widest2 text-amp-cream transition-colors duration-300 hover:bg-amp-gold hover:text-amp-wine"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={() =>
                  setConsent({
                    necessary: true,
                    analytics: analyticsChoice,
                    marketing: marketingChoice,
                  })
                }
                className="rounded-full border border-amp-gold px-5 py-2.5 text-xs font-medium uppercase tracking-widest2 text-amp-cream transition-colors duration-300 hover:bg-amp-gold hover:text-amp-wine"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PreferenceToggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="rounded-sm border border-amp-gold/30 bg-amp-cream/[0.04] p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="font-sans text-sm font-medium text-amp-cream">{label}</span>
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={label}
          disabled={disabled}
          onClick={() => onChange?.(!checked)}
          className={clsx(
            "relative h-5 w-9 shrink-0 rounded-full transition-colors duration-300",
            checked ? "bg-amp-gold" : "bg-amp-cream/25",
            disabled && "cursor-not-allowed opacity-70",
          )}
        >
          <span
            className={clsx(
              "absolute top-0.5 h-4 w-4 rounded-full bg-amp-wine transition-transform duration-300",
              checked ? "translate-x-4" : "translate-x-0.5",
            )}
          />
        </button>
      </div>
      <p className="mt-2 font-sans text-xs font-light leading-relaxed text-amp-cream/60">
        {description}
      </p>
    </div>
  );
}
