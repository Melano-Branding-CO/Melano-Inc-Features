import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

const stages = [
  { name: "Nuevo lead", deals: 14, value: 126000 },
  { name: "Calificacion", deals: 8, value: 92000 },
  { name: "Visita agendada", deals: 6, value: 174000 },
  { name: "Oferta", deals: 3, value: 136000 },
  { name: "Cierre", deals: 2, value: 98000 },
];

export default function PipelinePage() {
  return (
    <section className="stack">
      <div className="page-heading">
        <p className="eyebrow">Pipeline</p>
        <h1>Ventas por etapa</h1>
      </div>
      <div className="kanban">
        {stages.map((stage) => (
          <Card key={stage.name}>
            <CardHeader>
              <CardTitle>{stage.name}</CardTitle>
              <CardDescription>{stage.deals} oportunidades activas</CardDescription>
            </CardHeader>
            <CardContent>
              <strong>{formatCurrency(stage.value)}</strong>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
