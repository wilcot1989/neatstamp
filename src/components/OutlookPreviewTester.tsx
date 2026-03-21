"use client";

import { useState } from "react";
import { SignatureData } from "@/lib/types";
import { generateSignatureHtml, GenerateOptions } from "@/lib/generateSignature";

interface OutlookPreviewTesterProps {
  data: SignatureData;
  plan: "free" | "pro" | "team";
}

interface OutlookIssue {
  severity: "error" | "warning" | "info";
  title: string;
  detail: string;
  fix: string;
}

function analyzeOutlookCompatibility(html: string, data: SignatureData): OutlookIssue[] {
  const issues: OutlookIssue[] = [];

  // 1. border-radius (Outlook uses Word engine, doesn't support it)
  if (html.includes("border-radius")) {
    const roundedCount = (html.match(/border-radius/g) || []).length;
    issues.push({
      severity: "warning",
      title: `border-radius used ${roundedCount}x`,
      detail: "Outlook desktop uses Microsoft Word's rendering engine which ignores CSS border-radius. Rounded corners and circles will appear as squares.",
      fix: "For photos: NeatStamp pre-crops your photo to the selected shape on copy. For other elements, consider using square designs.",
    });
  }

  // 2. max-width (not supported in Outlook)
  if (html.includes("max-width")) {
    issues.push({
      severity: "info",
      title: "max-width used",
      detail: "Outlook ignores max-width. Your signature uses a fixed width=\"500\" attribute which works correctly as a fallback.",
      fix: "No action needed — NeatStamp handles this automatically.",
    });
  }

  // 3. Background images (not supported)
  if (html.includes("background-image") || html.includes("background:url")) {
    issues.push({
      severity: "error",
      title: "Background images detected",
      detail: "Outlook does not render CSS background images. They will be completely invisible.",
      fix: "Use <img> tags instead of CSS backgrounds. NeatStamp templates avoid background images by design.",
    });
  }

  // 4. Padding on <td> (partially supported)
  const paddingOnTd = (html.match(/<td[^>]*style="[^"]*padding/g) || []).length;
  if (paddingOnTd > 0) {
    issues.push({
      severity: "info",
      title: `Padding on table cells (${paddingOnTd}x)`,
      detail: "Outlook supports padding on <td> elements but can sometimes render it inconsistently.",
      fix: "NeatStamp uses conservative padding values tested across Outlook versions.",
    });
  }

  // 5. SVG images (not supported)
  if (html.includes(".svg")) {
    issues.push({
      severity: "error",
      title: "SVG images detected",
      detail: "Outlook completely blocks SVG images. They will show as broken image icons.",
      fix: "Use PNG or JPEG images instead. NeatStamp uses PNG for all icons.",
    });
  }

  // 6. Base64 images
  if (html.includes("data:image")) {
    issues.push({
      severity: "warning",
      title: "Base64 embedded images",
      detail: "Outlook handles base64 images inconsistently. Some versions strip them, others show them inline.",
      fix: "NeatStamp uploads photos to a hosted URL when you click Copy, ensuring they work in all clients.",
    });
  }

  // 7. Width attribute on table
  if (html.includes('width="500"')) {
    issues.push({
      severity: "info",
      title: "Fixed width table ✓",
      detail: "Your signature uses width=\"500\" on the outer table — this is the recommended approach for Outlook.",
      fix: "No action needed — this is correct.",
    });
  }

  // 8. Inline styles present
  if (html.includes('style="') && !html.includes('class="')) {
    issues.push({
      severity: "info",
      title: "Inline styles only ✓",
      detail: "All styles are inline — Outlook strips <style> blocks and CSS classes, but inline styles work.",
      fix: "No action needed — NeatStamp always generates inline styles.",
    });
  }

  // 9. Table-based layout
  if (html.includes("<table") && html.includes("cellpadding")) {
    issues.push({
      severity: "info",
      title: "Table-based layout ✓",
      detail: "Your signature uses HTML tables for layout — this is the only reliable way to render in Outlook's Word engine.",
      fix: "No action needed.",
    });
  }

  // 10. Font check
  const fontMatch = html.match(/font-family:([^;"]+)/);
  if (fontMatch) {
    const font = fontMatch[1].trim();
    const safeFonts = ["Arial", "Helvetica", "Georgia", "Times New Roman", "Courier New", "Verdana", "Tahoma", "Trebuchet MS"];
    const isSafe = safeFonts.some((f) => font.includes(f));
    if (isSafe) {
      issues.push({
        severity: "info",
        title: "Web-safe font ✓",
        detail: `Using ${font.split(",")[0]} — this is a web-safe font that renders identically in all email clients.`,
        fix: "No action needed.",
      });
    } else {
      issues.push({
        severity: "warning",
        title: "Non-standard font",
        detail: `Using ${font} — this font may not be available on all systems. Outlook will fall back to a default font.`,
        fix: "Stick to web-safe fonts: Arial, Georgia, Verdana, Tahoma, Courier New, or Trebuchet MS.",
      });
    }
  }

  // 11. Photo present
  if (data.photoUrl) {
    issues.push({
      severity: "info",
      title: "Photo included ✓",
      detail: "Your signature includes a photo. NeatStamp crops it to your selected shape and uploads it to a hosted URL for maximum compatibility.",
      fix: "No action needed.",
    });
  }

  return issues;
}

export default function OutlookPreviewTester({ data, plan }: OutlookPreviewTesterProps) {
  const [showDetails, setShowDetails] = useState(false);
  const options: GenerateOptions = { plan };
  const html = generateSignatureHtml(data, options);
  const issues = analyzeOutlookCompatibility(html, data);

  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");
  const infos = issues.filter((i) => i.severity === "info");
  const passCount = infos.length;
  const totalChecks = issues.length;
  const score = totalChecks > 0 ? Math.round((passCount / totalChecks) * 100) : 100;
  const isGood = errors.length === 0 && warnings.length <= 1;

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">📬</span>
          <h3 className="text-sm font-bold text-slate-800">Outlook Compatibility</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isGood ? "bg-emerald-100 text-emerald-700" : errors.length > 0 ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
            {isGood ? "✓ Compatible" : errors.length > 0 ? `${errors.length} issues` : `${warnings.length} warnings`}
          </span>
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-blue-600 hover:text-blue-700"
          >
            {showDetails ? "Hide details" : "Show details"}
          </button>
        </div>
      </div>

      {/* Outlook-style preview */}
      <div className="border-b border-slate-100">
        <div className="flex items-center gap-1 px-3 py-1 bg-[#0078d4]">
          <span className="text-[10px] text-white font-medium">Outlook Desktop Preview</span>
        </div>
        <div className="p-4 bg-white" style={{ fontFamily: "Calibri, sans-serif" }}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

      {/* Details */}
      {showDetails && (
        <div className="divide-y divide-slate-50 max-h-60 overflow-y-auto">
          {issues.map((issue, i) => (
            <div key={i} className="px-4 py-2.5">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 text-xs">
                  {issue.severity === "error" && "❌"}
                  {issue.severity === "warning" && "⚠️"}
                  {issue.severity === "info" && "✅"}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-700">{issue.title}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{issue.detail}</p>
                  <p className="text-[10px] text-blue-600 mt-0.5">{issue.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
