import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  value?: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
};

export function Card({
  title,
  value,
  description,
  eyebrow,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <section className={cn("card", className)} {...props}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2>{title}</h2> : null}
      {value ? <strong className="card-value">{value}</strong> : null}
      {description ? <p className="muted">{description}</p> : null}
      {children}
    </section>
  );
}

export function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return <Card title={label} value={value} description={detail} />;
}

export function CardHeader({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="card-header">
      {title ? <CardTitle>{title}</CardTitle> : null}
      {description ? <CardDescription>{description}</CardDescription> : null}
      {children}
    </header>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h2>{children}</h2>;
}

export function CardDescription({ children }: { children: ReactNode }) {
  return <p className="muted">{children}</p>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="card-content">{children}</div>;
}
