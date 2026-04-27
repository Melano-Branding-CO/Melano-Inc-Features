import { pricingPreview } from "@/lib/site";
import { SectionShell } from "@/components/section-shell";

export function PricingPreview() {
  return (
    <SectionShell
      id="pricing"
      title="Pricing preview"
      subtitle="Planes pensados para probar rápido y escalar sin fricción."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {pricingPreview.map((plan) => (
          <article
            key={plan.name}
            className={`premium-card p-6 ${
              plan.highlight ? "ring-1 ring-white/35" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
            <p className="mt-3 text-sm text-zinc-300">{plan.description}</p>
            <p className="mt-5 text-3xl font-semibold text-white">{plan.price}</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-300">
              {plan.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
