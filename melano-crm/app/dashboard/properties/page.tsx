import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

const properties = [
  { title: "Atico Ocean Drive", price: 820000, status: "Disponible", city: "Barcelona" },
  { title: "Casa Verde", price: 540000, status: "Reservada", city: "Valencia" },
  { title: "Loft Centro", price: 310000, status: "En visita", city: "Madrid" },
];

export default function PropertiesPage() {
  return (
    <section className="stack">
      <div className="section-heading">
        <p className="eyebrow">Catalogo</p>
        <h1>Propiedades</h1>
        <p>Gestiona inventario, precios, estados comerciales y ubicaciones.</p>
      </div>
      <div className="grid three">
        {properties.map((property) => (
          <Card key={property.title}>
            <p className="eyebrow">{property.status}</p>
            <h2>{property.title}</h2>
            <p>{property.city}</p>
            <strong>{formatCurrency(property.price)}</strong>
          </Card>
        ))}
      </div>
    </section>
  );
}
