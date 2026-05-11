/**
 * Builds a WhatsApp click-to-chat URL. `phoneDigits` should include country code without + (e.g. 54911…).
 */
export function buildWhatsAppLink(phoneDigits: string, message: string): string {
  const digits = phoneDigits.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}

/** Public env: NEXT_PUBLIC_WHATSAPP_PHONE (digits only, e.g. 5491123456789). Replace in production. */
export function getWhatsAppPhoneDigits(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  if (raw && raw.replace(/\D/g, "").length >= 10) {
    return raw.replace(/\D/g, "");
  }
  return "5491112345678";
}

export const DEFAULT_WHATSAPP_INTRO =
  "Hola, quiero información sobre casas prefabricadas";
