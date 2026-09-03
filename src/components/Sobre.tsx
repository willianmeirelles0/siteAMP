import Reveal from "./Reveal";

/**
 * Conteúdo placeholder — substituir pela bio real da fundadora
 * e, quando disponível, adicionar a foto em public/images e trocar
 * o bloco de placeholder abaixo por um <Image />.
 */
const fundadora = {
  nome: "Jéssica Andrioli",
  cargo: "Fundadora & Diretora de Estratégia",
  bio: [
    "Com uma trajetória dedicada ao marketing e à construção de marcas, Jéssica Andrioli fundou a AMP Andrioli para unir estratégia, sofisticação e performance em um só lugar — sem abrir mão da sensibilidade que toda marca merece.",
    "Acredita que resultados consistentes nascem de posicionamento claro, dados bem lidos e parcerias de confiança. É essa visão que guia cada projeto assinado pela agência.",
  ],
};

export default function Sobre() {
  return (
    <section id="sobre" className="bg-amp-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm border border-amp-wine/15 bg-amp-sand/40 sm:max-w-md">
            {/* Placeholder até a foto real ser adicionada em public/images */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="font-script text-4xl text-amp-wine/70">Jéssica</span>
              <span className="font-sans text-xs uppercase tracking-widest2 text-amp-wine/50">
                Foto da fundadora — substituir em public/images
              </span>
            </div>
            <div className="pointer-events-none absolute inset-3 border border-amp-sand" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="block font-sans text-xs uppercase tracking-widest2 text-amp-wine/60">
            A fundadora
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-amp-ink sm:text-4xl">
            {fundadora.nome}
          </h2>
          <p className="mt-1 font-sans text-sm uppercase tracking-widest2 text-amp-wine/70">
            {fundadora.cargo}
          </p>

          <div className="mt-6 space-y-4 font-sans text-base font-light leading-relaxed text-amp-ink/80">
            {fundadora.bio.map((paragrafo) => (
              <p key={paragrafo.slice(0, 24)}>{paragrafo}</p>
            ))}
          </div>

          <span className="mt-8 block font-script text-3xl text-amp-wine">
            {fundadora.nome}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
