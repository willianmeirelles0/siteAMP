"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { IconChevronLeft, IconChevronRight, IconPlay } from "./icons";

type Depoimento = {
  tipo: "video" | "imagem";
  /** Caminho em public/videos ou public/images, formato vertical 1080x1920 */
  src?: string;
  nome: string;
  empresa: string;
};

/**
 * Depoimentos em vídeo/print (clientes falando em áudio, como narração),
 * formato vertical 1080x1920. Adicionar os arquivos em public/videos ou
 * public/images e preencher `src` de cada item abaixo.
 */
const depoimentos: Depoimento[] = [
  { tipo: "video", nome: "Cliente AMP", empresa: "Empresa, substituir" },
  { tipo: "video", nome: "Cliente AMP", empresa: "Empresa, substituir" },
  { tipo: "video", nome: "Cliente AMP", empresa: "Empresa, substituir" },
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
            Marcas que confiam na AMP
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-14 flex max-w-md items-center gap-4 sm:gap-8">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Depoimento anterior"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amp-gold/60 text-amp-cream transition-colors duration-300 hover:border-amp-gold hover:text-amp-gold sm:flex"
          >
            <IconChevronLeft className="h-4 w-4" />
          </button>

          <div className="relative aspect-[9/16] w-full max-w-[300px] flex-1 overflow-hidden rounded-md">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {atual.src ? (
                  atual.tipo === "video" ? (
                    <video
                      src={atual.src}
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={atual.src} alt={`Depoimento de ${atual.nome}`} className="h-full w-full object-cover" />
                  )
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-amp-gold/40 bg-amp-cream/[0.05] px-6 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-amp-gold text-amp-gold">
                      <IconPlay className="h-5 w-5" />
                    </span>
                    <span className="font-sans text-xs uppercase tracking-widest2 text-amp-cream/50">
                      Vídeo do cliente, adicionar em public/videos
                    </span>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-amp-wine-dark/90 to-transparent px-5 pb-5 pt-10">
                  <span className="block font-sans text-sm font-medium text-amp-cream">
                    {atual.nome}
                  </span>
                  <span className="block font-sans text-xs uppercase tracking-widest2 text-amp-cream/60">
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
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amp-gold/60 text-amp-cream transition-colors duration-300 hover:border-amp-gold hover:text-amp-gold sm:flex"
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
                i === index ? "w-6 bg-amp-gold" : "w-1.5 bg-amp-cream/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
