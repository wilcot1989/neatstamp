import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { generateSignatureHtml } from "@/lib/generateSignature";
import { DEFAULT_SIGNATURE_DATA } from "@/lib/types";

export const runtime = "edge";

// GET — fetch the master template HTML for the team
export async function GET() {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    const user = await db
      .prepare("SELECT id, plan FROM users WHERE email = ?")
      .bind(session.user.email)
      .first<{ id: string; plan: string }>();

    if (!user || user.plan !== "team") {
      return NextResponse.json({ error: "Team plan required" }, { status: 403 });
    }

    // Get the first signature as the master template
    const sig = await db
      .prepare("SELECT data, template FROM signatures WHERE user_id = ? ORDER BY created_at ASC LIMIT 1")
      .bind(user.id)
      .first<{ data: string; template: string }>();

    if (!sig) {
      return NextResponse.json({ error: "No master template found. Create a signature first." }, { status: 404 });
    }

    const sigData = typeof sig.data === "string" ? JSON.parse(sig.data) : sig.data;
    const { _blocks, _wrapperSettings, ...rest } = sigData;
    const data = { ...DEFAULT_SIGNATURE_DATA, ...rest };

    // Generate template HTML with placeholders
    const templateData = {
      ...data,
      fullName: "{{name}}",
      jobTitle: "{{title}}",
      email: "{{email}}",
      phone: "{{phone}}",
    };

    const html = generateSignatureHtml(templateData);

    return NextResponse.json({
      html,
      template: sig.template,
      placeholders: ["{{name}}", "{{email}}", "{{title}}", "{{phone}}", "{{department}}"],
    });
  } catch (err) {
    console.error("Master template error:", err);
    return NextResponse.json({ error: "Failed to generate template" }, { status: 500 });
  }
}
