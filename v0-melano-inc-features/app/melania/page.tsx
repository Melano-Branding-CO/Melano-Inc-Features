import type { Metadata } from "next";
import { ProductLanding } from "@/components/product-landing";
import { getProductBySlug, productLandingData } from "@/lib/site";

export const metadata: Metadata = {
  title: "Melania | Asistente IA para operaciones",
  description:
    "Implementa Melania para automatizar soporte, operaciones internas y experiencias omnicanal con IA.",
};

export default function MelaniaPage() {
  return (
    <ProductLanding
      product={getProductBySlug("melania")}
      landingData={productLandingData.melania}
    />
  );
}
