"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { IconChevronLeft, IconChevronRight } from "./icons";

/**
 * Depoimentos de clientes — placeholder. Substituir pelos depoimentos
 * reais assim que disponíveis.
 */
const depoimentos = [
  {
    nome: "Cliente AMP Andrioli",
    empresa: "Empresa — [substituir]",
    texto:
      "A AMP Andrioli entendeu nossa marca antes mesmo de propor qualquer campanha. O resultado foi um posicionamento muito mais claro e um crescimento consistente em vendas.",
  },
  {
    nome: "Cliente AMP Andrioli",
    empresa: "Empresa — [substituir]",
    texto:
      "Profissionalismo do início ao fim. Os relatórios de performance são claros e a comunicação é constante — sentimos que temos um time de marketing próprio.",
  },
  {
    nome: "Cliente AMP Andrioli",
    empresa: "Empresa — [substituir]",
    texto:
      "Trocamos de agência depois de experiências frustrantes e a diferença foi enorme. Estratégia, sofisticação visual e atenção aos detalhes em cada entrega.",
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % depoimentos.length);
    }, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + depoimentos.length) % depoimentos.length);
  }

  const atual = depoimentos[index];

  return (
    <section id="depoimentos" className="bg-amp-wine py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="block font-sans text-xs uppercase tracking-widest2 text-amp-sand">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium text-amp-cream sm:text-4xl">
            Marcas que confiam na AMP Andrioli
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-14 flex max-w-2xl items-center gap-4 sm:gap-8">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Depoimento anterior"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amp-cream/30 text-amp-cream transition-colors duration-300 hover:border-amp-sand hover:text-amp-sand sm:flex"
          >
            <IconChevronLeft className="h-4 w-4" />
          </button>

          <div className="relative min-h-[220px] flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                <p className="font-display text-xl italic leading-relaxed text-amp-cream sm:text-2xl">
                  &ldquo;{atual.texto}&rdquo;
                </p>
                <div className="mt-8 flex flex-col items-center gap-1">
                  <span className="font-sans text-sm font-medium text-amp-sand">
                    {atual.nome}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-widest2 text-amp-cream/50">
                    {atual.empresa}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próximo depoimento"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amp-cream/30 text-amp-cream transition-colors duration-300 hover:border-amp-sand hover:text-amp-sand sm:flex"
          >
            <IconChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {depoimentos.map((depoimento, i) => (
            <button
              key={depoimento.nome + i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-amp-sand" : "w-1.5 bg-amp-cream/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
