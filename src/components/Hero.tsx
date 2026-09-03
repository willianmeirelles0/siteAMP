"use client";

import { motion } from "framer-motion";
import WhatsappButton from "./WhatsappButton";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-amp-wine pt-28">
      {/* Textura/gradiente sutil de profundidade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(229,210,191,0.10), transparent 45%), radial-gradient(circle at 85% 80%, rgba(229,210,191,0.08), transparent 50%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amp-sand/40 to-transparent"
      />

      <div className="relative mx-auto flex max-w-content flex-col items-center px-6 py-20 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6 font-sans text-xs uppercase tracking-widest2 text-amp-sand"
        >
          Marketing &amp; Performance
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="max-w-3xl font-display text-4xl font-medium leading-tight text-amp-cream sm:text-5xl md:text-6xl"
        >
          Atendimento Próximo e Execução de Alta Performance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-amp-cream/80 sm:text-lg"
        >
          Unimos posicionamento de alto padrão, tráfego pago e performance
          para transformar visibilidade em resultado consistente.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 font-script text-2xl text-amp-sand sm:text-3xl"
        >
          {siteConfig.slogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <WhatsappButton>Fale com a gente</WhatsappButton>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amp-cream/40 px-6 py-3 text-sm font-medium tracking-wide text-amp-cream transition-colors duration-300 hover:border-amp-cream hover:bg-amp-cream/10"
          >
            Preencher formulário
          </a>
        </motion.div>
      </div>

      {/* Indicador discreto de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <span className="block h-10 w-px animate-pulse bg-amp-sand/60" />
      </motion.div>
    </section>
  );
}
