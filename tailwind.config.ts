import type { Config } from "tailwindcss";

/**
 * Paleta e tipografia centralizadas da AMP Andrioli.
 * Ajuste fino de identidade visual deve começar por aqui.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amp: {
          // Bordô/vinho profundo, cor de fundo dominante (fixa, sem variação por seção)
          wine: "#3B0408",
          "wine-dark": "#280205",
          "wine-light": "#4E0A10",
          // Off-white — texto sobre fundo escuro
          cream: "#F8F5F1",
          // Bege — acentos e detalhes de texto
          sand: "#E5D2BF",
          "sand-dark": "#D3B99E",
          // Dourado — molduras e botões vazados (somente bordas)
          gold: "#C9A227",
          "gold-dark": "#A9861D",
          // Quase-preto — texto sobre fundo claro
          ink: "#1F1F1F",
        },
      },
      fontFamily: {
        // Títulos e wordmark
        display: ["var(--font-cormorant)", "serif"],
        // Uso pontual/cursivo (assinatura, destaques)
        script: ["var(--font-allura)", "cursive"],
        // Texto corrido
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
