import type { Metadata } from "next";

import { LeadForm } from "./lead-form";
import styles from "./prefabricadas.module.css";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_INTRO, getWhatsAppPhoneDigits } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Casas prefabricadas en Argentina | Cotizá por WhatsApp",
  description:
    "Tu casa propia en semanas: modelos base, familiar y premium. Financiación, entrega 30–90 días y asesoramiento sin costo. Argentina y LATAM.",
  openGraph: {
    title: "Tu casa propia en semanas, no años",
    description: "Casas prefabricadas modernas con cotización por WhatsApp y precios referenciales en pesos.",
    locale: "es_AR",
    type: "website",
  },
};

const MODELS = [
  {
    name: "Modelo Base",
    tag: "Económico",
    highlight: false,
    m2: "48 m² cubiertos",
    rooms: "2 dormitorios · 1 baño",
    price: "Desde $24.900.000",
    priceNote: "Referencia mayo 2026 · lista actualizable",
    consultMsg:
      "Hola, quiero consultar por el Modelo Base (económico) de casas prefabricadas.",
  },
  {
    name: "Modelo Familiar",
    tag: "Más elegido",
    highlight: true,
    m2: "82 m² cubiertos",
    rooms: "3 dormitorios · 2 baños",
    price: "Desde $41.500.000",
    priceNote: "Ideal familia / alquiler temporario",
    consultMsg:
      "Hola, quiero consultar por el Modelo Familiar de casas prefabricadas.",
  },
  {
    name: "Modelo Premium",
    tag: "Alto estándar",
    highlight: false,
    m2: "118 m² cubiertos",
    rooms: "4 dormitorios · 3 baños",
    price: "Desde $68.900.000",
    priceNote: "Terminaciones superiores y mayor superficie",
    consultMsg:
      "Hola, quiero consultar por el Modelo Premium de casas prefabricadas.",
  },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "En 60 días ya estaba viviendo en mi casa en zona norte. El proceso fue simple y siempre atendidos por WhatsApp.",
    name: "Mariana G.",
    role: "Buenos Aires",
  },
  {
    quote:
      "Necesitábamos algo rápido para alquilar. La casa familiar se pagó sola en menos de lo que pensábamos.",
    name: "Lucas & Sofía",
    role: "Córdoba · inversión",
  },
  {
    quote:
      "Me asesoraron sin costo y cerramos precios por etapas. En este contexto, eso me dio tranquilidad.",
    name: "Diego R.",
    role: "Santa Fe",
  },
];

export default function CasasPrefabricadasPage() {
  const phone = getWhatsAppPhoneDigits();
  const waDefault = buildWhatsAppLink(phone, DEFAULT_WHATSAPP_INTRO);
  const waUrgent = buildWhatsAppLink(
    phone,
    `${DEFAULT_WHATSAPP_INTRO} Quiero asegurar cupo y precio vigente (72 hs).`,
  );

  return (
    <div className={styles.root}>
      <header className={styles.wrap}>
        <div className={styles.topBar}>
          <div className={styles.brand}>
            <span className={styles.brandMark} aria-hidden />
            <span>Melano Hogar</span>
          </div>
          <div className={styles.trustChips} aria-label="Señales de confianza">
            <span className={styles.chip}>+100 casas entregadas</span>
            <span className={styles.chip}>Asesoramiento sin costo</span>
            <span className={`${styles.chip} ${styles.chipWarn}`}>Solo 5 unidades este mes</span>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div>
              <p className={styles.eyebrow}>Argentina · casas industrializadas</p>
              <h1 id="hero-title">Tu casa propia en semanas, no años</h1>
              <p className={styles.subhead}>
                Casas prefabricadas modernas, accesibles y listas para habitar. Cotización clara en pesos,
                opciones de financiación y protección frente a la inflación con esquema por etapas acordado por
                escrito.
              </p>
              <div className={styles.ctaRow}>
                <a className={styles.primaryBtn} href={waUrgent} target="_blank" rel="noopener noreferrer">
                  Cotizar ahora por WhatsApp
                </a>
                <a className={styles.secondaryBtn} href="#modelos">
                  Ver modelos y precios
                </a>
              </div>
              <div className={styles.microTrust}>
                <span>
                  <strong>Cupos limitados por mes</strong> · prioridad por orden de consulta
                </span>
                <span>
                  <strong>Precio actual válido por 72 hs</strong> en cotizaciones confirmadas
                </span>
              </div>
              <div className={styles.alertStrip} role="note">
                <strong>Inflación y obra:</strong> acordamos hitos y actualización transparente (IPC / índice de
                construcción) para que sepas qué pagás y cuándo. Financiación en pesos y opciones UVA según tu
                perfil bancario.
              </div>
            </div>
            <aside className={styles.panel} aria-label="Por qué prefabricado">
              <p className={styles.panelTitle}>Por qué elegirnos hoy</p>
              <ul className={styles.panelList}>
                <li>
                  <strong>Menos incertidumbre:</strong> plazos de fábrica y montaje acotados (30–90 días según
                  modelo y obra).
                </li>
                <li>
                  <strong>Menos costo que obra tradicional:</strong> hasta 40% de ahorro en proyectos comparables
                  (según diseño y terreno).
                </li>
                <li>
                  <strong>Personalización real:</strong> distribución, aberturas y terminaciones dentro de
                  catálogo.
                </li>
                <li>
                  <strong>Riesgo acotado:</strong> visitá planta o showroom digital y definí entregables por
                  etapa.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="valor-title">
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2 id="valor-title">Tu inversión trabaja a tu favor</h2>
              <p>
                Viví antes. Alquilá más rápido. O asegurá un activo en pesos con una curva de pagos alineada a tu
                capacidad. Todo explicado antes de firmar.
              </p>
            </div>
            <div className={styles.bullets}>
              <div className={styles.bullet}>
                <div className={styles.bulletIcon} aria-hidden>
                  ⚡
                </div>
                <div>
                  <h3>Entrega rápida</h3>
                  <p>30 a 90 días según modelo, permisos y logística en tu provincia.</p>
                </div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.bulletIcon} aria-hidden>
                  ↓
                </div>
                <div>
                  <h3>Costos hasta 40% más bajos</h3>
                  <p>Producción serializada y menos desperdicio vs. obra húmeda clásica.</p>
                </div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.bulletIcon} aria-hidden>
                  ◎
                </div>
                <div>
                  <h3>Diseño moderno y personalizable</h3>
                  <p>Layouts eficientes para familia o renta: elegí acabados y ampliaciones.</p>
                </div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.bulletIcon} aria-hidden>
                  $
                </div>
                <div>
                  <h3>Financiación disponible</h3>
                  <p>Cuotas en pesos, acuerdos por etapa y derivación a crédito UVA cuando corresponda.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="modelos" aria-labelledby="modelos-title">
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2 id="modelos-title">Elegí tu modelo</h2>
              <p>
                Precios referenciales en pesos argentinos para cotización inicial. La cotización final incluye
                envío estimado a tu zona, instalación y extras seleccionados.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {MODELS.map((m) => (
                <article key={m.name} className={styles.modelCard}>
                  <div className={styles.badgeRow}>
                    <span className={m.highlight ? `${styles.tag} ${styles.tagHighlight}` : styles.tag}>
                      {m.tag}
                    </span>
                  </div>
                  <h3>{m.name}</h3>
                  <ul className={styles.meta}>
                    <li>{m.m2}</li>
                    <li>{m.rooms}</li>
                  </ul>
                  <p className={styles.price}>
                    {m.price}
                    <small>{m.priceNote}</small>
                  </p>
                  <a
                    className={styles.secondaryBtn}
                    href={buildWhatsAppLink(phone, m.consultMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="testimonios-title">
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2 id="testimonios-title">Historias reales de argentinos</h2>
              <p>Resultados típicos; cada obra depende de terreno, municipio y personalización.</p>
            </div>
            <div className={styles.quoteGrid}>
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className={styles.quote}>
                  <p>“{t.quote}”</p>
                  <footer>
                    <strong>{t.name}</strong>
                    {t.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="proceso-title">
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2 id="proceso-title">Cómo funciona</h2>
              <p>Cuatro pasos, un solo canal de contacto. Sin vueltas.</p>
            </div>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>PASO 1</span>
                <h3>Consulta</h3>
                <p>Escribinos por WhatsApp. Pedimos datos básicos del terreno y necesidades.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>PASO 2</span>
                <h3>Diseño</h3>
                <p>Ajustamos planimetría, presupuesto en pesos y forma de pago con inflación acotada.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>PASO 3</span>
                <h3>Fabricación</h3>
                <p>Producimos en planta con control de calidad y visitas coordinadas.</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>PASO 4</span>
                <h3>Entrega</h3>
                <p>Instalación en tu lote, entrega de llaves y soporte post-entrega.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="cta-title">
          <div className={styles.wrap}>
            <div className={styles.ctaBand}>
              <h2 id="cta-title">Recibí tu cotización personalizada hoy</h2>
              <p>
                Validamos cupos semanales. Si entrás ahora, registramos tu precio referencial y te enviamos plan de
                pagos en pesos con protección acordada por escrito.
              </p>
              <a className={styles.primaryBtn} href={waDefault} target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.leadSection}`} aria-labelledby="form-title">
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2 id="form-title">Dejanos tus datos (opcional)</h2>
              <p>
                Completá el formulario y abrimos WhatsApp con tu mensaje listo. Respondemos en horario comercial
                extendido.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>

        <section className={styles.section} aria-labelledby="faq-title">
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2 id="faq-title">Preguntas frecuentes</h2>
              <p>Transparencia primero. Si no está acá, preguntalo por WhatsApp.</p>
            </div>
            <div className={styles.faq}>
              <details className={styles.details}>
                <summary>¿Cuánto tarda?</summary>
                <p>
                  Entre 30 y 90 días según modelo, stock de materiales y coordinación municipal. Te damos un cronograma
                  escrito con hitos.
                </p>
              </details>
              <details className={styles.details}>
                <summary>¿Se puede financiar?</summary>
                <p>
                  Sí: planes propios en pesos por etapa y, cuando califica, derivación a créditos hipotecarios UVA u
                  otros productos bancarios en Argentina.
                </p>
              </details>
              <details className={styles.details}>
                <summary>¿Incluye instalación?</summary>
                <p>
                  La cotización completa puede incluir montaje en tu terreno, conexiones básicas y puesta en marcha.
                  Detallamos qué está incluido y qué es opcional antes de avanzar.
                </p>
              </details>
              <details className={styles.details}>
                <summary>¿Cómo protegen el precio con la inflación?</summary>
                <p>
                  Acordamos actualización por índices de referencia y pagos por etapa de obra. Nada queda en “gris”: va
                  en propuesta firmada.
                </p>
              </details>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.wrap}>
            <p>
              <strong>Melano Hogar</strong> — casas prefabricadas para Argentina y LATAM. Precios y plazos no
              constituyen oferta vinculante hasta evaluación técnica y legal del proyecto.
            </p>
            <p className={styles.footerNote}>
              WhatsApp comercial: configurá tu número con la variable de entorno{" "}
              <code>NEXT_PUBLIC_WHATSAPP_PHONE</code> (solo dígitos, código país incluido).
            </p>
          </div>
        </footer>
      </main>

      <div className={styles.stickyWa}>
        <div className={styles.stickyInner}>
          <a
            className={styles.stickyBtn}
            href={waDefault}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp para cotizar casas prefabricadas"
          >
            WhatsApp · Cotizar
          </a>
        </div>
      </div>
    </div>
  );
}
