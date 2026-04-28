import Link from "next/link";
import { createWhatsAppLink, NAV_LINKS } from "@/lib/site";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.22em] text-white">
          MELANO INC
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={createWhatsAppLink("Quiero implementar IA en mi negocio")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
