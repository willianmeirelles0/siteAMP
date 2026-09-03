import Reveal from "./Reveal";
import WhatsappButton from "./WhatsappButton";
import { IconCheck } from "./icons";

const duracao = "6 meses de mentoria";
const cadencia = "Encontro mensal · 2h a 3h";

/** Entregáveis da mentoria, editar conforme o formato final do programa. */
const categorias = [
  {
    titulo: "Em cada encontro",
    itens: [
      "Análise do mês anterior",
      "Planejamento estratégico do próximo mês",
      "Definição dos conteúdos",
      "Definição da linha editorial",
      "Ideias de campanhas",
      "Ações comerciais",
      "Posicionamento",
      "Ajustes conforme resultados",
    ],
  },
  {
    titulo: "Durante o mês",
    itens: [
      "Grupo de WhatsApp",
      "Correção de conteúdos",
      "Feedback de vídeos",
      "Tirar dúvidas",
      "Sugestões de melhorias",
    ],
  },
  {
    titulo: "Produção de conteúdo",
    itens: [
      "Como aparecer diante das câmeras",
      "Storytelling",
      "Roteiros",
      "Organização do Instagram",
      "Equipamentos ideais",
      "Iluminação",
      "Enquadramentos",
      "Tipos de vídeos",
      "Como criar artes",
      "Canva",
    ],
  },
  {
    titulo: "Estratégia & vendas",
    itens: [
      "Como impulsionar conteúdos",
      "Noções de Meta Ads",
      "Como analisar métricas",
      "Estratégias para vender mais",
    ],
  },
];

const fechamento = "Ideal para quem quer aprender a operar por dentro do próprio negócio, com direção mensal.";

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
              assumir decisões estratégicas com mais confiança, com a
              experiência da AMP Andrioli como guia.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-amp-wine/25 px-4 py-2 font-sans text-xs uppercase tracking-widest2 text-amp-wine">
                {duracao}
              </span>
              <span className="rounded-full border border-amp-wine/25 px-4 py-2 font-sans text-xs uppercase tracking-widest2 text-amp-wine">
                {cadencia}
              </span>
            </div>

            <WhatsappButton
              variant="dark"
              className="mt-10"
              message="Olá! Tenho interesse na Mentoria de Marketing da AMP Andrioli."
            >
              Quero ser mentorado
            </WhatsappButton>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm border border-amp-wine/15 bg-amp-cream sm:max-w-md">
              {/* Placeholder até a foto real ser adicionada em public/images */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                <span className="font-script text-4xl text-amp-wine/70">Jéssica</span>
                <span className="font-sans text-xs uppercase tracking-widest2 text-amp-wine/50">
                  Foto da mentoria, substituir em public/images
                </span>
              </div>
              <div className="pointer-events-none absolute inset-3 border border-amp-wine/20" />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categorias.map((categoria, index) => (
            <Reveal key={categoria.titulo} delay={index * 0.1}>
              <div className="h-full rounded-sm border border-amp-wine/15 bg-amp-cream p-8">
                <h3 className="font-display text-lg font-medium text-amp-wine">
                  {categoria.titulo}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {categoria.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amp-wine/10 text-amp-wine">
                        <IconCheck className="h-2.5 w-2.5" />
                      </span>
                      <span className="font-sans text-sm font-light leading-snug text-amp-ink/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <p className="font-display text-lg italic text-amp-wine/80">{fechamento}</p>
        </Reveal>
      </div>
    </section>
  );
}
