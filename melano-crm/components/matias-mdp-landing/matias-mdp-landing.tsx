import Link from "next/link";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  MATIAS_WA_DIGITS,
  MATIAS_WA_MSG_CTA_FINAL,
  MATIAS_WA_MSG_FINANCIACION,
  MATIAS_WA_MSG_INFO,
  MATIAS_WA_MSG_PREMIUM,
  MATIAS_WA_MSG_UBICACION,
  MATIAS_WA_MSG_VISITA,
} from "@/lib/matias-mdp";

import { MatiasLeadForm } from "./matias-lead-form";
import styles from "./matias-mdp.module.css";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Calle+26+y+427+bis+Mar+del+Plata+Argentina";

export function MatiasMdpLanding() {
  const wa = (msg: string) => buildWhatsAppLink(MATIAS_WA_DIGITS, msg);

  return (
    <div className={styles.root}>
      <header className={styles.nav}>
        <div className={`${styles.wrap} ${styles.navInner}`}>
          <Link href="#hero" className={styles.brand}>
            🏡 MATÍAS <span>PROPIEDADES</span>
          </Link>
          <nav className={styles.navLinks} aria-label="Secciones">
            <a href="#ubicacion">Ubicación</a>
            <a href="#detalles">Terreno</a>
            <a href="#financiacion">Financiación</a>
            <a href="#lead">Contacto</a>
          </nav>
          <a className={styles.btnPrimary} href={wa(MATIAS_WA_MSG_INFO)} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      <section id="hero" className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <p className={styles.eyebrow}>🌊 Mar del Plata · 🏡 Lote 441 m²</p>
          <h1>💰 Invertí en 🌊 Mar del Plata antes de la próxima 📈 ola de valorización.</h1>
          <p className={styles.lead}>
            🏡 Lote premium de 441 m² en 📍 esquina estratégica dentro de una de las zonas con mayor 📈 crecimiento
            residencial y 🏖️ turístico de la costa argentina.
          </p>
          <ul className={styles.bullets}>
            <li>✓ 📐 441 m²</li>
            <li>✓ 📍 Esquina estratégica</li>
            <li>✓ 🏖️ Zona turística</li>
            <li>✓ 💳 Financiación disponible</li>
            <li>✓ 📈 Excelente proyección</li>
          </ul>
          <div className={styles.ctaRow}>
            <a className={styles.btnPrimary} href={wa(MATIAS_WA_MSG_INFO)} target="_blank" rel="noopener noreferrer">
              📲 SOLICITAR INFORMACIÓN
            </a>
            <a className={styles.btnGhost} href={wa(MATIAS_WA_MSG_VISITA)} target="_blank" rel="noopener noreferrer">
              🗓️ COORDINAR VISITA
            </a>
          </div>
          <p className={styles.trustLine}>
            <strong>🤝 Atención personalizada</strong> para compradores de 🏙️ Buenos Aires.
          </p>
        </div>
      </section>

      <section id="ubicacion" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>📍 Ubicación estratégica en 🌊 Mar del Plata.</h2>
          <div className={styles.address}>📍 Calle 26 esquina 427 bis — 🌊 Mar del Plata</div>
          <p className={styles.sectionLead} style={{ marginTop: "1.25rem" }}>
            Cercanías:
          </p>
          <ul className={styles.listCheck}>
            <li>✓ 🌳 Plaza principal</li>
            <li>✓ 🏦 Banco</li>
            <li>✓ ⚓ Puerto</li>
            <li>✓ 🛍️ Centros comerciales</li>
            <li>✓ 🍽️ Gastronomía</li>
            <li>✓ 🚌 Transporte y servicios</li>
          </ul>
          <p className={styles.sectionLead} style={{ marginTop: "1rem" }}>
            📍 Una ubicación ideal tanto para 🏠 vivienda como para 💰 inversión o 🏖️ desarrollo turístico.
          </p>
          <div className={styles.ctaRow} style={{ marginTop: "1.5rem" }}>
            <a className={styles.btnPrimary} href={wa(MATIAS_WA_MSG_UBICACION)} target="_blank" rel="noopener noreferrer">
              📩 RECIBIR UBICACIÓN EXACTA
            </a>
            <a className={styles.btnGhost} href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              🗺️ Ver en mapa
            </a>
          </div>
        </div>
      </section>

      <section id="detalles" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>📐 Información técnica.</h2>
          <div className={styles.grid2} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3>📏 Superficie</h3>
              <p>441 m²</p>
            </div>
            <div className={styles.card}>
              <h3>📐 Frente</h3>
              <p>13,50 metros + ochava</p>
            </div>
            <div className={styles.card}>
              <h3>🏡 Tipo</h3>
              <p>Lote esquina</p>
            </div>
            <div className={styles.card}>
              <h3>🛠️ Estado</h3>
              <p>Listo para desarrollar</p>
            </div>
            <div className={styles.card} style={{ gridColumn: "1 / -1" }}>
              <h3>🌊 Zona</h3>
              <p>Residencial y turística</p>
            </div>
          </div>
          <p className={styles.sectionLead} style={{ marginTop: "1.5rem" }}>
            📈 Las esquinas estratégicas suelen ser las primeras en valorizarse dentro de zonas en expansión.
          </p>
        </div>
      </section>

      <section id="ideal" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>🏡 Un lote con múltiples posibilidades.</h2>
          <div className={styles.grid3} style={{ marginTop: "1.75rem" }}>
            <div className={styles.card}>
              <h3>🏠 Vivienda premium</h3>
              <p>✨ Construcción moderna en entorno residencial.</p>
            </div>
            <div className={styles.card}>
              <h3>🏘️ Desarrollo de dúplex</h3>
              <p>📈 Excelente potencial constructivo.</p>
            </div>
            <div className={styles.card}>
              <h3>💰 Inversión patrimonial</h3>
              <p>🛡️ Resguardo de capital en tierra.</p>
            </div>
            <div className={styles.card}>
              <h3>🏖️ Proyecto turístico</h3>
              <p>📈 Alta proyección por ubicación.</p>
            </div>
            <div className={styles.card} style={{ gridColumn: "1 / -1" }}>
              <h3>🔄 Reventa futura</h3>
              <p>📊 Potencial de valorización.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="financiacion" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>💵 Invertí sin inmovilizar todo tu capital.</h2>
          <div className={styles.priceBox}>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--muted)", fontWeight: 600 }}>Referencia</p>
            <p className={styles.price}>💵 USD 100.000</p>
          </div>
          <ul className={styles.listCheck} style={{ marginTop: "1.25rem" }}>
            <li>✓ 50% anticipo</li>
            <li>✓ 💳 Saldo financiado</li>
            <li>✓ 🤝 Posibilidad de propuesta personalizada</li>
          </ul>
          <p className={styles.sectionLead} style={{ marginTop: "1.25rem" }}>
            ⏳ Zonas en expansión con crecimiento sostenido suelen consolidar valor en el tiempo.
          </p>
          <div className={styles.ctaRow} style={{ marginTop: "1.5rem" }}>
            <a
              className={styles.btnPrimary}
              href={wa(MATIAS_WA_MSG_FINANCIACION)}
              target="_blank"
              rel="noopener noreferrer"
            >
              📲 CONSULTAR FINANCIACIÓN
            </a>
          </div>
        </div>
      </section>

      <section id="inversores" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>🏙️ Pensado para compradores de Buenos Aires.</h2>
          <p className={styles.sectionLead}>
            Muchos compradores están buscando 🏡 activos inmobiliarios fuera de CABA para diversificar 💵 capital y
            acceder a zonas con mayor 📈 potencial de crecimiento.
          </p>
          <p className={styles.sectionLead} style={{ marginTop: "1rem" }}>
            Este lote ofrece:
          </p>
          <ul className={styles.listCheck}>
            <li>✓ 📉 menor saturación</li>
            <li>✓ 📈 mejor relación valor/proyección</li>
            <li>✓ 🏗️ crecimiento urbano</li>
            <li>✓ 🏖️ entorno turístico</li>
            <li>✓ 🚀 timing conveniente para ingresar al mercado</li>
          </ul>
          <p className={styles.sectionLead} style={{ marginTop: "1.25rem" }}>
            🚗 Posibilidad de coordinar visitas privadas para compradores de 🏙️ Buenos Aires.
          </p>
        </div>
      </section>

      <section id="cta" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.wrap}>
          <div className={styles.ctaBand}>
            <h2>🌎 Hoy comprás tierra. 🚀 Mañana comprás posición.</h2>
            <p>
              📲 Recibí información completa, 📍 ubicación exacta y 💼 propuesta comercial personalizada directamente
              por WhatsApp.
            </p>
            <a className={styles.btnPrimary} href={wa(MATIAS_WA_MSG_CTA_FINAL)} target="_blank" rel="noopener noreferrer">
              💬 HABLAR CON UN ASESOR
            </a>
          </div>
        </div>
      </section>

      <section id="lead" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>🧾 Dejanos tus datos</h2>
          <p className={styles.sectionLead}>
            Completá el formulario y abrimos WhatsApp. Opcional: integración con Supabase (<code>leads_luxia</code>) y
            webhook <code>MATIAS_LEAD_WEBHOOK_URL</code>.
          </p>
          <div style={{ marginTop: "2rem", maxWidth: "36rem" }}>
            <MatiasLeadForm />
          </div>
        </div>
      </section>

      <section id="testimonios" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>⭐ Testimonios</h2>
          <div className={styles.quoteGrid} style={{ marginTop: "1.75rem" }}>
            <blockquote className={styles.quote}>
              “📍 Excelente ubicación y 👔 atención personalizada.”
              <footer>— Cliente verificado</footer>
            </blockquote>
            <blockquote className={styles.quote}>
              “💰 Excelente inversión en 🌊 Mar del Plata.”
              <footer>— Inversor</footer>
            </blockquote>
            <blockquote className={styles.quote}>
              “✅ Proceso claro y 💳 financiación flexible.”
              <footer>— Comprador</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <footer id="footer" className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerGrid}>
            <div>
              <p style={{ margin: 0, fontWeight: 800, fontSize: "1.1rem" }}>🏡 MATÍAS PROPIEDADES</p>
              <p className={styles.sectionLead} style={{ marginTop: "0.75rem" }}>
                💼 Asesoramiento inmobiliario en la costa.
              </p>
            </div>
            <div style={{ display: "grid", gap: "0.65rem", fontSize: "0.95rem" }}>
              <a href={wa(MATIAS_WA_MSG_PREMIUM)} target="_blank" rel="noopener noreferrer">
                📲 WhatsApp directo
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                📸 Instagram
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                📍 Ubicación (mapa)
              </a>
            </div>
          </div>

        </div>
      </footer>

      <div className={styles.floatWa}>
        <a href={wa(MATIAS_WA_MSG_PREMIUM)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Matías Propiedades">
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}
