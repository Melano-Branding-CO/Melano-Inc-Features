"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TRUST = [
  { label: "+100 proyectos entregados", sub: "Trayectoria real en obra y entrega" },
  { label: "Financiación disponible", sub: "Opciones para familia e inversión" },
  { label: "Entrega rápida", sub: "Plazos claros, sin sorpresas" },
];

type PrefabHeroProps = {
  whatsappHref: string;
};

export function PrefabHero({ whatsappHref }: PrefabHeroProps) {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop"
        alt="Vivienda prefabricada moderna con iluminación cálida al atardecer"
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[0.55]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-melano-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,184,120,0.12),_transparent_55%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-32 lg:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-melano-gold sm:text-xs"
        >
          Argentina · LATAM · prefabricación premium
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="max-w-4xl font-display text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Tu casa propia en semanas, no años.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
        >
          Construimos casas prefabricadas modernas con entrega rápida, financiación y diseño premium.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-8 text-sm font-semibold tracking-wide text-melano-bg transition hover:bg-melano-gold hover:text-melano-bg"
          >
            Cotizar por WhatsApp
          </a>
          <Link
            href="#modelos"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/20 px-8 text-sm font-semibold tracking-wide text-white transition hover:border-melano-gold/60 hover:text-melano-gold"
          >
            Ver modelos
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38 }}
          className="mt-14 grid gap-4 sm:grid-cols-3"
        >
          {TRUST.map((t) => (
            <li
              key={t.label}
              className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-md"
            >
              <p className="text-sm font-semibold text-white">{t.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/55">{t.sub}</p>
              <span className="mt-3 block h-px w-12 bg-gradient-to-r from-melano-gold to-transparent" aria-hidden />
            </li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-12 max-w-xl text-xs leading-relaxed text-white/45"
        >
          Casas prefabricadas modernas, accesibles y listas para habitar. Cupos limitados de fabricación este mes ·
          Asesoramiento personalizado sin costo · Precios referenciales actualizables según proyecto.
        </motion.p>
      </div>
    </section>
  );
}
