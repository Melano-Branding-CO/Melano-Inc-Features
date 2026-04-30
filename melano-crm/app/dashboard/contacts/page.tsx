import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

const contacts = [
  {
    name: "Camila Rojas",
    email: "camila@andesliving.example",
    phone: "+56 9 5555 0101",
    status: "buyer",
    budget: 580000,
  },
  {
    name: "Diego Luna",
    email: "diego@lunahomes.example",
    phone: "+52 55 5555 0198",
    status: "investor",
    budget: 1200000,
  },
  {
    name: "Marina Costa",
    email: "marina@costapro.example",
    phone: "+34 600 555 330",
    status: "seller",
    budget: 740000,
  },
];

export default function ContactsPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Gestion de contactos</p>
        <h1>Contactos</h1>
        <p>Segmenta compradores, vendedores e inversores con datos clave para seguimiento comercial.</p>
      </div>
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Contacto</th>
              <th>Estado</th>
              <th>Presupuesto</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.email}>
                <td>{contact.name}</td>
                <td>
                  <span>{contact.email}</span>
                  <small>{contact.phone}</small>
                </td>
                <td>{contact.status}</td>
                <td>{formatCurrency(contact.budget)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Card title="Siguiente accion" value="8 leads" description="Requieren llamada en las proximas 24 horas." />
    </section>
  );
}
