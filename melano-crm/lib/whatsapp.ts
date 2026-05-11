import { DEFAULT_WHATSAPP_PHONE_DIGITS } from "./contact";

/**
 * Builds a WhatsApp click-to-chat URL. `phoneDigits` should include country code without + (e.g. 54911…).
 */
export function buildWhatsAppLink(phoneDigits: string, message: string): string {
  const digits = phoneDigits.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}

/** Public env: NEXT_PUBLIC_WHATSAPP_PHONE (digits only, e.g. 5492235506585) overrides default from contact. */
export function getWhatsAppPhoneDigits(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  if (raw && raw.replace(/\D/g, "").length >= 10) {
    return raw.replace(/\D/g, "");
  }
  return DEFAULT_WHATSAPP_PHONE_DIGITS;
}

export const DEFAULT_WHATSAPP_INTRO =
  "Hola, quiero información sobre casas prefabricadas";
