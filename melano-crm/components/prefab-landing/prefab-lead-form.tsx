"use client";

import { type FormEvent, useState } from "react";

import { hasSupabaseConfig, supabase } from "@/lib/supabase";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type PrefabLeadFormProps = {
  whatsappDigits: string;
};

function buildWhatsAppBody(nombre: string, ciudad: string, presupuesto: string) {
  const lines = [
    `Hola, mi nombre es ${nombre}. Estoy interesado en las casas prefabricadas y me gustaría recibir más información.`,
  ];
  if (ciudad) lines.push(`Ciudad: ${ciudad}`);
  if (presupuesto) lines.push(`Presupuesto estimado: ${presupuesto}`);
  return lines.join("\n\n");
}

export function PrefabLeadForm({ whatsappDigits }: PrefabLeadFormProps) {
  const [pending, setPending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setSubmitError(null);
    const fd = new FormData(e.currentTarget);
    const nombre = String(fd.get("nombre") ?? "").trim();
    const telefono = String(fd.get("telefono") ?? "").trim();
    const ciudad = String(fd.get("ciudad") ?? "").trim();
    const presupuesto = String(fd.get("presupuesto") ?? "").trim();

    if (hasSupabaseConfig && supabase) {
      const { error } = await supabase.from("leads_luxia").insert({
        nombre_completo: nombre,
        telefono: telefono,
        origen_campana: "landing_prefabricadas_ar",
        propiedad_interes: "casas prefabricadas",
      });

      if (error) {
        console.error("Supabase leads_luxia:", error);
        setSubmitError("No pudimos guardar tus datos en el sistema. Podés seguir por WhatsApp.");
      }
    }

    try {
      await fetch("/api/prefab-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, telefono, ciudad, presupuesto }),
      });
    } catch {
      /* webhook opcional */
    }

    const msg = buildWhatsAppBody(nombre, ciudad, presupuesto);
    window.open(buildWhatsAppLink(whatsappDigits, msg), "_blank", "noopener,noreferrer");
    setPending(false);
  }

  return (
    <section id="cotizar" className="scroll-mt-24 border-t border-melano-border bg-melano-bg px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-melano-gold">Datos</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Recibí tu cotización Melano
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-melano-muted md:text-base">
            Completá el formulario: registramos tu lead en nuestro sistema y abrimos WhatsApp con el mensaje listo.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-12 rounded-3xl border border-melano-border bg-melano-surface/60 p-8 shadow-card backdrop-blur-md md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-white/90">
              Nombre
              <input
                name="nombre"
                required
                autoComplete="name"
                className="min-h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/30 outline-none ring-melano-gold/40 focus:ring-2"
                placeholder="Nombre y apellido"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white/90">
              Teléfono
              <input
                name="telefono"
                required
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className="min-h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/30 outline-none ring-melano-gold/40 focus:ring-2"
                placeholder="Código de área + número"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white/90">
              Ciudad
              <input
                name="ciudad"
                autoComplete="address-level2"
                className="min-h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/30 outline-none ring-melano-gold/40 focus:ring-2"
                placeholder="Ciudad / provincia"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white/90">
              Presupuesto estimado
              <select
                name="presupuesto"
                defaultValue=""
                required
                className="min-h-12 rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none ring-melano-gold/40 focus:ring-2"
              >
                <option value="" disabled>
                  Seleccioná un rango
                </option>
                <option value="Menos de USD 25.000">Menos de USD 25.000</option>
                <option value="USD 25.000 – 45.000">USD 25.000 – 45.000</option>
                <option value="USD 45.000 – 70.000">USD 45.000 – 70.000</option>
                <option value="Más de USD 70.000">Más de USD 70.000</option>
                <option value="Prefiero asesoramiento">Prefiero asesoramiento</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            disabled={pending}
            className="mt-10 flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-white text-sm font-semibold tracking-wide text-melano-bg transition hover:bg-melano-gold disabled:cursor-wait disabled:opacity-70"
          >
            {pending ? "Enviando…" : "Recibir cotización"}
          </button>
          {submitError ? (
            <p className="mt-4 text-center text-xs text-amber-300/90" role="alert">
              {submitError}
            </p>
          ) : null}
          <p className="mt-4 text-center text-xs text-melano-muted">
            Al continuar, aceptás ser contactado por un asesor comercial Melano Inc.
          </p>
        </form>
      </div>
    </section>
  );
}
