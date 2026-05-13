import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { ReactNode } from "react";

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

const site =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: "🏡 Lote en venta en 🌊 Mar del Plata | 441 m² esquina · 💳 Financiación",
  description:
    "🏡 Lote premium de 441 m² en 📍 esquina estratégica en 🌊 Mar del Plata. Ideal para 💰 inversión, 🏠 vivienda o 🏖️ desarrollo turístico. 💳 Financiación disponible.",
  keywords: [
    "lote en venta mar del plata",
    "terrenos mar del plata",
    "inversión inmobiliaria argentina",
    "terreno financiado mar del plata",
    "lotes premium mar del plata",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "🏡 Lote en venta en 🌊 Mar del Plata | 441 m² esquina · 💳 Financiación",
    description:
      "🏡 Lote premium de 441 m² en 📍 esquina estratégica en 🌊 Mar del Plata. Ideal para 💰 inversión, 🏠 vivienda o 🏖️ desarrollo turístico. 💳 Financiación disponible.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🏡 Lote premium Mar del Plata — Matías Propiedades",
    description: "441 m² en esquina · financiación · inversión costera.",
  },
};

export default function MatiasMdpLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${display.variable} ${inter.variable}`} style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}
