import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section id={id} className={`py-20 md:py-24 ${className}`}>
      <div className="container-shell">
        {title ? (
          <div className="mb-10 max-w-3xl">
            <h2 className="section-title text-white">{title}</h2>
            {subtitle ? <p className="mt-3 text-base text-zinc-400 md:text-lg">{subtitle}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
