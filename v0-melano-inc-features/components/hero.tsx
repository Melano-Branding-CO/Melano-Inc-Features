import { createWhatsAppLink } from "@/lib/site";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="container-shell pt-28 md:pt-36">
      <div className="premium-card overflow-hidden p-8 md:p-14">
        <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-zinc-300 md:text-lg">{subtitle}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={primaryCta.href}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            target={primaryCta.href.startsWith("http") ? "_blank" : undefined}
            rel={primaryCta.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {primaryCta.label}
          </a>
          {secondaryCta ? (
            <a
              href={secondaryCta.href}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              target={secondaryCta.href.startsWith("http") ? "_blank" : undefined}
              rel={secondaryCta.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {secondaryCta.label}
            </a>
          ) : null}
          <a
            href={createWhatsAppLink(`Hola MELANO INC, quiero hablar sobre: ${title}`)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
