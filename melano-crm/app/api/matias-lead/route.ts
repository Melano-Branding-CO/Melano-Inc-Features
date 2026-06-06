import { NextResponse } from "next/server";

export type MatiasLeadPayload = {
  nombre_completo: string;
  whatsapp: string;
  email: string;
  objetivo: string;
};

export async function POST(request: Request) {
  let body: MatiasLeadPayload;
  try {
    body = (await request.json()) as MatiasLeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const webhook = process.env.MATIAS_LEAD_WEBHOOK_URL;
  const payload = {
    ...body,
    source: "landing_matias_mdp",
    submittedAt: new Date().toISOString(),
  };

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("Matias lead webhook:", res.status, await res.text());
      }
    } catch (e) {
      console.error("Matias lead webhook failed:", e);
    }
  }

  return NextResponse.json({ ok: true });
}
