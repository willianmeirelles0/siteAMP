import Reveal from "./Reveal";
import ContatoForm from "./ContatoForm";
import { siteConfig } from "@/lib/site-config";

export default function Contato() {
  return (
    <section id="contato" className="bg-amp-cream py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="block font-sans text-xs uppercase tracking-widest2 text-amp-wine/60">
            Contato
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium text-amp-ink sm:text-4xl">
            Vamos construir o próximo capítulo da sua marca
          </h2>
          <p className="mt-4 font-sans text-base font-light leading-relaxed text-amp-ink/70">
            Preencha o formulário abaixo ou fale diretamente pelo WhatsApp em{" "}
            <span className="text-amp-wine">{siteConfig.email}</span>.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl">
          <ContatoForm />
        </Reveal>
      </div>
    </section>
  );
}
