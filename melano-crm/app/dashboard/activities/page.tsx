import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  { title: "Visita a propiedad", due: "Hoy 16:00", owner: "Ana" },
  { title: "Enviar propuesta", due: "Manana 09:30", owner: "Marco" },
  { title: "Seguimiento de hipoteca", due: "Viernes 11:00", owner: "Luis" },
];

export default function ActivitiesPage() {
  return (
    <section className="stack">
      <div>
        <p className="eyebrow">Actividades</p>
        <h1>Tareas y agenda comercial</h1>
      </div>
      <div className="grid three">
        {activities.map((activity) => (
          <Card key={activity.title}>
            <CardHeader>
              <CardTitle>{activity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{activity.due}</p>
              <span className="pill">Responsable: {activity.owner}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
