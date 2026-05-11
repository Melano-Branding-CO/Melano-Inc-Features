"use client";

import { motion } from "framer-motion";

const QUOTES = [
  {
    text: "En menos de 2 meses ya estábamos viviendo en nuestra casa.",
    author: "Mariana G.",
  },
  {
    text: "El proceso fue muchísimo más rápido de lo que imaginábamos.",
    author: "Lucas R.",
  },
  {
    text: "La mejor decisión para dejar de alquilar.",
    author: "Federico M.",
  },
];

export function PrefabTestimonials() {
  return (
    <section id="testimonios" className="scroll-mt-24 bg-[#080809] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-melano-gold">Confianza</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Historias que ya caminan sobre cimiento Melano
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, index) => (
            <motion.figure
              key={q.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-3xl border border-melano-border bg-gradient-to-b from-melano-surface to-melano-bg p-8 shadow-card"
            >
              <div className="font-display text-4xl leading-none text-melano-gold/35" aria-hidden>
                “
              </div>
              <blockquote className="mt-2 text-base leading-relaxed text-white/85">{q.text}</blockquote>
              <figcaption className="mt-8 text-sm font-medium text-melano-muted">— {q.author}</figcaption>
              <div className="pointer-events-none absolute -bottom-8 right-0 h-28 w-28 rounded-full bg-melano-gold/[0.07] blur-2xl" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
