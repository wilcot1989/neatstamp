"use client";

import { useState } from "react";
import { SignatureData } from "@/lib/types";
import { generateSignatureHtml } from "@/lib/generateSignature";

interface ABTestingProps {
  dataA: SignatureData;
  dataB: SignatureData | null;
  plan: "free" | "pro" | "team";
  onSelectB: () => void;
}

export default function ABTesting({ dataA, dataB, plan, onSelectB }: ABTestingProps) {
  const isPro = plan === "pro" || plan === "team";
  const [activeView, setActiveView] = useState<"a" | "b">("a");

  if (!isPro) {
    return (
      <div className="rounded-xl border border-dashed border-amber-200 bg-amber-50 p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm">🧪</span>
          <h3 className="text-xs font-bold text-amber-800">A/B Testing</h3>
          <span className="text-[9px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">PRO</span>
        </div>
        <p className="text-[11px] text-amber-700">Test two signature variants and see which gets more clicks. Upgrade to Pro to enable.</p>
      </div>
    );
  }

  const htmlA = generateSignatureHtml(dataA, { plan });
  const htmlB = dataB ? generateSignatureHtml(dataB, { plan }) : null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">🧪</span>
          <h3 className="text-sm font-bold text-slate-800">A/B Testing</h3>
        </div>
        <div className="flex rounded-lg border border-slate-200 overflow-hidden">
          <button
            type="button"
            onClick={() => setActiveView("a")}
            className={`px-3 py-1 text-xs font-medium transition-colors ${
              activeView === "a" ? "bg-blue-600 text-white" : "bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            Variant A
          </button>
          <button
            type="button"
            onClick={() => setActiveView("b")}
            className={`px-3 py-1 text-xs font-medium transition-colors ${
              activeView === "b" ? "bg-blue-600 text-white" : "bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            Variant B
          </button>
        </div>
      </div>

      <div className="p-4">
        {activeView === "a" && (
          <div>
            <p className="text-xs text-slate-500 mb-2">Current signature (Variant A)</p>
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
              <div dangerouslySetInnerHTML={{ __html: htmlA }} />
            </div>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex-1">
                <p className="text-[11px] text-slate-500">Opens</p>
                <p className="text-lg font-bold text-slate-800">—</p>
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-slate-500">Clicks</p>
                <p className="text-lg font-bold text-slate-800">—</p>
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-slate-500">CTR</p>
                <p className="text-lg font-bold text-slate-800">—</p>
              </div>
            </div>
          </div>
        )}

        {activeView === "b" && (
          <div>
            {htmlB ? (
              <>
                <p className="text-xs text-slate-500 mb-2">Alternative signature (Variant B)</p>
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <div dangerouslySetInnerHTML={{ __html: htmlB }} />
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-[11px] text-slate-500">Opens</p>
                    <p className="text-lg font-bold text-slate-800">—</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] text-slate-500">Clicks</p>
                    <p className="text-lg font-bold text-slate-800">—</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] text-slate-500">CTR</p>
                    <p className="text-lg font-bold text-slate-800">—</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-xs text-slate-500 mb-3">Create a second variant to start A/B testing</p>
                <button
                  type="button"
                  onClick={onSelectB}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Create Variant B
                </button>
              </div>
            )}
          </div>
        )}

        <p className="text-[10px] text-slate-400 mt-3">
          Analytics will populate once both variants have been copied and used in emails.
        </p>
      </div>
    </div>
  );
}
