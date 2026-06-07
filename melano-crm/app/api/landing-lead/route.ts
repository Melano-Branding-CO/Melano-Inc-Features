import { NextResponse } from "next/server";

import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

type Body = {
  landing_slug?: string;
  name?: string;
  phone?: string;
  profile?: string;
  intent?: string;
  city?: string;
  notes?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const phone = String(body.phone ?? "").replace(/\s/g, "").trim();
  if (phone.length < 8) {
    return NextResponse.json({ ok: false, error: "phone_required" }, { status: 400 });
  }

  const landing_slug = String(body.landing_slug ?? "").trim() || "unknown";
  const row = {
    landing_slug,
    name: String(body.name ?? "").trim() || null,
    phone,
    profile: String(body.profile ?? "").trim() || null,
    intent: String(body.intent ?? "").trim() || null,
    city: String(body.city ?? "").trim() || null,
    notes: String(body.notes ?? "").trim() || null,
  };

  const admin = getSupabaseAdmin();
  if (!admin) {
    return NextResponse.json({ ok: true, saved: false });
  }

  const { error } = await admin.from("landing_leads").insert(row);

  if (error) {
    console.error("[landing-lead]", error.message);
    return NextResponse.json({ ok: true, saved: false, warn: "supabase_insert_failed" });
  }

  return NextResponse.json({ ok: true, saved: true });
}
