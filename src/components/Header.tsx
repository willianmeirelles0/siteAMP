"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "./Logo";
import WhatsappButton from "./WhatsappButton";
import { navLinks } from "@/lib/site-config";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header id="topo" className="fixed inset-x-0 top-0 z-50">
      {/* Wrapper com o blur: isolado do header para não virar containing
          block do overlay mobile "fixed inset-0" abaixo (backdrop-filter
          faz isso e prendia o menu à altura desta barra). */}
      <div
        className={clsx(
          "transition-all duration-300",
          isScrolled
            ? "bg-amp-wine/95 shadow-md shadow-black/10 backdrop-blur-sm"
            : "bg-amp-wine/80 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3 sm:px-8">
          <Logo priority />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm uppercase tracking-widest2 text-amp-cream/90 transition-colors duration-300 hover:text-amp-sand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <WhatsappButton />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={clsx(
                "h-px w-6 bg-amp-cream transition-transform duration-300",
                isMenuOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={clsx(
                "h-px w-6 bg-amp-cream transition-opacity duration-300",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={clsx(
                "h-px w-6 bg-amp-cream transition-transform duration-300",
                isMenuOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile em tela cheia */}
      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-amp-wine transition-opacity duration-300 lg:hidden",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="font-display text-2xl uppercase tracking-widest2 text-amp-cream"
          >
            {link.label}
          </a>
        ))}
        <WhatsappButton className="mt-4" />
      </div>
    </header>
  );
}
