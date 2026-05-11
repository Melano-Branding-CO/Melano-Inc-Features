import type { Metadata } from 'next';
import './globals.css';

const metadataBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: 'Melano CRM',
  description: 'CRM inmobiliario para ventas, propiedades y conversaciones.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
