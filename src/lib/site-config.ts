/**
 * Configuração central do site, edite aqui números, links e textos
 * que se repetem em múltiplos componentes.
 */
export const siteConfig = {
  name: "AMP",
  fullName: "Andrioli Marketing & Performance",
  slogan: "Conteúdo constrói relacionamentos • Relacionamento gera confiança • Confiança gera receita",
  // TODO: substituir pelo número real em formato internacional, ex. "5511999999999"
  whatsappNumber: "5511999999999",
  whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da AMP.",
  email: "contato@ampandrioli.com.br",
  instagram: "https://instagram.com/ampandrioli",
  linkedin: "https://linkedin.com/company/ampandrioli",
  siteUrl: "https://www.ampandrioli.com.br",
};

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Mentoria", href: "#mentoria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function whatsappHref(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}
