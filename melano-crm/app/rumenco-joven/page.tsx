import type { Metadata } from "next";

import { CONTACT_EMAILS, WHATSAPP_DISPLAY } from "@/lib/contact";
import { RUMENCO_MAP_EMBED_SRC, RUMENCO_MAP_LINK, RUMENCO_WHATSAPP_INTRO } from "@/lib/rumenco-landing";
import { buildWhatsAppLink, getWhatsAppPhoneDigits } from "@/lib/whatsapp";

import { LeadForm } from "./lead-form";
import styles from "./rumenco.module.css";

export const metadata: Metadata = {
  title: "Oportunidad en Rumencó Joven · Mar del Plata | Inversión y lifestyle",
  description:
    "Lote esquina 441 m² zona turística Rumencó Joven. Valorización, financiación 50% + saldo, cercanía a servicios. USD 100.000 · Calle 26 esquina 427 bis.",
  openGraph: {
    title: "Invertí en el crecimiento de Mar del Plata · Rumencó Joven",
    description:
      "Esquina estratégica, entorno premium y financiación accesible. Solicitá ubicación, visita o propuesta.",
    locale: "es_AR",
    type: "website",
  },
};

const WHY = [
  {
    title: "Zona turística consolidada",
    body: "Ubicación con demanda estacional y perfil residencial premium — contexto para proyecto propio o renta.",
    icon: "◎",
  },
  {
    title: "Alta proyección urbana",
    body: "Mar del Plata sigue expandiendo su oferta; entrar antes del desarrollo masivo redefine el upside.",
    icon: "↗",
  },
  {
    title: "Esquina + ochava",
    body: "Metraje de frente y visibilidad para circulación, luminosidad y opciones de construcción o frente comercial.",
    icon: "⌖",
  },
  {
    title: "Financiación disponible",
    body: "50% anticipo y saldo financiado — encaja con familias e inversores que buscan estructura clara en USD.",
    icon: "≈",
  },
  {
    title: "Servicios a minutos",
    body: "Plaza principal, bancos, puerto, gastronomía, comercios y transporte — entorno listo, no promesa lejana.",
    icon: "✦",
  },
] as const;

const IDEAL = [
  "Vivienda premium",
  "Complejo turístico",
  "Duplex / unidades",
  "Inversión patrimonial",
  "Local / frente comercial",
  "Construcción moderna",
] as const;

const PERSONAS = [
  {
    title: "Inversor inmobiliario",
    meta: "35–60 años · USD 50k–150k disponibles",
    pains: ["Inflación y pérdida de poder", "Dólar quieto sin activo tangible", "Negocios difíciles de tocar"],
    trigger: "Entrar temprano en una zona en expansión.",
  },
  {
    title: "Familia clase media-alta",
    meta: "Busca hogar y proyecto a medida",
    pains: ["Incertidumbre sobre barrios nuevos", "Necesidad de financiación parcial", "Priorizar seguridad y entorno"],
    trigger: "Terreno listo para construir en zona consolidada.",
  },
  {
    title: "Constructor / desarrollador",
    meta: "Evalúa metros, ochava y mix de uso",
    pains: ["Falta de frente comercial en competencia", "Terrenos sin visibilidad", "Zonas ya sobrevaloradas"],
    trigger: "Ochava + circulación + turismo como motor.",
  },
] as const;

export default function RumencoJovenPage() {
  const phone = getWhatsAppPhoneDigits();
  const waDirect = buildWhatsAppLink(phone, RUMENCO_WHATSAPP_INTRO);

  return (
    <div className={styles.root}>
      <header className={styles.wrap}>
        <div className={styles.topBar}>
          <div className={styles.brand}>
            <span className={styles.brandMark} aria-hidden />
            <span>Urbanización Rumencó Joven · MDP</span>
          </div>
          <div className={styles.trustChips} aria-label="Señales de contexto">
            <span className={styles.chip}>Mar del Plata · zona turística</span>
            <span className={`${styles.chip} ${styles.chipAccent}`}>441 m² · esquina</span>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div>
              <p className={styles.eyebrow}>Oportunidad · urbanización Rumencó Joven</p>
              <h1 id="hero-title">Invertí en una de las zonas con mayor crecimiento de Mar del Plata.</h1>
              <p className={styles.subhead}>
                Lote de <strong>441 m²</strong> en esquina estratégica dentro del entorno turístico y residencial
                premium. No es solo tierra: es posición, estilo de vida y un esquema de pago que permite entrar con
                capital disponible típico de inversores y familias serias.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <strong>Ubicación</strong>
                  Calle 26 esquina 427 bis
                </div>
                <div className={styles.stat}>
                  <strong>Frente</strong>
                  13,50 m + ochava
                </div>
                <div className={styles.stat}>
                  <strong>Inversión</strong>
                  USD 100.000
                </div>
              </div>
              <div className={styles.ctaRow}>
                <a className={styles.primaryBtn} href={waDirect} target="_blank" rel="noopener noreferrer">
                  WhatsApp · información prioritaria
                </a>
                <a className={styles.secondaryBtn} href="?interes=ubicacion#contacto">
                  Solicitar ubicación exacta
                </a>
              </div>
              <div className={styles.ctaRow}>
                <a className={styles.ghostBtn} href="?interes=visita#contacto">
                  Agendar visita
                </a>
                <a className={styles.ghostBtn} href="?interes=financiacion#contacto">
                  Recibir propuesta financiera
                </a>
              </div>
              <div className={styles.microTrust}>
                <p>
                  <strong>Propuesta comercial:</strong> valorización + lifestyle costero + acceso a financiación — tres
                  palancas que convierten consultas en visitas concretas.
                </p>
              </div>
            </div>
            <aside className={styles.panel} aria-label="Resumen del activo">
              <p className={styles.panelTitle}>Activo en zona turística</p>
              <ul className={styles.panelList}>
                <li>
                  <strong>Barrio moderno</strong> — urbanización nueva Rumencó Joven, perfil residencial alto.
                </li>
                <li>
                  <strong>Uso flexible</strong> — vivienda premium, desarrollo turístico, duplex o renta futura.
                </li>
                <li>
                  <strong>Cercanía</strong> — plaza principal, banco, puerto, gastronomía, retail y transporte.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.visualSection} aria-labelledby="visual-title">
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Demo visual · reemplazá con tus assets</p>
              <h2 id="visual-title">Bloques listos para drone, render y lifestyle</h2>
              <p>
                Campañas Meta rinden mejor con video cinematic, mockup de casa moderna sobre el lote y mapa interactivo.
                Acá dejamos marcos premium para cargar fotografía aérea, render arquitectónico y una escena de barrio.
              </p>
            </div>
            <div className={styles.visualGrid}>
              <div className={styles.visualCard}>
                <div className={styles.visualInner}>
                  <span>Asset sugerido</span>
                  <p>Vista aérea / drone del entorno</p>
                </div>
              </div>
              <div className={styles.visualCard} style={{ background: "linear-gradient(145deg,#fefce8,#fef9c3)" }}>
                <div className={styles.visualInner}>
                  <span>Asset sugerido</span>
                  <p>Render vivienda moderna sobre lote</p>
                </div>
              </div>
              <div className={styles.visualCard} style={{ background: "linear-gradient(145deg,#fdf4ff,#fae8ff)" }}>
                <div className={styles.visualInner}>
                  <span>Asset sugerido</span>
                  <p>Lifestyle premium · barrio nuevo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="por-que">
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2>Por qué esta oportunidad</h2>
              <p>
                El mensaje no es “comprá un lote”: es tomar posición en una geografía con demanda turística y expansión
                urbana, con esquina visible y camino claro de uso.
              </p>
            </div>
            <div className={styles.bullets}>
              {WHY.map((item) => (
                <article key={item.title} className={styles.bullet}>
                  <div className={styles.bulletIcon} aria-hidden>
                    {item.icon}
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2>Ideal para</h2>
              <p>
                Hablá con tus tres buyer personas sin contradecirte: el mismo activo sirve para patrimonio, hogar o
                proyecto mediano en altura.
              </p>
            </div>
            <div className={styles.checkGrid}>
              {IDEAL.map((label) => (
                <div key={label} className={styles.checkItem}>
                  <span className={styles.checkMark} aria-hidden>
                    ✓
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2>Perfiles que ya están mirando esta zona</h2>
              <p>Lenguaje distinto, mismo activo: tu equipo cierra en WhatsApp con contexto claro.</p>
            </div>
            <div className={styles.personaGrid}>
              {PERSONAS.map((p) => (
                <article key={p.title} className={styles.personaCard}>
                  <h3>{p.title}</h3>
                  <p className={styles.personaMeta}>{p.meta}</p>
                  <ul className={styles.personaPain}>
                    {p.pains.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <p className={styles.trigger}>Trigger: {p.trigger}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="financiacion">
          <div className={styles.wrap}>
            <div className={styles.financePanel}>
              <div className={styles.financeGrid}>
                <div>
                  <p className={styles.financeEyebrow}>Estructura en USD</p>
                  <p className={styles.priceTag}>
                    USD 100.000
                    <small>50% anticipo · saldo financiado</small>
                  </p>
                </div>
                <div>
                  <ul className={styles.financeList}>
                    <li>Encaja con ticket típico de inversores con USD 50k–150k de capital disponible.</li>
                    <li>Familias que necesitan financiar parte del saldo sin renunciar a zona premium.</li>
                    <li>Constructores que pueden optimizar cash-flow con hitos de obra.</li>
                  </ul>
                </div>
              </div>
              <p className={styles.urgency}>
                Las esquinas en zonas de expansión son las primeras en valorizarse: cuando el desarrollo masivo llega,
                ya no estás comprando posición — estás pagando prima.
              </p>
            </div>

            <div className={styles.quoteBand}>
              <p className={styles.quoteCard}>“Hoy comprás tierra. Mañana comprás posición.”</p>
              <p className={styles.quoteCard}>
                “Las mejores inversiones inmobiliarias empiezan antes del desarrollo masivo.”
              </p>
              <p className={styles.quoteCard}>
                “Mar del Plata sigue creciendo. La pregunta es si vas a entrar temprano o tarde.”
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2>Ubicación · Calle 26 esquina 427 bis</h2>
              <p>
                Referencia para visitas y validación en mapa. Podés reemplazar el embed por mapa interactivo propio o
                tour 360 cuando esté disponible.
              </p>
            </div>
            <div className={styles.mapBlock}>
              <iframe
                className={styles.mapFrame}
                title="Mapa · Calle 26 esquina 427 bis, Mar del Plata"
                src={RUMENCO_MAP_EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className={styles.mapAside}>
                <h3>Cercanías destacadas</h3>
                <p>Plaza principal, banco, puerto, centros comerciales y gastronómicos, transporte y servicios.</p>
                <a className={styles.secondaryBtn} href={RUMENCO_MAP_LINK} target="_blank" rel="noopener noreferrer">
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2>Demo · narrativa de valorización</h2>
              <p>Carrusel tipo “antes / después” para remarketing y campañas de conversión.</p>
            </div>
            <div className={styles.carousel} tabIndex={0} aria-label="Ejemplos ilustrativos de valorización">
              <article className={styles.carouselCard}>
                <h3>Zona en expansión</h3>
                <p>
                  Entrada temprana cuando la infraestructura y la demanda turística empujan precios — tu comparativo con
                  fotografías históricas del barrio.
                </p>
              </article>
              <article className={styles.carouselCard}>
                <h3>Después del desarrollo</h3>
                <p>
                  Cuando aparecen nuevas viviendas y locales, las esquinas ya cotizan distinto — ilustración para
                  conversaciones de ROI con inversores.
                </p>
              </article>
              <article className={styles.carouselCard}>
                <h3>Simulación ROI</h3>
                <p>
                  Combiná este storytelling con tu modelo de reventa o renta corta; acá solo planteamos el marco
                  emocional y racional.
                </p>
              </article>
            </div>
            <div className={styles.roiCard}>
              <h3>Ejemplo ilustrativo (no promesa de rentabilidad)</h3>
              <p>
                Si mañana comparás precios en la misma manzana cuando el barrio esté consolidado, la métrica relevante
                suele ser cuánto pagás hoy por metro en esquina vs. cuánto se pagará cuando el stock nuevo esté
                absorbido. Usalo como ancla de conversación con datos locales reales en seguimiento por WhatsApp.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2>Embudo recomendado</h2>
              <p>Alineado a Meta Ads + remarketing + conversación humana.</p>
            </div>
            <p className={styles.funnelNote}>
              Anuncio → Landing → WhatsApp → seguimiento automatizado → visita presencial → reserva / seña. Esta página
              alimenta el mismo stack si ya tenés captura con Supabase y mensajería en WhatsApp Business API o
              automatizaciones.
            </p>
            <div className={styles.metaCampaign}>
              <strong>Performance · ideas de segmentación:</strong> intereses inversión inmobiliaria, arquitectura,
              countries, construcción, real estate; geos Mar del Plata + Buenos Aires; edades 30–60; creatividades con
              copy emocional de la franja superior.
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.leadSection}`} id="contacto">
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <h2>Solicitá información prioritaria</h2>
              <p>
                Completá el formulario: registramos el lead en Supabase cuando está configurado el proyecto y abrimos
                WhatsApp con el mensaje recomendado para tu equipo.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>

        <footer className={`${styles.footer} ${styles.wrap}`}>
          <p>
            <strong>Melano · oportunidad Rumencó Joven</strong> — información comercial orientativa. Validación
            jurídica, medidas y disponibilidad definitiva se confirman en visita y documentación oficial.
          </p>
          <p className={styles.metaCampaign}>
            WhatsApp comercial: <strong>{WHATSAPP_DISPLAY}</strong> · Variable de entorno{" "}
            <code>NEXT_PUBLIC_WHATSAPP_PHONE</code> para otros entornos.
          </p>
          <p className={styles.metaCampaign}>
            Contacto email:{" "}
            {CONTACT_EMAILS.map((e, i) => (
              <span key={e}>
                <a href={`mailto:${e}`} className={styles.footerLink}>
                  {e}
                </a>
                {i < CONTACT_EMAILS.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </footer>
      </main>

      <div className={styles.stickyWa}>
        <div className={styles.stickyInner}>
          <a className={styles.stickyBtn} href={waDirect} target="_blank" rel="noopener noreferrer">
            WhatsApp · Lote Rumencó Joven
          </a>
        </div>
      </div>
    </div>
  );
}
