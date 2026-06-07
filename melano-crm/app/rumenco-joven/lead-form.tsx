"use client";

import { type FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

import { buildWhatsAppLink, getWhatsAppPhoneDigits } from "@/lib/whatsapp";
import { RUMENCO_LANDING_SLUG, RUMENCO_WHATSAPP_INTRO } from "@/lib/rumenco-landing";

import styles from "./rumenco.module.css";

const INTENT_OPTIONS = [
  { value: "", label: "Seleccioná tu interés principal" },
  { value: "ubicacion", label: "Solicitar ubicación exacta" },
  { value: "visita", label: "Agendar visita" },
  { value: "financiacion", label: "Recibir propuesta financiera" },
] as const;

const PROFILE_OPTIONS = [
  { value: "", label: "¿Cómo te definís?" },
  { value: "inversor", label: "Inversor / patrimonio" },
  { value: "familia", label: "Familia / vivienda" },
  { value: "constructor", label: "Constructor / desarrollador" },
] as const;

function LeadFormInner() {
  const searchParams = useSearchParams();
  const interes = searchParams.get("interes");
  const defaultIntent =
    interes === "ubicacion" || interes === "visita" || interes === "financiacion" ? interes : "";

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nombre = String(fd.get("nombre") ?? "").trim();
    const telefono = String(fd.get("telefono") ?? "").trim();
    const ciudad = String(fd.get("ciudad") ?? "").trim();
    const profile = String(fd.get("profile") ?? "").trim();
    const intent = String(fd.get("intent") ?? "").trim();
    const notes = String(fd.get("notes") ?? "").trim();

    setStatus("sending");

    try {
      await fetch("/api/landing-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          landing_slug: RUMENCO_LANDING_SLUG,
          name: nombre,
          phone: telefono,
          profile,
          intent,
          city: ciudad,
          notes,
        }),
      });
    } catch {
      // Seguimos con WhatsApp aunque falle la API
    }

    const profileLabel =
      PROFILE_OPTIONS.find((p) => p.value === profile)?.label || (profile ? profile : "—");
    const intentLabel =
      INTENT_OPTIONS.find((i) => i.value === intent)?.label || (intent ? intent : "—");

    const lines = [
      RUMENCO_WHATSAPP_INTRO,
      "",
      `Nombre: ${nombre || "—"}`,
      `Teléfono: ${telefono || "—"}`,
      `Ciudad: ${ciudad || "—"}`,
      `Perfil: ${profileLabel}`,
      `Interés: ${intentLabel}`,
    ];
    if (notes) {
      lines.push(`Notas: ${notes}`);
    }

    const url = buildWhatsAppLink(getWhatsAppPhoneDigits(), lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  return (
    <form className={styles.leadForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.leadGrid}>
        <label className={styles.field}>
          <span>Nombre y apellido</span>
          <input name="nombre" type="text" autoComplete="name" placeholder="Ej. Martín Acosta" />
        </label>
        <label className={styles.field}>
          <span>WhatsApp / teléfono</span>
          <input
            name="telefono"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Ej. 11 2345-6789"
            required
          />
        </label>
        <label className={styles.field}>
          <span>Ciudad / procedencia</span>
          <input name="ciudad" type="text" autoComplete="address-level2" placeholder="Ej. Buenos Aires" />
        </label>
        <label className={styles.field}>
          <span>Perfil</span>
          <select name="profile" defaultValue="" required>
            {PROFILE_OPTIONS.map((o) => (
              <option key={o.value + o.label} value={o.value} disabled={o.value === ""}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className={`${styles.field} ${styles.fieldWide}`}>
          <span>Qué necesitás ahora</span>
          <select name="intent" defaultValue={defaultIntent} required>
            {INTENT_OPTIONS.map((o) => (
              <option key={o.value + o.label} value={o.value} disabled={o.value === ""}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className={`${styles.field} ${styles.fieldWide}`}>
          <span>Comentario (opcional)</span>
          <textarea name="notes" rows={2} placeholder="Plazos, consultas sobre escritura, superficie a construir…" />
        </label>
      </div>
      <button type="submit" className={styles.primaryBtn} disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar y abrir WhatsApp"}
      </button>
      {status === "sent" ? (
        <p className={styles.formHint} role="status">
          Si no se abrió WhatsApp, revisá el bloqueo de ventanas emergentes en tu navegador.
        </p>
      ) : (
        <p className={styles.formHint}>
          Guardamos tu consulta en el CRM cuando Supabase está configurado; siempre abrimos WhatsApp con el mensaje
          listo.
        </p>
      )}
    </form>
  );
}

export function LeadForm() {
  return (
    <Suspense fallback={<p className={styles.formHint}>Cargando formulario…</p>}>
      <LeadFormInner />
    </Suspense>
  );
}
