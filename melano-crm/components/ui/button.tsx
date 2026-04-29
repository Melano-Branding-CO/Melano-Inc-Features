import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

export function Button({ children, className, href, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      className={cn("button", `button-${variant}`, className)}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
