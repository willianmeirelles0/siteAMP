"use client";

import { useId, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  buildWhatsappMessage,
  initialContactValues,
  OPCOES_INTERESSE,
  SERVICOS_PONTUAIS,
  type ContactErrors,
  type ContactPayload,
  type ServicoPontual,
} from "@/lib/contact";
import { whatsappHref } from "@/lib/site-config";

const inputClass =
  "w-full rounded-sm border border-amp-gold/40 bg-white/70 px-4 py-3 font-sans text-sm text-amp-ink placeholder:text-amp-ink/35 outline-none transition-colors duration-300 focus:border-amp-gold";

const labelClass = "block font-sans text-xs uppercase tracking-widest2 text-amp-wine/70 mb-2";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContatoForm() {
  const formId = useId();
  const [values, setValues] = useState<ContactPayload>(initialContactValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  function update<K extends keyof ContactPayload>(field: K, value: ContactPayload[K]) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function toggleServico(servico: ServicoPontual) {
    setValues((v) => ({
      ...v,
      servicos: v.servicos.includes(servico)
        ? v.servicos.filter((s) => s !== servico)
        : [...v.servicos, servico],
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});

    // Abre a aba em branco já no clique (gesto do usuário), para o
    // navegador não bloquear o pop-up quando o fetch abaixo terminar.
    const whatsappTab = window.open("", "_blank");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: { ok: boolean; errors?: ContactErrors } = await response.json();

      if (!response.ok || !data.ok) {
        whatsappTab?.close();
        setErrors(data.errors ?? { form: "Não foi possível enviar. Revise os campos e tente novamente." });
        setStatus("error");
        return;
      }

      const href = whatsappHref(buildWhatsappMessage(values));
      setWhatsappUrl(href);
      if (whatsappTab) {
        whatsappTab.location.href = href;
      }

      setStatus("success");
      setValues(initialContactValues);
    } catch {
      whatsappTab?.close();
      setErrors({ form: "Não foi possível enviar sua mensagem. Tente novamente em instantes." });
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-amp-gold/40 bg-white/70 p-10 text-center">
        <h3 className="font-display text-2xl font-medium text-amp-ink">Mensagem enviada</h3>
        <p className="mt-3 font-sans text-sm font-light leading-relaxed text-amp-ink/70">
          Abrimos o WhatsApp com todas as suas respostas preenchidas. Se a janela não abriu, use o botão abaixo.
        </p>
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full border border-amp-gold px-6 py-2.5 text-xs font-medium uppercase tracking-widest2 text-amp-wine transition-colors duration-300 hover:bg-amp-gold"
          >
            Abrir WhatsApp
          </a>
        )}
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setWhatsappUrl(null);
          }}
          className="mt-4 block w-full font-sans text-xs uppercase tracking-widest2 text-amp-wine/60 underline underline-offset-2 hover:text-amp-wine"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* Honeypot anti-spam — mantido fora da visão e da navegação por teclado */}
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={(e) => update("website", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${formId}-nome`}>
            Nome *
          </label>
          <input
            id={`${formId}-nome`}
            type="text"
            required
            value={values.nome}
            onChange={(e) => update("nome", e.target.value)}
            className={inputClass}
            placeholder="Seu nome completo"
          />
          {errors.nome && <p className="mt-2 text-xs text-amp-wine">{errors.nome}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${formId}-email`}>
            E-mail *
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="seu@email.com"
          />
          {errors.email && <p className="mt-2 text-xs text-amp-wine">{errors.email}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${formId}-telefone`}>
            Telefone *
          </label>
          <input
            id={`${formId}-telefone`}
            type="tel"
            required
            value={values.telefone}
            onChange={(e) => update("telefone", e.target.value)}
            className={inputClass}
            placeholder="(11) 99999-9999"
          />
          {errors.telefone && <p className="mt-2 text-xs text-amp-wine">{errors.telefone}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${formId}-empresa`}>
            Empresa
          </label>
          <input
            id={`${formId}-empresa`}
            type="text"
            value={values.empresa}
            onChange={(e) => update("empresa", e.target.value)}
            className={inputClass}
            placeholder="Opcional"
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>Interesse *</legend>
        <div className="space-y-3">
          {OPCOES_INTERESSE.map((opcao) => (
            <label
              key={opcao.value}
              className="flex cursor-pointer items-center gap-3 font-sans text-sm text-amp-ink"
            >
              <input
                type="radio"
                name={`${formId}-interesse`}
                value={opcao.value}
                checked={values.interesse === opcao.value}
                onChange={() => update("interesse", opcao.value)}
                className="h-4 w-4 accent-amp-wine"
              />
              {opcao.label}
            </label>
          ))}
        </div>
        {errors.interesse && <p className="mt-2 text-xs text-amp-wine">{errors.interesse}</p>}

        {values.interesse === "servicos_pontuais" && (
          <div className="mt-4 grid grid-cols-1 gap-3 rounded-sm border border-amp-gold/30 bg-white/50 p-5 sm:grid-cols-2">
            {SERVICOS_PONTUAIS.map((servico) => (
              <label
                key={servico.value}
                className="flex cursor-pointer items-center gap-3 font-sans text-sm text-amp-ink/85"
              >
                <input
                  type="checkbox"
                  checked={values.servicos.includes(servico.value)}
                  onChange={() => toggleServico(servico.value)}
                  className="h-4 w-4 accent-amp-wine"
                />
                {servico.label}
              </label>
            ))}
            {errors.servicos && (
              <p className="col-span-full text-xs text-amp-wine">{errors.servicos}</p>
            )}
          </div>
        )}
      </fieldset>

      <div>
        <label className={labelClass} htmlFor={`${formId}-mensagem`}>
          Mensagem
        </label>
        <textarea
          id={`${formId}-mensagem`}
          rows={4}
          value={values.mensagem}
          onChange={(e) => update("mensagem", e.target.value)}
          className={clsx(inputClass, "resize-none")}
          placeholder="Conte um pouco sobre o seu momento e objetivos (opcional)"
        />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 font-sans text-sm text-amp-ink/85">
          <input
            type="checkbox"
            required
            checked={values.aceite}
            onChange={(e) => update("aceite", e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-amp-wine"
          />
          <span>
            Li e aceito os termos e a{" "}
            <Link href="/privacidade" className="underline underline-offset-2 hover:text-amp-wine" target="_blank">
              Política de Privacidade
            </Link>
            . *
          </span>
        </label>
        {errors.aceite && <p className="mt-2 text-xs text-amp-wine">{errors.aceite}</p>}
      </div>

      {errors.form && <p className="text-sm text-amp-wine">{errors.form}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full border border-amp-gold bg-transparent px-6 py-3.5 text-sm font-medium uppercase tracking-widest2 text-amp-wine transition-colors duration-300 hover:bg-amp-gold disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Enviando..." : "Enviar para o WhatsApp"}
      </button>
    </form>
  );
}
