"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export type HouseModel = {
  id: string;
  name: string;
  tagline: string;
  m2: string;
  specs: string[];
  price: string;
  image: string;
  waMessage: string;
};

const MODELS: HouseModel[] = [
  {
    id: "base",
    name: "Modelo Base",
    tagline: "Entrada premium · máximo rendimiento",
    m2: "45 m²",
    specs: ["1 habitación", "Cocina integrada", "Diseño eficiente"],
    price: "Desde USD 18.000",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    waMessage:
      "Hola, quiero información sobre las casas prefabricadas. Me interesa el Modelo Base.",
  },
  {
    id: "familiar",
    name: "Modelo Familiar",
    tagline: "Espacio real para vivir o rentar",
    m2: "75 m²",
    specs: ["2 habitaciones", "Living amplio", "Distribución luminosa"],
    price: "Desde USD 35.000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    waMessage:
      "Hola, quiero información sobre las casas prefabricadas. Me interesa el Modelo Familiar.",
  },
  {
    id: "premium",
    name: "Modelo Premium",
    tagline: "Firma Melano · presencia arquitectónica",
    m2: "120 m²",
    specs: ["3 habitaciones", "Diseño premium", "Grandes aberturas"],
    price: "Desde USD 65.000",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    waMessage:
      "Hola, quiero información sobre las casas prefabricadas. Me interesa el Modelo Premium.",
  },
];

type PrefabModelsProps = {
  whatsappDigits: string;
};

export function PrefabModels({ whatsappDigits }: PrefabModelsProps) {
  return (
    <section id="modelos" className="scroll-mt-24 bg-[#0b0b0d] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-melano-gold">Catálogo</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              Arquitectura pensada para invertir o habitar
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-melano-muted md:text-right">
            Precios referenciales en USD para orientación comercial. Cotización final según ubicación, obra de
            implantación y personalización.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {MODELS.map((m, index) => (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-melano-border bg-melano-surface shadow-card transition duration-500 hover:-translate-y-1 hover:border-melano-gold/30 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={m.image}
                  alt={`Fachada y entorno del ${m.name} Melano Inc`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/70">{m.m2}</p>
                    <p className="font-display text-xl font-semibold text-white">{m.name}</p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {m.price}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-medium uppercase tracking-wider text-melano-gold-muted">{m.tagline}</p>
                <ul className="mt-4 space-y-2 text-sm text-melano-muted">
                  {m.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-melano-gold" aria-hidden />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={buildWhatsAppLink(whatsappDigits, m.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-[3rem] items-center justify-center rounded-full bg-white text-sm font-semibold text-melano-bg transition hover:bg-melano-gold"
                >
                  Solicitar información
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
