import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const assets = ["App web CRM", "Guia de onboarding", "Plantilla CSV contactos"];

export default function DownloadPage() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <span className="eyebrow">Descarga</span>
        <h1>Instala Melano CRM y prepara tus datos comerciales.</h1>
        <p>
          Centraliza contactos, propiedades y actividades desde una base lista para
          conectar con una base SQL y Supabase.
        </p>
        <Button href="/dashboard">Abrir CRM</Button>
      </section>

      <section className="grid three-columns">
        {assets.map((asset) => (
          <Card key={asset} title={asset} description="Incluido en el paquete inicial." />
        ))}
      </section>
    </main>
  );
}
