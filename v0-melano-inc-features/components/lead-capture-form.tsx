"use client";

import { FormEvent, useMemo, useState } from "react";
import { createWhatsAppLink, products, type ProductSlug } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  product: ProductSlug;
  message: string;
  whatsapp: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  product: "melania",
  message: "",
  whatsapp: "",
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function LeadCaptureForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const selectedProduct =
    products.find((product) => product.slug === form.product) ?? products[0];

  const whatsappHref = useMemo(() => {
    return createWhatsAppLink(
      `Hola MELANO INC, quiero una demo de ${selectedProduct.name}. Mi email es ${form.email}.`,
    );
  }, [selectedProduct.name, form.email]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("Enviando lead...");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          product: form.product,
          message: form.message,
          whatsapp: form.whatsapp,
        }),
      });

      const payload = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "No se pudo enviar el lead");
      }

      setStatus("success");
      setStatusMessage(payload.message ?? "Lead enviado con exito.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Error inesperado");
    }
  };

  return (
    <section id="lead-form" className="container-shell py-20 md:py-24">
      <div className="grid gap-8 rounded-3xl border border-white/15 bg-white/[0.03] p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Hablemos de tu embudo en 15 minutos</h2>
          <p className="text-sm text-neutral-300">
            Te mostramos un plan personalizado con implementacion en WhatsApp, CRM y automatizacion.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <form className="grid gap-3" onSubmit={onSubmit}>
          <input
            required
            className="rounded-2xl border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-neutral-500"
            placeholder="Nombre"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />
          <input
            required
            type="email"
            className="rounded-2xl border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-neutral-500"
            placeholder="Email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
          <input
            className="rounded-2xl border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-neutral-500"
            placeholder="Empresa"
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
          />
          <input
            className="rounded-2xl border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-neutral-500"
            placeholder="WhatsApp"
            value={form.whatsapp}
            onChange={(event) => setForm((prev) => ({ ...prev, whatsapp: event.target.value }))}
          />
          <select
            className="rounded-2xl border border-white/20 bg-black px-4 py-3 text-sm text-white"
            value={form.product}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, product: event.target.value as ProductSlug }))
            }
          >
            {products.map((product) => (
              <option key={product.slug} value={product.slug}>
                {product.name}
              </option>
            ))}
          </select>
          <textarea
            className="min-h-24 rounded-2xl border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-neutral-500"
            placeholder="Contanos tu objetivo de negocio"
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Enviando..." : "Solicitar demo"}
          </button>
          <p className="text-xs text-neutral-400">{statusMessage}</p>
        </form>
      </div>
    </section>
  );
}
