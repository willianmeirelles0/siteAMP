import Reveal from "./Reveal";

/**
 * Conteúdo placeholder até a foto real ser adicionada em public/images
 * (trocar o bloco de placeholder abaixo por um <Image />).
 */
const fundadora = {
  nome: "Jéssica Andrioli",
  cargo: "Fundadora & Diretora de Estratégia",
  bio: [
    "Com uma trajetória de 6 anos dedicada ao marketing e à construção de marcas, Jéssica Andrioli fundou a AMP para unir estratégia, posicionamento e performance em um só lugar, sem abrir mão da sensibilidade que toda marca merece.",
    "Acredito em um marketing que vai além da comunicação: une estratégia, posicionamento, relacionamento e performance para construir marcas que sejam percebidas, desejadas e escolhidas.",
    "O que me move é ver empresas evoluírem, empreendedores ganharem clareza e o conhecimento se transformar em resultados reais.",
    "Sou determinada, inquieta e apaixonada por evolução. Valorizo conexões genuínas, aprendizado contínuo e a coragem de transformar desafios em novas possibilidades.",
    "Eu sou guiada pela fé, grata por cada conquista e apaixonada por viver momentos de qualidade ao lado de quem amo. Acredito que estamos aqui de passagem e que o que realmente permanece são as marcas que deixamos nas pessoas.",
    "Deus é o meu sócio. É nEle que encontro direção, força e propósito para seguir construindo.",
    "Porque, para mim, sucesso é crescer sem perder os valores que nos fizeram começar.",
  ],
};

export default function Sobre() {
  return (
    <section id="sobre" className="bg-amp-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-content grid-cols-1 items-start gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="lg:sticky lg:top-32">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm border border-amp-wine/15 bg-amp-sand/40 sm:max-w-md">
            {/* Placeholder até a foto real ser adicionada em public/images */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="font-script text-4xl text-amp-wine/70">Jéssica</span>
              <span className="font-sans text-xs uppercase tracking-widest2 text-amp-wine/50">
                Foto da fundadora, substituir em public/images
              </span>
            </div>
            <div className="pointer-events-none absolute inset-3 border border-amp-sand" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="font-display text-2xl font-medium text-amp-wine sm:text-3xl">
            {fundadora.cargo}
          </h2>

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
