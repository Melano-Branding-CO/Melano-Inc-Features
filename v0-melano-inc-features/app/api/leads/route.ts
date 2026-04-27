import { NextResponse } from "next/server";
import { sanitizeLead, validateLead, type LeadPayload } from "@/lib/lead-schema";
import { getSupabaseAdminClient } from "@/lib/supabase";

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Body JSON invalido." },
      { status: 400 },
    );
  }

  const sanitized = sanitizeLead(payload);
  const errors = validateLead(sanitized);
  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, error: errors.join(" ") },
      { status: 400 },
    );
  }

  const record = {
    ...sanitized,
    source: "website",
    created_at: new Date().toISOString(),
  };

  const tableName = process.env.SUPABASE_LEADS_TABLE ?? "leads";
  const webhookUrl = process.env.LEAD_AUTORESPONSE_WEBHOOK_URL;
  let mode: "supabase" | "mock" = "mock";

  const supabase = getSupabaseAdminClient();
  if (supabase) {
    const { error } = await supabase.from(tableName).insert([record]);
    if (error) {
      return NextResponse.json(
        {
          ok: false,
          error: "No se pudo guardar el lead en Supabase.",
          detail: error.message,
        },
        { status: 500 },
      );
    }
    mode = "supabase";
  }

  if (webhookUrl) {
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "lead.created", lead: record }),
    }).catch(() => {
      // Keep webhook non-blocking for conversion safety.
    });
  }

  return NextResponse.json(
    {
      ok: true,
      mode,
      message:
        mode === "supabase"
          ? "Lead guardado. Te respondemos por WhatsApp."
          : "Lead recibido en modo mock. Configura Supabase para persistencia real.",
    },
    { status: 201 },
  );
}
