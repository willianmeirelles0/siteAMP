import Link from "next/link";
import Logo from "./Logo";
import { navLinks, siteConfig, whatsappHref } from "@/lib/site-config";
import { IconInstagram, IconMail } from "./icons";

// No rodapé o slogan aparece sem os marcadores "•" usados no Hero.
const footerSlogan = `${siteConfig.slogan
  .split("•")
  .map((parte) => parte.trim())
  .join(". ")}.`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-amp-wine pt-16">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs font-sans text-sm font-light leading-relaxed text-amp-cream/65">
              {footerSlogan}
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest2 text-amp-sand">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-amp-cream/75 transition-colors duration-300 hover:text-amp-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest2 text-amp-sand">
              Contato
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 font-sans text-sm text-amp-cream/75 transition-colors duration-300 hover:text-amp-cream"
                >
                  <IconMail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-amp-cream/75 transition-colors duration-300 hover:text-amp-cream"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest2 text-amp-sand">
              Redes sociais
            </h3>
            <div className="mt-5 flex gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da AMP"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-amp-gold/70 text-amp-cream transition-colors duration-300 hover:border-amp-gold hover:text-amp-gold"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-amp-cream/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-xs text-amp-cream/50">
            © {year} {siteConfig.fullName}. CNPJ {siteConfig.cnpj}. Todos os direitos reservados.
          </p>
          <Link
            href="/privacidade"
            className="font-sans text-xs text-amp-cream/50 underline underline-offset-2 transition-colors duration-300 hover:text-amp-cream"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
