import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./prefab-tailwind.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melano Inc · Casas prefabricadas Argentina & LATAM",
  description:
    "Tu casa propia en semanas, no años. Casas prefabricadas modernas con entrega rápida, financiación y diseño premium. Cotizá por WhatsApp.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Melano Inc · Tu casa propia en semanas, no años",
    description:
      "Construimos casas prefabricadas modernas con entrega rápida, financiación y diseño premium. Argentina y LATAM.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melano Inc · Casas prefabricadas",
    description: "Casas prefabricadas premium. Cotización por WhatsApp.",
  },
};

export default function CasasPrefabricadasLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${display.variable} ${inter.variable} font-sans antialiased`}>{children}</div>
  );
}
