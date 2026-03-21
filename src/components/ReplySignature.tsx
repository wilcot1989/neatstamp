"use client";

import { useState } from "react";
import { SignatureData } from "@/lib/types";
import { generateSignatureHtml, GenerateOptions } from "@/lib/generateSignature";
import { copySignatureToClipboard } from "@/lib/clipboard";

interface ReplySignatureProps {
  data: SignatureData;
  plan: "free" | "pro" | "team";
}

// Generates a compact version of the signature for replies/forwards
function generateReplyHtml(data: SignatureData, options?: GenerateOptions): string {
  const c = data.primaryColor || "#2563eb";
  const ff = data.fontFamily || "Arial,Helvetica,sans-serif";
  const isPro = options?.plan === "pro" || options?.plan === "team";

  const contact = [
    data.phone ? `<a href="tel:${data.phone.replace(/\s/g, "")}" style="color:${c};text-decoration:none;">${data.phone}</a>` : "",
    data.email ? `<a href="mailto:${data.email}" style="color:${c};text-decoration:none;">${data.email}</a>` : "",
  ].filter(Boolean).join(`<span style="color:#ccc;padding:0 5px;">·</span>`);

  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${ff};font-size:12px;color:#555;">
  <tr><td style="padding-bottom:2px;">
    <span style="font-weight:bold;color:#1a1a1a;">${data.fullName}</span>${data.jobTitle ? ` <span style="color:#999;">—</span> <span style="color:#666;">${data.jobTitle}</span>` : ""}
  </td></tr>
  ${contact ? `<tr><td>${contact}</td></tr>` : ""}
  ${!isPro ? `<tr><td style="padding-top:4px;"><a href="https://neatstamp.com?ref=reply" style="color:#c0c0c0;font-size:9px;text-decoration:none;">Sent with NeatStamp</a></td></tr>` : ""}
</table>`;
}

export default function ReplySignature({ data, plan }: ReplySignatureProps) {
  const [enabled, setEnabled] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const isPro = plan === "pro" || plan === "team";

  if (!isPro) {
    return (
      <div className="rounded-xl border border-dashed border-amber-200 bg-amber-50 p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-amber-600 text-sm">↩️</span>
          <h3 className="text-xs font-bold text-amber-800">Reply/Forward Signature</h3>
          <span className="text-[9px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">PRO</span>
        </div>
        <p className="text-[11px] text-amber-700">Use a shorter signature for replies and forwards. Upgrade to Pro to enable.</p>
      </div>
    );
  }

  const options: GenerateOptions = { plan };
  const replyHtml = generateReplyHtml(data, options);

  const handleCopy = async () => {
    const ok = await copySignatureToClipboard(replyHtml);
    if (ok) { setCopyState("copied"); setTimeout(() => setCopyState("idle"), 2000); }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-sm">↩️</span>
          <h3 className="text-sm font-bold text-slate-800">Reply/Forward Signature</h3>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <span className="text-xs text-slate-500">Enable</span>
          <button
            type="button"
            role="switch"
            aria-checked={enabled}
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex h-5 w-9 rounded-full transition-colors ${enabled ? "bg-blue-600" : "bg-slate-300"}`}
          >
            <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform mt-0.5 ${enabled ? "translate-x-4 ml-0.5" : "translate-x-0.5"}`} />
          </button>
        </label>
      </div>

      {enabled && (
        <div className="p-4 space-y-3">
          <p className="text-xs text-slate-500">A compact version of your signature for replies and forwards:</p>
          <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
            <div dangerouslySetInnerHTML={{ __html: replyHtml }} />
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className={`w-full rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
              copyState === "copied"
                ? "bg-emerald-500 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {copyState === "copied" ? "Copied reply signature!" : "Copy Reply Signature"}
          </button>
          <p className="text-[10px] text-slate-400">
            Tip: In Gmail, go to Settings → Signature and set this as your reply signature.
          </p>
        </div>
      )}
    </div>
  );
}
