import Reveal from "./Reveal";
import WhatsappButton from "./WhatsappButton";
import { IconTarget, IconMegaphone, IconWorkflow, IconFeather, IconCompass } from "./icons";

/** Lista de serviços, editar títulos/descrições conforme portfólio final. */
const servicos = [
  {
    icon: IconTarget,
    titulo: "Gestão de Tráfego Pago",
    descricao:
      "Campanhas de performance em Meta Ads e Google Ads, com otimização contínua para maximizar o retorno sobre o investimento.",
  },
  {
    icon: IconMegaphone,
    titulo: "Social Media",
    descricao:
      "Planejamento, produção e gestão de redes sociais com identidade visual consistente e calendário editorial estratégico.",
  },
  {
    icon: IconWorkflow,
    titulo: "CRM",
    descricao:
      "Organização de fluxos de atendimento, automação de mensagens e gestão de relacionamento com o cliente, para transformar contatos em vendas recorrentes.",
  },
  {
    icon: IconFeather,
    titulo: "Produção de Conteúdo",
    descricao:
      "Roteirização, captação e edição em duas versões: mobile e câmera profissional (Sony FX30), para cada formato de conteúdo.",
  },
];

/** Serviço em destaque, tratado como card de largura total. */
const consultoria = {
  icon: IconCompass,
  titulo: "Consultoria Estratégica",
  descricao:
    "Diagnóstico completo para marcas que buscam clareza estratégica. Um plano de ação personalizado antes de investir em execução.",
};

export default function Servicos() {
  return (
    <section id="servicos" className="bg-amp-cream py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="block font-sans text-xs uppercase tracking-widest2 text-amp-wine/60">
            Serviços
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium text-amp-ink sm:text-4xl">
            Onde a estratégia vira execução
          </h2>
          <p className="mt-4 font-sans text-base font-light leading-relaxed text-amp-ink/70">
            Soluções sob medida, isoladas ou combinadas, para cada momento da sua marca.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico, index) => (
            <Reveal key={servico.titulo} delay={index * 0.1}>
              <div className="flex h-full flex-col items-start rounded-sm border border-amp-gold/40 bg-white/60 p-8 transition-colors duration-300 hover:border-amp-gold">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amp-gold text-amp-wine">
                  <servico.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-amp-ink">
                  {servico.titulo}
                </h3>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-amp-ink/70">
                  {servico.descricao}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-6">
          <div className="flex flex-col items-start gap-6 rounded-sm bg-amp-wine p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amp-gold text-amp-gold">
                <consultoria.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-medium text-amp-cream">
                  {consultoria.titulo}
                </h3>
                <p className="mt-2 max-w-xl font-sans text-sm font-light leading-relaxed text-amp-cream/75">
                  {consultoria.descricao}
                </p>
              </div>
            </div>
            <WhatsappButton
              variant="outline"
              className="shrink-0"
              message="Olá! Gostaria de saber mais sobre a Consultoria Estratégica da AMP."
            >
              Falar sobre consultoria
            </WhatsappButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
