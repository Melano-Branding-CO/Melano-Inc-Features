"use client";

import { type FormEvent, useState } from "react";

import { hasSupabaseConfig, supabase } from "@/lib/supabase";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MATIAS_WA_DIGITS, MATIAS_WA_MSG_INFO } from "@/lib/matias-mdp";

import styles from "./matias-mdp.module.css";

export function MatiasLeadForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    const nombre_completo = String(fd.get("nombre_completo") ?? "").trim();
    const whatsapp = String(fd.get("whatsapp") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const objetivo = String(fd.get("objetivo") ?? "").trim();

    const propiedad_interes = `Lote 441m² MDP esquina | Objetivo: ${objetivo || "—"}`;

    if (hasSupabaseConfig && supabase) {
      const { error: sbError } = await supabase.from("leads_luxia").insert({
        nombre_completo,
        telefono: whatsapp,
        email: email || null,
        propiedad_interes,
        origen_campana: "landing_matias_mdp",
      });
      if (sbError) {
        console.error("Supabase leads_luxia:", sbError);
        setError(
          "No pudimos registrar el lead en el CRM. Verificá que exista la tabla leads_luxia y las políticas RLS.",
        );
      }
    }

    try {
      const res = await fetch("/api/matias-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre_completo, whatsapp, email, objetivo }),
      });

      if (!res.ok) {
        console.error("Webhook /api/matias-lead error:", {
          status: res.status,
          statusText: res.statusText,
        });
        setError(
          "No pudimos notificar el webhook opcional (/api/matias-lead). Verificá la configuración del backend.",
        );
      }
    } catch (err) {
      console.error("Webhook /api/matias-lead network/error:", err);
      /* webhook opcional */
    }

    const waMsg = [
      MATIAS_WA_MSG_INFO,
      "",
      `Nombre: ${nombre_completo}`,
      `WhatsApp: ${whatsapp}`,
      email ? `Email: ${email}` : null,
      `Objetivo: ${objetivo || "—"}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(MATIAS_WA_DIGITS, waMsg), "_blank", "noopener,noreferrer");
    e.currentTarget.reset();
    setPending(false);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formGrid}>
        <label className={styles.field}>
          <span>👤 Nombre completo</span>
          <input name="nombre_completo" required autoComplete="name" placeholder="Nombre y apellido" />
        </label>
        <label className={styles.field}>
          <span>📲 WhatsApp</span>
          <input
            name="whatsapp"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Código de área + número"
          />
        </label>
        <label className={styles.field}>
          <span>📧 Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="tu@email.com" />
        </label>
        <label className={styles.field}>
          <span>❓ ¿Comprás para vivir o invertir?</span>
          <select name="objetivo" required defaultValue="">
            <option value="" disabled>
              Elegí una opción
            </option>
            <option value="Vivir">Vivir</option>
            <option value="Invertir">Invertir</option>
            <option value="Ambos / evaluando">Ambos / evaluando</option>
          </select>
        </label>
      </div>
      {error ? <p className={styles.errorBanner}>{error}</p> : null}
      <button type="submit" className={styles.btnPrimary} disabled={pending}>
        {pending ? "Enviando…" : "📩 SOLICITAR INFORMACIÓN"}
      </button>
      <p className={styles.formHint}>
        Al enviar, abrimos WhatsApp con tu consulta. Si configuraste Supabase, el lead se guarda en{" "}
        <code>leads_luxia</code> con origen <code>landing_matias_mdp</code>.
      </p>
    </form>
  );
}
