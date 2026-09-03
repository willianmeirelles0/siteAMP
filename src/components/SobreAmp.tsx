import Reveal from "./Reveal";
import { IconCompass, IconChart, IconSpark, IconInfinity } from "./icons";

/** Missão institucional, ajustar redação fina conforme posicionamento final. */
const missao =
  "Existimos para transformar marcas em referências de mercado, unindo estratégia, dados e sensibilidade criativa em cada decisão.";

/** Pilares/diferenciais, editar títulos e descrições conforme necessário. */
const pilares = [
  {
    icon: IconCompass,
    titulo: "Estratégia sob medida",
    descricao:
      "Nada de fórmulas prontas: cada marca recebe um plano construído a partir de seu momento, público e objetivos reais.",
  },
  {
    icon: IconChart,
    titulo: "Performance com transparência",
    descricao:
      "Decisões orientadas por dados, com relatórios claros: você sempre sabe onde o investimento está gerando retorno.",
  },
  {
    icon: IconSpark,
    titulo: "Excelência criativa",
    descricao:
      "Narrativa, estética e tom de voz alinhados ao padrão de cada marca, sem abrir mão de sofisticação.",
  },
  {
    icon: IconInfinity,
    titulo: "Parceria de longo prazo",
    descricao:
      "Atuamos como extensão do seu time, acompanhando cada fase do crescimento, e não como um fornecedor pontual.",
  },
];

export default function SobreAmp() {
  return (
    <section id="empresa" className="bg-amp-wine py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="block font-sans text-xs uppercase tracking-widest2 text-amp-sand">
            Sobre a Andrioli Marketing & Performance
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-amp-cream sm:text-4xl">
            {missao}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((pilar, index) => (
            <Reveal key={pilar.titulo} delay={index * 0.1}>
              <div className="flex h-full flex-col items-start rounded-sm border border-amp-cream/15 bg-amp-cream/[0.04] p-8 transition-colors duration-300 hover:border-amp-sand/50">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amp-sand/50 text-amp-sand">
                  <pilar.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-amp-cream">
                  {pilar.titulo}
                </h3>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-amp-cream/70">
                  {pilar.descricao}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
