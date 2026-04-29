import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const benefits = [
  "Contactos, propiedades y pipeline en una sola vista",
  "Seguimiento de actividades para equipos comerciales",
  "Base preparada para WhatsApp, Supabase y base relacional",
];

export default function LandingPage() {
  return (
    <main className="stack hero">
      <p className="eyebrow">Melano CRM</p>
      <h1>Convierte conversaciones inmobiliarias en ventas medibles.</h1>
      <p className="lead">
        Un CRM en Next.js App Router para administrar contactos, propiedades,
        oportunidades, tareas y automatizaciones desde una experiencia moderna.
      </p>
      <div className="actions">
        <Button href="/dashboard">Ver dashboard</Button>
        <Button href="/download" variant="secondary">
          Descargar
        </Button>
      </div>
      <section className="grid three">
        {benefits.map((benefit) => (
          <Card key={benefit}>
            <h2>{benefit}</h2>
            <p>Listo para conectar datos reales y extender los flujos del CRM.</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
