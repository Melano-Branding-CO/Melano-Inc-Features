import type { Metadata } from "next";
import { ProductLanding } from "@/components/product-landing";
import { getProductBySlug, productLandingData } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alenya | Lead generation bot",
  description:
    "Alenya convierte visitas en oportunidades calificadas y automatiza el seguimiento de leads.",
};

export default function AlenyaPage() {
  return (
    <ProductLanding
      product={getProductBySlug("alenya")}
      landingData={productLandingData.alenya}
    />
  );
}
