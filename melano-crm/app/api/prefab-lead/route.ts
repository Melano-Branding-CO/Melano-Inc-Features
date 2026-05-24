import { NextResponse } from "next/server";

export type PrefabLeadPayload = {
  nombre: string;
  telefono: string;
  ciudad: string;
  presupuesto: string;
};

/**
 * POST JSON lead to optional webhook (PREFAB_LEAD_WEBHOOK_URL).
 * Safe to call without webhook configured — returns 200.
 */
export async function POST(request: Request) {
  let body: PrefabLeadPayload;
  try {
    body = (await request.json()) as PrefabLeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const webhook = process.env.PREFAB_LEAD_WEBHOOK_URL;
  const payload = {
    ...body,
    source: "melano-prefab-landing",
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
        console.error("Prefab lead webhook error:", res.status, await res.text());
      }
    } catch (e) {
      console.error("Prefab lead webhook failed:", e);
    }
  }

  return NextResponse.json({ ok: true });
}
