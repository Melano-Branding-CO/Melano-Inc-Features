import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const automations = [
  "Lead nuevo -> mensaje WhatsApp en 2 minutos",
  "Visita agendada -> recordatorio al agente",
  "Oferta enviada -> seguimiento en 48 horas",
];

export default function AutomationsPage() {
  return (
    <section className="stack">
      <div>
        <p className="eyebrow">Automatizaciones</p>
        <h1>Flujos comerciales</h1>
      </div>

      <div className="grid three">
        {automations.map((automation) => (
          <Card key={automation}>
            <CardHeader>
              <CardTitle>{automation}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="muted">Activo para leads con prioridad media o alta.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
