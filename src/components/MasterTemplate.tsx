"use client";

import { useState, useRef } from "react";
import { SignatureData, DEFAULT_SIGNATURE_DATA } from "@/lib/types";
import { generateSignatureHtml } from "@/lib/generateSignature";

interface MasterTemplateProps {
  masterData: SignatureData;
  plan: "free" | "pro" | "team";
}

interface TeamMemberRow {
  id: string;
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
}

function parseCsv(text: string): TeamMemberRow[] {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].toLowerCase().split(",").map((h) => h.trim());
  const nameIdx = headers.findIndex((h) => h.includes("name"));
  const titleIdx = headers.findIndex((h) => h.includes("title") || h.includes("role") || h.includes("function"));
  const emailIdx = headers.findIndex((h) => h.includes("email") || h.includes("e-mail"));
  const phoneIdx = headers.findIndex((h) => h.includes("phone") || h.includes("tel"));

  return lines.slice(1).filter((l) => l.trim()).map((line, i) => {
    const cols = line.split(",").map((c) => c.trim().replace(/^"|"$/g, ""));
    return {
      id: String(i),
      fullName: nameIdx >= 0 ? cols[nameIdx] || "" : "",
      jobTitle: titleIdx >= 0 ? cols[titleIdx] || "" : "",
      email: emailIdx >= 0 ? cols[emailIdx] || "" : "",
      phone: phoneIdx >= 0 ? cols[phoneIdx] || "" : "",
    };
  }).filter((r) => r.fullName || r.email);
}

export default function MasterTemplate({ masterData, plan }: MasterTemplateProps) {
  const [members, setMembers] = useState<TeamMemberRow[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMemberRow | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const isTeam = plan === "team";

  if (!isTeam) {
    return (
      <div className="rounded-xl border border-dashed border-amber-200 bg-amber-50 p-5 text-center">
        <h3 className="text-sm font-bold text-amber-800 mb-1">Master Template System</h3>
        <p className="text-xs text-amber-700">Upload a CSV of your team members and generate signatures for everyone using your brand template.</p>
        <span className="inline-block mt-2 text-[9px] font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">TEAM PLAN</span>
      </div>
    );
  }

  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const parsed = parseCsv(text);
      setMembers(parsed);
      if (parsed.length > 0) setSelectedMember(parsed[0]);
    };
    reader.readAsText(file);
  };

  const memberData = (member: TeamMemberRow): SignatureData => ({
    ...masterData,
    fullName: member.fullName || masterData.fullName,
    jobTitle: member.jobTitle || masterData.jobTitle,
    email: member.email || masterData.email,
    phone: member.phone || masterData.phone,
  });

  const previewHtml = selectedMember
    ? generateSignatureHtml(memberData(selectedMember))
    : generateSignatureHtml(masterData);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
        <h3 className="text-sm font-bold text-slate-800">Master Template</h3>
        <p className="text-[11px] text-slate-500">Upload your team CSV to generate signatures for everyone</p>
      </div>

      <div className="p-4 space-y-4">
        {/* CSV Upload */}
        <div>
          <label
            onClick={() => fileRef.current?.click()}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 py-4 text-sm text-slate-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>
            Upload CSV (name, title, email, phone)
          </label>
          <input ref={fileRef} type="file" accept=".csv,text/csv" onChange={handleCsvUpload} className="hidden" />
          <p className="mt-1 text-[10px] text-slate-400">CSV format: name, title, email, phone — first row as headers</p>
        </div>

        {/* Members list */}
        {members.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-slate-600 mb-2">{members.length} team members loaded</p>
            <div className="max-h-40 overflow-y-auto space-y-1 rounded-lg border border-slate-100 p-2">
              {members.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMember(m)}
                  className={`w-full text-left rounded-lg px-3 py-1.5 text-xs transition-colors ${
                    selectedMember?.id === m.id
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="font-medium">{m.fullName}</span>
                  {m.jobTitle && <span className="text-slate-400 ml-1">— {m.jobTitle}</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Preview */}
        {selectedMember && (
          <div>
            <p className="text-xs font-semibold text-slate-600 mb-2">Preview: {selectedMember.fullName}</p>
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
              <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
