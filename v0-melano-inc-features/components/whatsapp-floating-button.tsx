"use client";

import { createWhatsAppLink } from "@/lib/site";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={createWhatsAppLink("Hola MELANO INC, quiero una demo de sus agentes IA.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full border border-neutral-800 bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_16px_32px_rgba(16,185,129,0.35)] transition-transform hover:-translate-y-1"
      aria-label="Contactar por WhatsApp"
    >
      WhatsApp
    </a>
  );
}
