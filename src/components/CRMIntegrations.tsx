"use client";

import { useState } from "react";

interface CRMIntegrationsProps {
  plan: "free" | "pro" | "team";
}

interface Integration {
  id: string;
  name: string;
  icon: string;
  description: string;
  connected: boolean;
  comingSoon: boolean;
}

const integrations: Integration[] = [
  { id: "hubspot", name: "HubSpot", icon: "🟠", description: "Sync signature clicks as contact activities", connected: false, comingSoon: false },
  { id: "salesforce", name: "Salesforce", icon: "☁️", description: "Log signature engagement in contact records", connected: false, comingSoon: false },
  { id: "pipedrive", name: "Pipedrive", icon: "🟢", description: "Track link clicks as touchpoints", connected: false, comingSoon: true },
  { id: "zoho", name: "Zoho CRM", icon: "🔴", description: "Signature analytics in your CRM dashboard", connected: false, comingSoon: true },
  { id: "monday", name: "Monday.com", icon: "🟣", description: "Signature events as board updates", connected: false, comingSoon: true },
];

export default function CRMIntegrations({ plan }: CRMIntegrationsProps) {
  const isPro = plan === "pro" || plan === "team";
  const [localIntegrations, setLocalIntegrations] = useState(integrations);

  if (!isPro) {
    return (
      <div className="rounded-xl border border-dashed border-amber-200 bg-amber-50 p-5 text-center">
        <h3 className="text-sm font-bold text-amber-800 mb-1">CRM Integrations</h3>
        <p className="text-xs text-amber-700">Connect your CRM to track signature engagement. Available on Pro and Team plans.</p>
        <span className="inline-block mt-2 text-[9px] font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">PRO</span>
      </div>
    );
  }

  const handleToggle = (id: string) => {
    setLocalIntegrations(localIntegrations.map((i) =>
      i.id === id && !i.comingSoon ? { ...i, connected: !i.connected } : i
    ));
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100">
        <h3 className="text-sm font-bold text-slate-800">CRM Integrations</h3>
        <p className="text-[11px] text-slate-500">Connect your CRM to sync signature engagement data</p>
      </div>

      <div className="divide-y divide-slate-100">
        {localIntegrations.map((integration) => (
          <div key={integration.id} className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">{integration.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-slate-800">{integration.name}</p>
                  {integration.comingSoon && (
                    <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">SOON</span>
                  )}
                  {integration.connected && (
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">CONNECTED</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500">{integration.description}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleToggle(integration.id)}
              disabled={integration.comingSoon}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                integration.comingSoon
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : integration.connected
                    ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {integration.comingSoon ? "Coming soon" : integration.connected ? "Disconnect" : "Connect"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
