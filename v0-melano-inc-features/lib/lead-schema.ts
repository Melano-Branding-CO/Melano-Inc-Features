export type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  message?: string;
  product?: string;
  whatsapp?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const sanitizeLeadPayload = (payload: LeadPayload): LeadPayload => ({
  name: payload.name.trim(),
  email: payload.email.trim().toLowerCase(),
  company: payload.company?.trim(),
  message: payload.message?.trim(),
  product: payload.product?.trim(),
  whatsapp: payload.whatsapp?.trim(),
});

export const validateLeadPayload = (payload: LeadPayload): string[] => {
  const errors: string[] = [];

  if (!payload.name || payload.name.length < 2) {
    errors.push("El nombre debe tener al menos 2 caracteres.");
  }

  if (!payload.email || !EMAIL_REGEX.test(payload.email)) {
    errors.push("El email no es valido.");
  }

  if (payload.message && payload.message.length > 1000) {
    errors.push("El mensaje supera el maximo permitido.");
  }

  return errors;
};

export const sanitizeLead = sanitizeLeadPayload;
export const validateLead = validateLeadPayload;
