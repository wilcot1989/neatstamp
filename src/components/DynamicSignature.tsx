"use client";

import { useState } from "react";
import { SignatureData } from "@/lib/types";

interface DynamicSignatureProps {
  data: SignatureData;
  plan: "free" | "pro" | "team";
  onDataChange: (d: SignatureData) => void;
}

interface DynamicRule {
  id: string;
  condition: "new-lead" | "existing-customer" | "internal" | "custom";
  label: string;
  ctaText: string;
  ctaUrl: string;
  bannerUrl: string;
}

const DEFAULT_RULES: DynamicRule[] = [
  { id: "1", condition: "new-lead", label: "New leads", ctaText: "Book a Demo", ctaUrl: "", bannerUrl: "" },
  { id: "2", condition: "existing-customer", label: "Existing customers", ctaText: "Leave a Review", ctaUrl: "", bannerUrl: "" },
  { id: "3", condition: "internal", label: "Internal emails", ctaText: "", ctaUrl: "", bannerUrl: "" },
];

export default function DynamicSignature({ data, plan, onDataChange }: DynamicSignatureProps) {
  const isPro = plan === "pro" || plan === "team";
  const [rules, setRules] = useState<DynamicRule[]>(DEFAULT_RULES);
  const [activeRule, setActiveRule] = useState<string>("1");

  if (!isPro) {
    return (
      <div className="rounded-xl border border-dashed border-amber-200 bg-amber-50 p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm">🎯</span>
          <h3 className="text-xs font-bold text-amber-800">Dynamic Signatures</h3>
          <span className="text-[9px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">PRO</span>
        </div>
        <p className="text-[11px] text-amber-700">
          Show different CTAs based on who you&apos;re emailing. New leads see &quot;Book a Demo&quot;,
          existing customers see &quot;Leave a Review&quot;. Upgrade to Pro.
        </p>
      </div>
    );
  }

  const currentRule = rules.find((r) => r.id === activeRule) ?? rules[0];

  const updateRule = (id: string, key: keyof DynamicRule, val: string) => {
    setRules(rules.map((r) => r.id === id ? { ...r, [key]: val } : r));
  };

  const applyRule = () => {
    if (currentRule.ctaUrl) {
      onDataChange({ ...data, calendlyUrl: currentRule.ctaUrl });
    }
    if (currentRule.bannerUrl) {
      onDataChange({ ...data, ctaBannerUrl: currentRule.bannerUrl });
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="text-sm">🎯</span>
          <h3 className="text-sm font-bold text-slate-800">Dynamic Signatures</h3>
        </div>
        <p className="text-[11px] text-slate-500 mt-0.5">Different CTAs for different recipients</p>
      </div>

      <div className="p-4 space-y-3">
        {/* Rule tabs */}
        <div className="flex gap-1 flex-wrap">
          {rules.map((rule) => (
            <button
              key={rule.id}
              type="button"
              onClick={() => setActiveRule(rule.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                activeRule === rule.id
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {rule.label}
            </button>
          ))}
        </div>

        {/* Rule config */}
        <div className="space-y-2 rounded-lg border border-slate-100 bg-slate-50 p-3">
          <div>
            <label className="text-[10px] font-medium text-slate-500 block mb-0.5">CTA Button Text</label>
            <input
              type="text"
              value={currentRule.ctaText}
              onChange={(e) => updateRule(currentRule.id, "ctaText", e.target.value)}
              placeholder="Book a Demo"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] font-medium text-slate-500 block mb-0.5">CTA URL</label>
            <input
              type="text"
              value={currentRule.ctaUrl}
              onChange={(e) => updateRule(currentRule.id, "ctaUrl", e.target.value)}
              placeholder="https://calendly.com/..."
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] font-medium text-slate-500 block mb-0.5">Banner Image URL (optional)</label>
            <input
              type="text"
              value={currentRule.bannerUrl}
              onChange={(e) => updateRule(currentRule.id, "bannerUrl", e.target.value)}
              placeholder="https://..."
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={applyRule}
            className="w-full rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Apply this rule to signature
          </button>
        </div>

        <p className="text-[10px] text-slate-400">
          Tip: Create multiple signatures with different CTAs, then switch between them based on your recipient.
        </p>
      </div>
    </div>
  );
}
