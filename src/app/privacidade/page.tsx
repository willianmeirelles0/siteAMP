import type { Metadata } from "next";
import { privacySections, privacyLastUpdated } from "@/lib/privacy-content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade e proteção de dados (LGPD) da Andrioli Marketing & Performance.",
};

export default function PrivacidadePage() {
  return (
    <section className="bg-amp-cream pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <span className="block font-sans text-xs uppercase tracking-widest2 text-amp-wine/60">
          LGPD
        </span>
        <h1 className="mt-4 font-display text-3xl font-medium text-amp-ink sm:text-4xl">
          Política de Privacidade
        </h1>

        <div className="mt-12 space-y-10">
          {privacySections.map((section) => (
            <div key={section.titulo}>
              <h2 className="font-display text-xl font-medium text-amp-wine">
                {section.titulo}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragrafos.map((paragrafo) => (
                  <p
                    key={paragrafo.slice(0, 32)}
                    className="font-sans text-sm font-light leading-relaxed text-amp-ink/75"
                  >
                    {paragrafo}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 font-sans text-xs uppercase tracking-widest2 text-amp-ink/40">
          Última atualização: {privacyLastUpdated}
        </p>
      </div>
    </section>
  );
}
