import { CONTACT_EMAILS, WHATSAPP_DISPLAY } from "@/lib/contact";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_INTRO, getWhatsAppPhoneDigits } from "@/lib/whatsapp";

import { PrefabBenefits } from "./prefab-benefits";
import { PrefabFaq } from "./prefab-faq";
import { PrefabFinalCta } from "./prefab-final-cta";
import { PrefabFloatWa } from "./prefab-float-wa";
import { PrefabHero } from "./prefab-hero";
import { PrefabLeadForm } from "./prefab-lead-form";
import { PrefabModels } from "./prefab-models";
import { PrefabNavbar } from "./prefab-navbar";
import { PrefabProcess } from "./prefab-process";
import { PrefabTestimonials } from "./prefab-testimonials";
import { PrefabUrgency } from "./prefab-urgency";

export function PrefabLanding() {
  const phone = getWhatsAppPhoneDigits();
  const waDefault = buildWhatsAppLink(phone, DEFAULT_WHATSAPP_INTRO);
  const waUrgent = buildWhatsAppLink(
    phone,
    `${DEFAULT_WHATSAPP_INTRO} Solicito cotización con precio vigente limitado.`,
  );
  const offerEndIso = process.env.NEXT_PUBLIC_OFFER_END_ISO ?? null;

  return (
    <div id="melano-prefab" className="min-h-screen bg-melano-bg font-sans text-white">
      <PrefabNavbar />
      <main>
        <PrefabHero whatsappHref={waDefault} />
        <PrefabBenefits />
        <PrefabModels whatsappDigits={phone} />
        <PrefabProcess />
        <PrefabTestimonials />
        <PrefabUrgency whatsappHref={waUrgent} offerEndIso={offerEndIso} />
        <PrefabLeadForm whatsappDigits={phone} />
        <PrefabFaq />
        <PrefabFinalCta whatsappHref={waDefault} />
      </main>

      <footer className="border-t border-melano-border bg-[#050506] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold tracking-[0.2em] text-white">MELANO INC</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-melano-muted">
              Prefabricación residencial premium para Argentina y LATAM. Obra seria, tiempos claros y asesoramiento
              cercano.
            </p>
          </div>
          <div className="text-sm text-melano-muted">
            <p className="font-semibold text-white">Contacto</p>
            <a className="mt-2 block text-melano-gold hover:text-white" href={waDefault} target="_blank" rel="noreferrer">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <ul className="mt-4 space-y-2">
              {CONTACT_EMAILS.map((email) => (
                <li key={email}>
                  <a className="hover:text-white" href={`mailto:${email}`}>
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl text-xs leading-relaxed text-white/35">
          © {new Date().getFullYear()} Melano Inc. Precios referenciales sujetos a proyecto. Las imágenes son
          ilustrativas.
        </p>
      </footer>

      <PrefabFloatWa href={waDefault} />
    </div>
  );
}
