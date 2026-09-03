"use client";

import clsx from "clsx";
import { whatsappHref } from "@/lib/site-config";

type WhatsappButtonProps = {
  /**
   * Todos os botões (exceto "fab") são vazados: fundo transparente,
   * apenas borda dourada, preenchendo de dourado só no hover.
   * "solid": texto dourado, usado sobre fundo bordô (padrão, ex. Hero/Header).
   * "dark": texto bordô, usado sobre fundo claro (seções bege/off-white).
   * "outline": texto creme, variante secundária sobre fundo bordô.
   * "fab": botão flutuante fixo (mantém o verde do WhatsApp).
   */
  variant?: "solid" | "dark" | "outline" | "fab";
  message?: string;
  className?: string;
  children?: React.ReactNode;
};

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.3.63 4.44 1.72 6.28L4 29l7.94-1.66a12.9 12.9 0 0 0 4.08.66c6.62 0 12.02-5.37 12.02-11.98C28.04 8.37 22.64 3 16.02 3Zm0 21.86c-1.36 0-2.7-.35-3.87-1.02l-.28-.16-4.72.99.99-4.6-.18-.29a9.83 9.83 0 0 1-1.5-5.2c0-5.47 4.47-9.92 9.98-9.98 5.47 0 9.92 4.47 9.92 9.98 0 5.47-4.47 9.92-9.94 9.92l.6-.64Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function WhatsappButton({
  variant = "solid",
  message,
  className,
  children,
}: WhatsappButtonProps) {
  const href = whatsappHref(message);

  if (variant === "fab") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className={clsx(
          "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105",
          className,
        )}
      >
        <WhatsappIcon className="h-7 w-7" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full border border-amp-gold bg-transparent px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 hover:bg-amp-gold hover:text-amp-wine",
        variant === "outline" && "text-amp-cream",
        variant === "dark" && "text-amp-wine",
        variant === "solid" && "text-amp-gold",
        className,
      )}
    >
      <WhatsappIcon className="h-4 w-4" />
      {children ?? "Fale com a gente"}
    </a>
  );
}
