import type { Metadata } from "next";
import { ProductLanding } from "@/components/product-landing";
import { getProductBySlug, productLandingData } from "@/lib/site";

export const metadata: Metadata = {
  title: "Luxia | SaaS IA inmobiliaria",
  description:
    "Escala captación y cierre inmobiliario con Luxia, la plataforma IA para inmobiliarias de alto rendimiento.",
};

export default function LuxiaPage() {
  return (
    <ProductLanding
      product={getProductBySlug("luxia")}
      landingData={productLandingData.luxia}
    />
  );
}
