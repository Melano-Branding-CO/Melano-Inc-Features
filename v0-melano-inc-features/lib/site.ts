export type ProductSlug = "melania" | "alenya" | "luxia" | "alexia";

export type ProductDefinition = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  ctaLabel: string;
  highlights: string[];
  audience: string;
  whatsappMessage: string;
};

export type ProductLandingData = {
  slug: ProductSlug;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  demoTitle: string;
  funnelTitle: string;
  funnelSteps: string[];
  ctaLabel: string;
  ctaMessage: string;
  finalCtaDescription: string;
};

export type UseCase = {
  metric: string;
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  bullets: string[];
  highlight?: boolean;
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://brunomelano.com";

export const WHATSAPP_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "5491139999999";

export const WHATSAPP_BASE_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Hola MELANO INC, quiero automatizar mi negocio con IA.";

export const createWhatsAppLink = (message = WHATSAPP_BASE_MESSAGE): string =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINK = createWhatsAppLink();

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Melania", href: "/melania" },
  { label: "Alenya", href: "/alenya" },
  { label: "Luxia", href: "/luxia" },
  { label: "Alexia", href: "/alexia" },
  { label: "Login", href: "/login" },
];

export const products: ProductDefinition[] = [
  {
    slug: "melania",
    name: "Melania",
    tagline: "AI assistant core",
    description:
      "Asistente central para operaciones, soporte y experiencia cliente con contexto real de tu empresa.",
    ctaLabel: "Implementar Melania",
    highlights: [
      "Respuestas 24/7 en WhatsApp y web",
      "Entrenamiento sobre procesos internos",
      "Escalamiento inteligente a humano",
    ],
    audience: "Equipos de soporte, operaciones y founders.",
    whatsappMessage: "Quiero implementar Melania en mi negocio.",
  },
  {
    slug: "alenya",
    name: "Alenya",
    tagline: "Lead generation bot",
    description:
      "Convierte visitas en oportunidades calificadas mediante conversacion guiada y seguimiento automatico.",
    ctaLabel: "Activar Alenya",
    highlights: [
      "Captacion web + WhatsApp",
      "Clasificacion de oportunidades",
      "Transferencia directa al equipo comercial",
    ],
    audience: "Agencias, consultoras y equipos de ventas B2B.",
    whatsappMessage: "Quiero activar Alenya para captar mas leads.",
  },
  {
    slug: "luxia",
    name: "Luxia",
    tagline: "Real estate AI assistant SaaS",
    description:
      "Plataforma conversacional para inmobiliarias que acelera respuesta, visitas y cierres.",
    ctaLabel: "Solicitar Luxia",
    highlights: [
      "Asistente IA para consultas de propiedades",
      "Filtro por presupuesto, zona y timing",
      "Seguimiento automatizado de interesados",
    ],
    audience: "Inmobiliarias, brokers y desarrolladores.",
    whatsappMessage: "Quiero solicitar Luxia para mi inmobiliaria.",
  },
  {
    slug: "alexia",
    name: "Alexia",
    tagline: "Sales automation bot",
    description:
      "Automatiza el seguimiento comercial para aumentar tasa de cierre y previsibilidad de ingresos.",
    ctaLabel: "Comprar Alexia",
    highlights: [
      "Secuencias automaticas por etapa",
      "Alertas y tareas para vendedores",
      "Estructura lista para cobrar por plan",
    ],
    audience: "Equipos de ventas y SaaS en crecimiento.",
    whatsappMessage: "Quiero comprar Alexia para automatizar ventas.",
  },
];

export const productLandingData: Record<ProductSlug, ProductLandingData> = {
  melania: {
    slug: "melania",
    eyebrow: "Melania / AI assistant core",
    title: "Tu asistente IA operativo para soporte y procesos",
    subtitle: "Responde, clasifica y ejecuta acciones sin friccion.",
    description:
      "Melania centraliza conversaciones de clientes y tareas internas para que tu equipo enfoque tiempo en decisiones de alto impacto.",
    demoTitle: "Demo Melania en accion",
    funnelTitle: "Implementacion de Melania",
    funnelSteps: [
      "Levantamos base de conocimiento y flujos de preguntas frecuentes.",
      "Conectamos canales y reglas de escalamiento a humano.",
      "Activamos tablero con metricas de respuesta y resolucion.",
    ],
    ctaLabel: "Implementar Melania",
    ctaMessage: "Quiero implementar Melania en mi empresa.",
    finalCtaDescription:
      "Integramos tu base de conocimiento y lanzamos un asistente con foco en experiencia y eficiencia.",
  },
  alenya: {
    slug: "alenya",
    eyebrow: "Alenya / Lead generation bot",
    title: "Converti trafico en reuniones calificadas",
    subtitle: "Captura automatica con foco en conversion comercial.",
    description:
      "Alenya detecta intencion, pide datos clave y deriva leads listos para ventas en tiempo real.",
    demoTitle: "Demo de embudo Alenya",
    funnelTitle: "Funnel Alenya",
    funnelSteps: [
      "Captura de visitas desde web y anuncios con mensajes contextuales.",
      "Calificacion automatica segun perfil, necesidad y presupuesto.",
      "Entrega del lead al vendedor correcto con resumen del caso.",
    ],
    ctaLabel: "Activar Alenya",
    ctaMessage: "Quiero activar Alenya para mi equipo comercial.",
    finalCtaDescription:
      "Activa Alenya en semanas y convierte tu trafico en pipeline comercial predecible.",
  },
  luxia: {
    slug: "luxia",
    eyebrow: "Luxia / Real estate AI assistant SaaS",
    title: "SaaS inmobiliario para acelerar cierres",
    subtitle: "Ideal para inmobiliarias que necesitan velocidad y precision.",
    description:
      "Luxia responde consultas de propiedades, califica interesados y acompana el proceso hasta la visita.",
    demoTitle: "Demo Luxia para inmobiliarias",
    funnelTitle: "Operacion con Luxia",
    funnelSteps: [
      "Recepcion de consultas en portales, web y WhatsApp.",
      "Precalificacion por zona, tipo de propiedad y presupuesto.",
      "Agenda de visitas y seguimiento automatico post-contacto.",
    ],
    ctaLabel: "Solicitar Luxia",
    ctaMessage: "Quiero solicitar Luxia para mi inmobiliaria.",
    finalCtaDescription:
      "Lleva tu inmobiliaria a un modelo de captacion y cierre sistematico con IA conversacional.",
  },
  alexia: {
    slug: "alexia",
    eyebrow: "Alexia / Sales automation bot",
    title: "Seguimiento comercial que no deja oportunidades caer",
    subtitle: "Automatizacion de ventas lista para escalar.",
    description:
      "Alexia ejecuta secuencias por etapa del pipeline y mantiene cada prospecto activo hasta el cierre.",
    demoTitle: "Demo Alexia para cierre de ventas",
    funnelTitle: "Playbook con Alexia",
    funnelSteps: [
      "Conectamos fuentes de leads y reglas del pipeline comercial.",
      "Activamos secuencias de seguimiento por WhatsApp y email.",
      "Medimos conversion por etapa para optimizar performance.",
    ],
    ctaLabel: "Comprar Alexia",
    ctaMessage: "Quiero comprar Alexia para automatizar mi embudo de ventas.",
    finalCtaDescription:
      "Activamos Alexia con playbooks de cierre y mensajes listos para cobrar.",
  },
};

export const homeUseCases: UseCase[] = [
  {
    metric: "+38%",
    title: "Leads calificados",
    description:
      "Alenya mejora la calificacion inicial con conversaciones guiadas y formularios inteligentes.",
  },
  {
    metric: "-72%",
    title: "Tiempo de respuesta",
    description:
      "Melania y Luxia responden consultas frecuentes en minutos, no horas.",
  },
  {
    metric: "+29%",
    title: "Cierres comerciales",
    description:
      "Alexia sostiene el seguimiento de oportunidades con mensajes contextuales.",
  },
];

export const pricingPreview: PricingPlan[] = [
  {
    name: "Starter",
    price: "USD 390/mo",
    description: "Para validar un solo bot en un canal.",
    bullets: ["1 agente IA", "Setup inicial", "Soporte por email"],
  },
  {
    name: "Growth",
    price: "USD 890/mo",
    description: "Para escalar adquisicion y ventas.",
    bullets: ["Hasta 3 agentes", "WhatsApp + web", "Tablero de conversion"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "Arquitectura multi-equipo y alta demanda.",
    bullets: [
      "Integraciones avanzadas",
      "SLA dedicado",
      "Roadmap personalizado",
    ],
  },
];

export const getProductBySlug = (slug: ProductSlug): ProductDefinition => {
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    throw new Error(`Product not found for slug: ${slug}`);
  }
  return product;
};
