import { NextResponse } from "next/server";
import {
  SERVICOS_PONTUAIS,
  OPCOES_INTERESSE,
  type ContactErrors,
  type ContactPayload,
  type ServicoPontual,
} from "@/lib/contact";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SERVICOS_VALIDOS = new Set(SERVICOS_PONTUAIS.map((s) => s.value));
const INTERESSES_VALIDOS = new Set<string>(OPCOES_INTERESSE.map((o) => o.value));

function validate(body: Partial<ContactPayload>): ContactErrors {
  const errors: ContactErrors = {};

  if (typeof body.nome !== "string" || body.nome.trim().length < 2) {
    errors.nome = "Informe seu nome completo.";
  }

  if (typeof body.email !== "string" || !EMAIL_REGEX.test(body.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }

  const telefoneDigitos = typeof body.telefone === "string" ? body.telefone.replace(/\D/g, "") : "";
  if (telefoneDigitos.length < 10) {
    errors.telefone = "Informe um telefone válido com DDD.";
  }

  if (typeof body.interesse !== "string" || !INTERESSES_VALIDOS.has(body.interesse)) {
    errors.interesse = "Selecione uma opção de interesse.";
  } else if (body.interesse === "servicos_pontuais") {
    const servicos = Array.isArray(body.servicos) ? body.servicos : [];
    const servicosValidos = servicos.every((s): s is ServicoPontual => SERVICOS_VALIDOS.has(s as ServicoPontual));
    if (servicos.length === 0 || !servicosValidos) {
      errors.servicos = "Selecione ao menos um serviço.";
    }
  }

  if (body.aceite !== true) {
    errors.aceite = "É necessário aceitar os termos para enviar.";
  }

  return errors;
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { form: "Requisição inválida." } }, { status: 400 });
  }

  // Honeypot: campo invisível que só bots preenchem. Responde "sucesso"
  // sem processar, para não revelar a existência da proteção.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const data = {
    nome: body.nome!.trim(),
    email: body.email!.trim(),
    telefone: body.telefone!.trim(),
    empresa: body.empresa?.trim() || undefined,
    interesse: body.interesse,
    servicos: body.interesse === "servicos_pontuais" ? body.servicos : undefined,
    mensagem: body.mensagem?.trim() || undefined,
  };

  // TODO: integrar provedor de e-mail (ex. Resend) para notificar a equipe.
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "AMP <contato@ampandrioli.com.br>",
  //     to: process.env.CONTACT_TO_EMAIL!,
  //     replyTo: data.email,
  //     subject: `Novo contato pelo site — ${data.nome}`,
  //     html: renderContactEmail(data),
  //   });
  //
  // Até lá, o envio fica registrado apenas no log do servidor.
  console.log("[contato] Novo envio de formulário:", data);

  return NextResponse.json({ ok: true });
}
