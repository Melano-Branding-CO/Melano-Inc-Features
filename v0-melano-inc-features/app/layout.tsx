import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WhatsappFloatingButton } from "@/components/whatsapp-floating-button";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brunomelano.com"),
  title: {
    default: "MELANO INC | AI Automation Hub",
    template: "%s | MELANO INC"
  },
  description:
    "Hub de automatizacion con IA para ventas, operaciones y crecimiento. Descubri Melania, Alenya, Luxia y Alexia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MELANO INC | AI Automation Hub",
    description:
      "Automatiza tu negocio con un ecosistema de agentes de IA pensado para conversion y escala.",
    type: "website",
    locale: "es_AR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} bg-black text-zinc-100 antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <WhatsappFloatingButton />
        </div>
      </body>
    </html>
  );
}
