/**
 * Configuração central do site, edite aqui números, links e textos
 * que se repetem em múltiplos componentes.
 */
export const siteConfig = {
  name: "AMP",
  fullName: "Andrioli Marketing & Performance",
  slogan: "Conteúdo constrói relacionamentos • Relacionamento gera confiança • Confiança gera receita",
  whatsappNumber: "5551998283775",
  whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da AMP.",
  email: "andriolimarketing@gmail.com",
  instagram: "https://www.instagram.com/andrioli.marketing?igsi=Nzl1d3lwb2V5NWNs",
  cnpj: "47.876.520/0001-26",
  siteUrl: "https://www.ampandrioli.com.br",
};

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Mentoria", href: "#mentoria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Vídeos", href: "#videos" },
  { label: "Contato", href: "#contato" },
];

export function whatsappHref(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}
