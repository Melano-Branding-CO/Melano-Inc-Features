import { Hero } from "@/components/hero";
import { CtaBlock } from "@/components/cta-block";
import { LiveDemoSection } from "@/components/live-demo-section";
import { SectionShell } from "@/components/section-shell";
import {
  createWhatsAppLink,
  type ProductDefinition,
  type ProductLandingData,
} from "@/lib/site";

type ProductLandingProps = {
  product: ProductDefinition;
  landingData: ProductLandingData;
};

export function ProductLanding({ product, landingData }: ProductLandingProps) {
  return (
    <>
      <Hero
        eyebrow={landingData.eyebrow}
        title={landingData.title}
        subtitle={landingData.subtitle}
        primaryCta={{
          label: landingData.ctaLabel,
          href: createWhatsAppLink(landingData.ctaMessage),
        }}
        secondaryCta={{ label: "Ver demo", href: "#demo-live" }}
      />
      <SectionShell title={landingData.funnelTitle} subtitle={landingData.description}>
        <div className="grid gap-4 md:grid-cols-3">
          {landingData.funnelSteps.map((step) => (
            <article key={step} className="premium-card p-5 text-sm text-zinc-300">
              {step}
            </article>
          ))}
        </div>
      </SectionShell>
      <LiveDemoSection title={landingData.demoTitle} />
      <CtaBlock
        title={`${landingData.ctaLabel} hoy`}
        description={`Activamos ${product.name} con setup estratégico, implementación técnica y acompañamiento de MELANO INC.`}
        primary={{
          label: landingData.ctaLabel,
          href: createWhatsAppLink(landingData.ctaMessage),
        }}
        secondary={{ label: "Volver al hub", href: "/" }}
      />
    </>
  );
}
