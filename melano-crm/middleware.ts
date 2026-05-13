import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ENTERPRISES_HOSTS = new Set(["melanoenterprises.com", "www.melanoenterprises.com"]);

/**
 * En melanoenterprises.com la home muestra la landing Matías (lote MDP).
 * El resto de hosts conserva el comportamiento por defecto de la app.
 */
export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  if (!ENTERPRISES_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  if (pathname === "/" || pathname === "") {
    const url = request.nextUrl.clone();
    url.pathname = "/matias-propiedades-mar-del-plata";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
