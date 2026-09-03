/** Tipos e constantes compartilhados entre o formulário e a Route Handler. */

export type ServicoPontual =
  | "trafego-pago"
  | "social-media"
  | "branding"
  | "producao-conteudo"
  | "consultoria-estrategica";

export const SERVICOS_PONTUAIS: { value: ServicoPontual; label: string }[] = [
  { value: "trafego-pago", label: "Gestão de Tráfego Pago" },
  { value: "social-media", label: "Social Media" },
  { value: "branding", label: "Branding" },
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
