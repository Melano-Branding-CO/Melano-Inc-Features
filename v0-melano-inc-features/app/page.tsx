import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { BotCardsGrid } from "@/components/bot-cards-grid";
import { ResultsSection } from "@/components/results-section";
import { LiveDemoSection } from "@/components/live-demo-section";
import { PricingPreview } from "@/components/pricing-preview";
import { CtaBlock } from "@/components/cta-block";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { createWhatsAppLink, homeUseCases } from "@/lib/site";

export const metadata: Metadata = {
  title: "MELANO INC | Automatiza tu negocio con IA",
  description:
    "Hub de automatizacion con IA para ventas, leads y operacion comercial de alto rendimiento.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="MELANO INC AI HUB"
        title="Automatiza tu negocio con IA"
        subtitle="Disenamos y operamos agentes especializados para adquirir leads, cerrar mas ventas y escalar tu operacion sin sumar complejidad."
        primaryCta={{
          label: "Hablar por WhatsApp",
          href: createWhatsAppLink(
            "Hola MELANO INC, quiero automatizar mi negocio con IA."
          ),
        }}
        secondaryCta={{ label: "Ver demo", href: "#demo-live" }}
      />
      <BotCardsGrid />
      <ResultsSection
        title="Resultados reales en operaciones comerciales"
        subtitle="Metricas de referencia para equipos que implementan automatizacion conversacional con foco en conversion."
        useCases={homeUseCases}
      />
      <LiveDemoSection />
      <PricingPreview />
      <CtaBlock
        title="Implementa IA en 14 dias"
        description="Auditamos tu funnel actual, definimos playbooks de automatizacion y lanzamos con medicion de ROI desde el dia uno."
        primary={{
          label: "Agendar consultoria",
          href: createWhatsAppLink(
            "Quiero agendar una consultoria para implementar IA."
          ),
        }}
        secondary={{ label: "Solicitar propuesta", href: "#lead-form" }}
      />
      <LeadCaptureForm />
    </>
  );
}
