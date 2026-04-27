import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container-shell grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            MELANO INC
          </p>
          <p className="mt-3 max-w-xs text-sm text-zinc-400">
            Hub de automatizacion con IA para empresas que priorizan
            crecimiento rentable y operaciones escalables.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Productos
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li>
              <Link className="hover:text-white" href="/melania">
                Melania
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/alenya">
                Alenya
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/luxia">
                Luxia
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/alexia">
                Alexia
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Contacto
          </p>
          <a
            className="mt-3 block text-sm font-medium text-zinc-300 hover:text-white"
            href="mailto:hola@brunomelano.com"
          >
            hola@brunomelano.com
          </a>
          <a
            className="mt-2 block text-sm font-medium text-zinc-300 hover:text-white"
            href="https://wa.me/5491139999999?text=Hola%20MELANO%20INC%2C%20quiero%20automatizar%20mi%20negocio"
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp MELANO INC
          </a>
          <Link className="mt-2 block text-sm font-medium text-zinc-300 hover:text-white" href="/login">
            Portal SaaS (proximamente)
          </Link>
        </div>
      </div>
      <p className="container-shell mt-10 text-xs text-zinc-500">
        © {new Date().getFullYear()} MELANO INC. Todos los derechos reservados.
      </p>
    </footer>
  );
}
