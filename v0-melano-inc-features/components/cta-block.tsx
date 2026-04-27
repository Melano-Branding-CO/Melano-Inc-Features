type CtaLink = { label: string; href: string };

type CtaBlockProps = {
  title: string;
  description: string;
  primary: CtaLink;
  secondary?: CtaLink;
};

export function CtaBlock({ title, description, primary, secondary }: CtaBlockProps) {
  return (
    <div className="container-shell py-20 md:py-24">
      <div className="premium-card rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-zinc-300">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            href={primary.href}
            target={primary.href.startsWith("http") ? "_blank" : undefined}
            rel={primary.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {primary.label}
          </a>
          {secondary ? (
            <a
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              href={secondary.href}
              target={secondary.href.startsWith("http") ? "_blank" : undefined}
              rel={secondary.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {secondary.label}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
