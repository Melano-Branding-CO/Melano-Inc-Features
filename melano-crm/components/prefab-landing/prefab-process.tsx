"use client";

import { motion } from "framer-motion";

const STEPS = [
  { title: "Consulta personalizada", body: "Entendemos tu terreno, presupuesto y objetivo: vivienda o renta." },
  { title: "Diseño y planificación", body: "Planos, especificaciones y cronograma con transparencia total." },
  { title: "Fabricación", body: "Producción controlada en planta con estándares de calidad Melano." },
  { title: "Entrega e instalación", body: "Coordinación de obra gruesa, montaje y puesta en marcha." },
];

export function PrefabProcess() {
  return (
    <section id="proceso" className="scroll-mt-24 border-t border-melano-border bg-melano-bg px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-melano-gold">Metodología</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Así funciona
          </h2>
          <p className="mt-5 text-base leading-relaxed text-melano-muted md:text-lg">
            Un proceso lineal, sin improvisaciones. Sabés qué estás comprando y cuándo lo tenés.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-[1.15rem] top-0 hidden h-full w-px bg-gradient-to-b from-melano-gold/50 via-white/10 to-transparent md:block" aria-hidden />
          <ol className="grid gap-10 md:gap-14">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative grid gap-6 md:grid-cols-[auto,1fr] md:items-start md:gap-12"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-melano-gold/40 bg-melano-elevated font-display text-sm font-semibold text-melano-gold">
                    {i + 1}
                  </span>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/35 md:hidden">
                    Paso {i + 1}
                  </span>
                </div>
                <div className="rounded-2xl border border-melano-border bg-melano-surface/80 p-8 backdrop-blur-sm md:p-10">
                  <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-melano-muted md:text-base">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
