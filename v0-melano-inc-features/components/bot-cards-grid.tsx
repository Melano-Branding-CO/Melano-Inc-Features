import Link from "next/link";
import { products } from "@/lib/site";
import { SectionShell } from "@/components/section-shell";

export function BotCardsGrid() {
  return (
    <SectionShell
      id="ecosistema"
      title="Una familia de agentes especializados para crecer"
      subtitle="Cada bot esta disenado para una etapa especifica: atencion, captacion, ventas y operacion inmobiliaria."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <article
            key={product.slug}
            className="premium-card p-7 transition-transform hover:-translate-y-1"
          >
            <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
              {product.tagline}
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-white">{product.name}</h3>
            <p className="mt-3 text-zinc-300">{product.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              {product.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`/${product.slug}`}
              className="mt-6 inline-flex rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Ver {product.name}
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
