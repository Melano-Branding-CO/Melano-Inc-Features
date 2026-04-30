import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const messages = [
  {
    contact: "Valeria Rios",
    message: "Hola, quiero agendar una visita para el departamento de Palermo.",
    status: "Nuevo",
  },
  {
    contact: "Diego Molina",
    message: "Gracias por la informacion. Lo reviso con mi pareja.",
    status: "En seguimiento",
  },
  {
    contact: "Carla Torres",
    message: "Confirmo que puedo el jueves a las 11:30.",
    status: "Confirmado",
  },
];

export default function WhatsAppPage() {
  return (
    <section className="stack">
      <div>
        <p className="eyebrow">WhatsApp</p>
        <h1>Chat centralizado</h1>
        <p className="muted">
          Conversaciones, estado comercial y proximas respuestas desde un solo tablero.
        </p>
      </div>

      <div className="chat-layout">
        <Card>
          <CardHeader>
            <CardTitle>Bandeja</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="list">
              {messages.map((message) => (
                <article className="list-item" key={message.contact}>
                  <div>
                    <strong>{message.contact}</strong>
                    <p>{message.message}</p>
                  </div>
                  <span className="badge">{message.status}</span>
                </article>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="panel-highlight">
          <CardHeader>
            <CardTitle>Respuesta sugerida</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Hola Valeria, tenemos disponibilidad hoy a las 17:00 o manana a las
              10:00. Te comparto ficha completa y ubicacion para coordinar.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
