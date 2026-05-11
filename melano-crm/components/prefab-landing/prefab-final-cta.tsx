"use client";

import { motion } from "framer-motion";

type PrefabFinalCtaProps = {
  whatsappHref: string;
};

export function PrefabFinalCta({ whatsappHref }: PrefabFinalCtaProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-melano-bg to-[#030304] px-4 py-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,184,120,0.12),_transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Tu próxima casa puede empezar hoy.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-melano-muted md:text-lg">
          Asesoramiento personalizado sin costo.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-[3.35rem] items-center justify-center rounded-full bg-melano-gold px-12 text-sm font-semibold tracking-wide text-melano-bg transition hover:bg-white"
        >
          Cotizar ahora
        </a>
        <p className="mx-auto mt-10 max-w-lg text-xs leading-relaxed text-white/45">
          Confianza · Obra trazable · Señal de seriedad en cada entrega
        </p>
      </motion.div>
    </section>
  );
}
