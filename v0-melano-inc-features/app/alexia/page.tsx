import type { Metadata } from "next";
import { ProductLanding } from "@/components/product-landing";
import { getProductBySlug, productLandingData } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alexia | Sales automation bot",
  description:
    "Alexia automatiza ventas, seguimiento y cierres para equipos comerciales con estructura lista para pagos.",
};

export default function AlexiaPage() {
  return (
    <ProductLanding
      product={getProductBySlug("alexia")}
      landingData={productLandingData.alexia}
    />
  );
}
