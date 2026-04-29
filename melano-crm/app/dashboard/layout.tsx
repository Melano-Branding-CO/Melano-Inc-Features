import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/dashboard/contacts", label: "Contactos" },
  { href: "/dashboard/properties", label: "Propiedades" },
  { href: "/dashboard/pipeline", label: "Pipeline" },
  { href: "/dashboard/activities", label: "Actividades" },
  { href: "/dashboard/automations", label: "Automatizaciones" },
  { href: "/dashboard/whatsapp", label: "WhatsApp" },
  { href: "/dashboard/settings", label: "Configuracion" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <Link className="brand" href="/dashboard">
          <span className="brand-mark">M</span>
          <span>Melano CRM</span>
        </Link>
        <nav aria-label="Navegacion principal">
          {navItems.map((item) => (
            <Link key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
}
