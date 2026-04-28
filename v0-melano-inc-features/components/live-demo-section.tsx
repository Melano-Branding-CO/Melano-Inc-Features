import { SectionShell } from "@/components/section-shell";

export function LiveDemoSection({ title = "Demo live bot" }: { title?: string }) {
  return (
    <SectionShell
      id="demo-live"
      title={title}
      subtitle="Integramos un widget embebible o iframe externo cuando quieras pasar a produccion."
    >
      <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
        <div className="rounded-2xl border border-neutral-800 bg-black p-5">
          <div className="mb-4 flex items-center justify-between border-b border-neutral-900 pb-4">
            <div>
              <p className="text-sm text-neutral-400">MELANO Chat Preview</p>
              <p className="text-base font-semibold text-white">Asistente en tiempo real</p>
            </div>
            <span className="rounded-full border border-emerald-700 bg-emerald-900/30 px-3 py-1 text-xs font-semibold text-emerald-300">
              online
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-neutral-800 bg-neutral-900 p-3 text-neutral-200">
              Hola, quiero automatizar respuestas en WhatsApp para captar mas consultas.
            </div>
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm border border-zinc-700 bg-white p-3 text-black">
              Perfecto, te recomiendo Alenya + Alexia para captar, calificar y cerrar leads desde un único flujo.
            </div>
            <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-neutral-800 bg-neutral-900 p-3 text-neutral-200">
              Podes mostrarme un caso real de inmobiliaria?
            </div>
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm border border-zinc-700 bg-white p-3 text-black">
              Claro. Luxia ayudo a una inmobiliaria a reducir el tiempo de respuesta de 2h a 4m y triplicar visitas calificadas.
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
