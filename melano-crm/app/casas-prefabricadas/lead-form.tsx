"use client";

import { type FormEvent, useState } from "react";

import { buildWhatsAppLink, DEFAULT_WHATSAPP_INTRO, getWhatsAppPhoneDigits } from "@/lib/whatsapp";

import styles from "./prefabricadas.module.css";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nombre = String(fd.get("nombre") ?? "").trim();
    const telefono = String(fd.get("telefono") ?? "").trim();
    const ciudad = String(fd.get("ciudad") ?? "").trim();
    const presupuesto = String(fd.get("presupuesto") ?? "").trim();

    const lines = [
      DEFAULT_WHATSAPP_INTRO,
      "",
      `Nombre: ${nombre || "—"}`,
      `Teléfono: ${telefono || "—"}`,
      `Ciudad: ${ciudad || "—"}`,
      `Presupuesto aprox.: ${presupuesto || "—"}`,
    ];
    const url = buildWhatsAppLink(getWhatsAppPhoneDigits(), lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  return (
    <form className={styles.leadForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.leadGrid}>
        <label className={styles.field}>
          <span>Nombre y apellido</span>
          <input name="nombre" type="text" autoComplete="name" placeholder="Ej. Laura Fernández" />
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
          <span>Ciudad / provincia</span>
          <input name="ciudad" type="text" autoComplete="address-level2" placeholder="Ej. Rosario, Santa Fe" />
        </label>
        <label className={styles.field}>
          <span>Presupuesto orientativo</span>
          <select name="presupuesto" defaultValue="">
            <option value="" disabled>
              Seleccioná un rango
            </option>
            <option value="Menos de $25M">Menos de $25M</option>
            <option value="$25M – $45M">$25M – $45M</option>
            <option value="$45M – $70M">$45M – $70M</option>
            <option value="Más de $70M">Más de $70M</option>
            <option value="Prefiero que me asesoren">Prefiero que me asesoren</option>
          </select>
        </label>
      </div>
      <button type="submit" className={styles.primaryBtn}>
        Enviar y abrir WhatsApp
      </button>
      {status === "sent" ? (
        <p className={styles.formHint} role="status">
          Si no se abrió WhatsApp, revisá el bloqueo de ventanas emergentes en tu navegador.
        </p>
      ) : (
        <p className={styles.formHint}>
          Al enviar, se abre WhatsApp con tu mensaje listo. Sin spam: solo coordinación comercial.
        </p>
      )}
    </form>
  );
}
