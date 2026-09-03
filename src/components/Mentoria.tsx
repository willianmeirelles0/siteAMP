import Reveal from "./Reveal";
import WhatsappButton from "./WhatsappButton";
import { IconCheck } from "./icons";

/** Proposta da mentoria — ajustar conforme o formato final do programa. */
const beneficios = [
  "Encontros individuais com a fundadora da AMP Andrioli",
  "Plano de ação personalizado para o seu momento de negócio",
  "Acesso direto via WhatsApp entre os encontros",
  "Templates e frameworks exclusivos de estratégia e performance",
];

/**
 * Prova social de mentorados — placeholder. Substituir por depoimentos
 * reais assim que disponíveis.
 */
const mentorados = [
  {
    nome: "Cliente Mentorado",
    cargo: "Empreendedora(o) — [substituir]",
    depoimento:
      "A mentoria trouxe clareza para as minhas decisões de marketing. Saí de cada encontro com direção prática, não só teoria.",
  },
  {
    nome: "Cliente Mentorado",
    cargo: "Fundador(a) de marca — [substituir]",
    depoimento:
      "Finalmente entendi como ler os números da minha operação e priorizar onde investir. Recomendo para quem quer pensar estrategicamente.",
  },
];

export default function Mentoria() {
  return (
    <section id="mentoria" className="bg-amp-sand py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="block font-sans text-xs uppercase tracking-widest2 text-amp-wine/70">
              Mentoria de Marketing
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-amp-ink sm:text-4xl">
              Para quem quer aprender a pensar como estrategista
            </h2>
            <p className="mt-5 font-sans text-base font-light leading-relaxed text-amp-ink/75">
              Um espaço individual de acompanhamento para empreendedores e
              profissionais de marketing que querem sair do operacional e
              assumir decisões estratégicas com mais confiança — com a
              experiência da AMP Andrioli como guia.
            </p>

            <ul className="mt-8 space-y-4">
              {beneficios.map((beneficio) => (
                <li key={beneficio} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amp-wine text-amp-cream">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  <span className="font-sans text-sm font-light leading-relaxed text-amp-ink/80">
                    {beneficio}
                  </span>
                </li>
              ))}
            </ul>

            <WhatsappButton
              variant="dark"
              className="mt-10"
              message="Olá! Tenho interesse na Mentoria de Marketing da AMP Andrioli."
            >
              Quero ser mentorado
            </WhatsappButton>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-6">
            {mentorados.map((mentorado) => (
              <div
                key={mentorado.depoimento.slice(0, 20)}
                className="rounded-sm border border-amp-wine/15 bg-amp-cream p-8"
              >
                <p className="font-display text-lg italic leading-relaxed text-amp-ink/90">
                  &ldquo;{mentorado.depoimento}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amp-wine/10 font-display text-sm text-amp-wine">
                    {mentorado.nome.charAt(0)}
                  </span>
                  <div>
                    <p className="font-sans text-sm font-medium text-amp-ink">
                      {mentorado.nome}
                    </p>
                    <p className="font-sans text-xs uppercase tracking-widest2 text-amp-ink/50">
                      {mentorado.cargo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
