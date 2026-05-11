"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#modelos", label: "Modelos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Clientes" },
  { href: "#faq", label: "FAQ" },
];

export function PrefabNavbar() {
  const [solid, setSolid] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          solid ? "border-melano-border bg-melano-bg/85 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#top" className="group flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold tracking-[0.18em] text-white sm:text-xl">
              MELANO
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-melano-muted">
              Inc
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Secciones">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-melano-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#cotizar"
            className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:border-melano-gold/50 hover:bg-white/[0.07] sm:text-sm"
          >
            Cotizar
          </a>
        </div>
        <motion.div
          className="h-[2px] origin-left bg-gradient-to-r from-melano-gold via-melano-gold-muted to-transparent"
          style={{ scaleX }}
        />
      </motion.header>
    </>
  );
}
