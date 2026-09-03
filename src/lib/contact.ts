/** Tipos e constantes compartilhados entre o formulário e a Route Handler. */

export type ServicoPontual =
  | "trafego-pago"
  | "social-media"
  | "crm"
  | "producao-conteudo"
  | "consultoria-estrategica";

/** Mantida em sincronia com os cards de src/components/Servicos.tsx. */
export const SERVICOS_PONTUAIS: { value: ServicoPontual; label: string }[] = [
  { value: "trafego-pago", label: "Gestão de Tráfego Pago" },
  { value: "social-media", label: "Social Media" },
  { value: "crm", label: "CRM" },
  { value: "producao-conteudo", label: "Produção de Conteúdo" },
  { value: "consultoria-estrategica", label: "Consultoria Estratégica" },
];

export type InteresseTipo = "servicos_pontuais" | "mentoria" | "todos_exceto_mentoria";

export const OPCOES_INTERESSE: { value: InteresseTipo; label: string }[] = [
  { value: "servicos_pontuais", label: "Serviços pontuais" },
  { value: "mentoria", label: "Mentoria de Marketing" },
  { value: "todos_exceto_mentoria", label: "Todos os serviços (exceto mentoria)" },
];

export type ContactPayload = {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  interesse: InteresseTipo | "";
  servicos: ServicoPontual[];
  mensagem: string;
  aceite: boolean;
  /** Honeypot anti-spam — deve permanecer vazio */
  website: string;
};

export const initialContactValues: ContactPayload = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  interesse: "",
  servicos: [],
  mensagem: "",
  aceite: false,
  website: "",
};

export type ContactErrors = Partial<Record<keyof ContactPayload | "form", string>>;

/** Monta a mensagem do WhatsApp com todas as respostas do formulário. */
export function buildWhatsappMessage(values: ContactPayload): string {
  const interesseLabel = OPCOES_INTERESSE.find((o) => o.value === values.interesse)?.label ?? "";
  const servicosLabel = values.servicos
    .map((s) => SERVICOS_PONTUAIS.find((opcao) => opcao.value === s)?.label)
    .filter(Boolean)
    .join(", ");

  const linhas = [
    "Olá! Vim pelo site da AMP e gostaria de falar sobre o seguinte:",
    "",
    `Nome: ${values.nome}`,
    `E-mail: ${values.email}`,
    `Telefone: ${values.telefone}`,
    values.empresa ? `Empresa: ${values.empresa}` : null,
    `Interesse: ${interesseLabel}`,
    servicosLabel ? `Serviços: ${servicosLabel}` : null,
    values.mensagem ? `Mensagem: ${values.mensagem}` : null,
  ];

  return linhas.filter((linha) => linha !== null).join("\n");
}
