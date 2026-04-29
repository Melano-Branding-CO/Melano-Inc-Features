import { MetricCard } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

const metrics = [
  { label: "Contactos activos", value: "1,284", detail: "+18% este mes" },
  { label: "Pipeline abierto", value: formatCurrency(2840000), detail: "32 oportunidades" },
  { label: "Tiempo de respuesta", value: "7 min", detail: "WhatsApp promedio" },
];

const nextActions = [
  "Responder consultas nuevas de WhatsApp",
  "Revisar propiedades pendientes de publicacion",
  "Enviar seguimiento a prospectos en negociacion",
];

export default function DashboardPage() {
  return (
    <section className="stack">
      <div className="section-heading">
        <p className="eyebrow">Vista general</p>
        <h1>Control central para operaciones inmobiliarias.</h1>
        <p>
          Prioriza oportunidades, mide actividad comercial y coordina al equipo
          desde un panel unico.
        </p>
      </div>

      <div className="grid three">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="panel">
        <h2>Acciones recomendadas</h2>
        <ul className="check-list">
          {nextActions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
