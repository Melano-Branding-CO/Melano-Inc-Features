const FAQ = [
  {
    q: "¿Cuánto tarda la entrega?",
    a: "Entre 30 y 90 días según modelo, stock de materiales y obra en tu terreno. Te entregamos un cronograma acotado antes de avanzar.",
  },
  {
    q: "¿Se puede financiar?",
    a: "Sí. Analizamos cuotas en pesos y opciones de crédito cuando aplican (incluyendo esquemas indexados según tu perfil). La primera consulta define viabilidad.",
  },
  {
    q: "¿Las casas incluyen instalación?",
    a: "Podés cotizar montaje e instalación llave en mano según zona. Detallamos alcance de obra civil, conexiones y terminaciones en la propuesta.",
  },
  {
    q: "¿Trabajan en todo el país?",
    a: "Operamos en Argentina y proyectos seleccionados en LATAM. La logística de envío y montaje se cotiza según ubicación y accesos.",
  },
];

export function PrefabFaq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-melano-border bg-[#070708] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-melano-gold">FAQ</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group overflow-hidden rounded-2xl border border-melano-border bg-melano-surface/40 transition open:border-melano-gold/25"
            >
              <summary className="cursor-pointer list-none px-6 py-5 text-left text-base font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-melano-gold transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="border-t border-white/5 px-6 pb-5 pt-0 text-sm leading-relaxed text-melano-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
