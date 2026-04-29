import { Card, CardContent, CardHeader } from "@/components/ui/card";

const settings = [
  ["Empresa", "Melano Realty"],
  ["Zona horaria", "America/Mexico_City"],
  ["Idioma", "Espanol"],
  ["Integraciones", "Supabase, SQL relacional, WhatsApp Business"],
];

export default function SettingsPage() {
  return (
    <section className="stack">
      <div className="page-heading">
        <p className="eyebrow">Configuracion</p>
        <h1>Ajustes del CRM</h1>
      </div>
      <Card>
        <CardHeader
          title="Preferencias del workspace"
          description="Centraliza la informacion basica antes de conectar servicios reales."
        />
        <CardContent>
          <div className="settings-list">
            {settings.map(([label, value]) => (
              <div key={label} className="setting-row">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
