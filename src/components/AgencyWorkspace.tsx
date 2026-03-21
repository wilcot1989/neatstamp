"use client";

import { useState } from "react";

interface Workspace {
  id: string;
  name: string;
  logo?: string;
  signatures: number;
  members: number;
}

interface AgencyWorkspaceProps {
  plan: "free" | "pro" | "team";
}

export default function AgencyWorkspace({ plan }: AgencyWorkspaceProps) {
  const isTeam = plan === "team";
  const [workspaces, setWorkspaces] = useState<Workspace[]>([
    { id: "1", name: "Current Workspace", signatures: 3, members: 1 },
  ]);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");

  if (!isTeam) {
    return (
      <div className="rounded-xl border border-dashed border-amber-200 bg-amber-50 p-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-lg">🏢</span>
          <h3 className="text-sm font-bold text-amber-800">Agency Multi-Workspace</h3>
        </div>
        <p className="text-xs text-amber-700 max-w-xs mx-auto">
          Manage email signatures for multiple clients from one account.
          Each client gets their own workspace with brand settings.
        </p>
        <span className="inline-block mt-2 text-[9px] font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">TEAM PLAN</span>
      </div>
    );
  }

  const handleCreate = () => {
    if (!newName.trim()) return;
    setWorkspaces([...workspaces, {
      id: String(Date.now()),
      name: newName.trim(),
      signatures: 0,
      members: 0,
    }]);
    setNewName("");
    setShowCreate(false);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">🏢</span>
          <h3 className="text-sm font-bold text-slate-800">Workspaces</h3>
        </div>
        <button
          type="button"
          onClick={() => setShowCreate(true)}
          className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          + New Workspace
        </button>
      </div>

      <div className="divide-y divide-slate-100">
        {workspaces.map((ws) => (
          <div key={ws.id} className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                {ws.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">{ws.name}</p>
                <p className="text-[11px] text-slate-400">{ws.signatures} signatures · {ws.members} members</p>
              </div>
            </div>
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        ))}
      </div>

      {showCreate && (
        <div className="px-4 py-3 border-t border-slate-200 bg-slate-50">
          <div className="flex gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Client name..."
              className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            />
            <button type="button" onClick={handleCreate} className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">Create</button>
            <button type="button" onClick={() => setShowCreate(false)} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
