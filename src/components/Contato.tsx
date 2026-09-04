import Reveal from "./Reveal";
import ContatoForm from "./ContatoForm";

export default function Contato() {
  return (
    <section id="contato" className="bg-amp-wine py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="block font-sans text-xs uppercase tracking-widest2 text-amp-sand">
            Contato
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium text-amp-cream sm:text-4xl">
            Vamos elevar o nível da sua empresa
          </h2>
          <p className="mt-4 font-sans text-base font-light leading-relaxed text-amp-cream/75">
            Preencha o formulário abaixo e clique para enviar a mensagem
            <br />
            para o WhatsApp com todas as respostas.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl">
          <ContatoForm />
        </Reveal>
      </div>
    </section>
  );
}
