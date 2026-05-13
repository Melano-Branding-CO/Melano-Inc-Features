"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function formatParts(ms: number) {
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return { d, h, m, s: sec };
}

type PrefabUrgencyProps = {
  whatsappHref: string;
  /** ISO end datetime; if omitted, uses 72h from first mount (session-limited urgency). */
  offerEndIso: string | null;
};

export function PrefabUrgency({ whatsappHref, offerEndIso }: PrefabUrgencyProps) {
  const targetRef = useRef<number>(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    if (offerEndIso) {
      const t = new Date(offerEndIso).getTime();
      targetRef.current = Number.isFinite(t) ? t : Date.now() + 72 * 3600 * 1000;
    } else {
      targetRef.current = Date.now() + 72 * 3600 * 1000;
    }
    const tick = () => setRemaining(Math.max(0, targetRef.current - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [offerEndIso]);

  const parts = formatParts(remaining);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050506] px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,184,120,0.14),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-red-300/90">
            Oferta limitada · cupos de fabricación
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Los precios actuales tienen vigencia limitada.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            Solicitá una cotización hoy y asegurá tu valor. Los proyectos se priorizan por orden de consulta
            confirmada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-4 gap-3 sm:gap-4"
          aria-live="polite"
        >
          {[
            { label: "Días", value: parts.d },
            { label: "Horas", value: parts.h },
            { label: "Min", value: parts.m },
            { label: "Seg", value: parts.s },
          ].map((u) => (
            <div
              key={u.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-5 text-center backdrop-blur-sm sm:py-7"
            >
              <p className="font-display text-3xl font-semibold tabular-nums text-white sm:text-4xl">{u.value}</p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/45">{u.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-melano-gold px-10 text-sm font-semibold tracking-wide text-melano-bg transition hover:bg-white"
          >
            Hablar ahora
          </a>
        </motion.div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-white/40">
          Autoridad: +100 proyectos entregados · Transparencia en contrato · Sin letra chica en la primera reunión.
        </p>
      </div>
    </section>
  );
}
