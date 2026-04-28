import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login SaaS | MELANO INC",
  description:
    "Estructura base para el futuro portal SaaS de clientes MELANO INC.",
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-220px)] w-full max-w-3xl items-center px-6 py-12">
      <section className="w-full rounded-3xl border border-white/15 bg-white/[0.03] p-8">
        <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/65">
          Proximamente
        </span>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Portal SaaS de clientes MELANO INC
        </h1>
        <p className="mt-4 max-w-xl text-sm text-white/75 sm:text-base">
          Esta ruta queda preparada para autenticacion con Supabase y gestion
          de productos activos por cliente.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-4 text-sm text-white/75">
            <p className="font-medium text-white">Proximo modulo</p>
            <p className="mt-1">Autenticacion y recuperacion de acceso.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-4 text-sm text-white/75">
            <p className="font-medium text-white">Proximo modulo</p>
            <p className="mt-1">Dashboard de bots y metricas de conversion.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
