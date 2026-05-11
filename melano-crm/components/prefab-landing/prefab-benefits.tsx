"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "Entrega rápida",
    body: "Tu casa lista en 30 a 90 días.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Ahorro inteligente",
    body: "Hasta 40% menos costo que construcción tradicional.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Diseño moderno",
    body: "Espacios premium, funcionales y personalizables.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    ),
  },
  {
    title: "Financiación",
    body: "Opciones accesibles y asesoramiento personalizado.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export function PrefabBenefits() {
  return (
    <section id="beneficios" className="relative border-t border-melano-border bg-melano-bg px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-line opacity-70" aria-hidden />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-melano-gold">Ventaja competitiva</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Por qué elegir una casa prefabricada
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-melano-muted md:text-lg">
            Para familias que buscan la primera casa, inversores que quieren escalar, y quienes están cansados de alquilar
            sin activo real. Menos improvisación, más control de obra y costos.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-melano-border bg-melano-surface p-8 shadow-card transition hover:border-melano-gold/25 hover:shadow-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-melano-gold transition group-hover:bg-melano-gold/10">
                {item.icon}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-melano-muted">{item.body}</p>
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-melano-gold/[0.06] blur-2xl transition group-hover:bg-melano-gold/[0.1]" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
