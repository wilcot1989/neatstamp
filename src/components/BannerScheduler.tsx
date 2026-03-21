"use client";

import { useState } from "react";

interface ScheduledBanner {
  id: string;
  name: string;
  imageUrl: string;
  linkUrl: string;
  startDate: string;
  endDate: string;
  active: boolean;
}

interface BannerSchedulerProps {
  plan: "free" | "pro" | "team";
  onApplyBanner: (imageUrl: string, linkUrl: string) => void;
}

export default function BannerScheduler({ plan, onApplyBanner }: BannerSchedulerProps) {
  const isPro = plan === "pro" || plan === "team";
  const [banners, setBanners] = useState<ScheduledBanner[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", imageUrl: "", linkUrl: "", startDate: "", endDate: "" });

  if (!isPro) {
    return (
      <div className="rounded-xl border border-dashed border-amber-200 bg-amber-50 p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm">📅</span>
          <h3 className="text-xs font-bold text-amber-800">Banner Scheduling</h3>
          <span className="text-[9px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">PRO</span>
        </div>
        <p className="text-[11px] text-amber-700">Schedule different banners for different date ranges. Automatically rotate promotions in your signature.</p>
      </div>
    );
  }

  const handleAdd = () => {
    if (!form.name || !form.imageUrl || !form.startDate || !form.endDate) return;
    setBanners([...banners, {
      id: String(Date.now()),
      ...form,
      active: true,
    }]);
    setForm({ name: "", imageUrl: "", linkUrl: "", startDate: "", endDate: "" });
    setShowForm(false);
  };

  const handleActivate = (banner: ScheduledBanner) => {
    onApplyBanner(banner.imageUrl, banner.linkUrl);
  };

  const handleDelete = (id: string) => {
    setBanners(banners.filter((b) => b.id !== id));
  };

  // Check which banner should be active based on current date
  const today = new Date().toISOString().split("T")[0];
  const activeBanner = banners.find((b) => b.active && b.startDate <= today && b.endDate >= today);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">📅</span>
          <h3 className="text-sm font-bold text-slate-800">Banner Schedule</h3>
        </div>
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          + Add Banner
        </button>
      </div>

      {/* Active banner indicator */}
      {activeBanner && (
        <div className="px-4 py-2 bg-emerald-50 border-b border-emerald-100 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-emerald-700 font-medium">Active now: {activeBanner.name}</span>
        </div>
      )}

      {/* Banner list */}
      {banners.length > 0 ? (
        <div className="divide-y divide-slate-100">
          {banners.map((banner) => {
            const isActive = banner.startDate <= today && banner.endDate >= today;
            const isPast = banner.endDate < today;
            const isFuture = banner.startDate > today;

            return (
              <div key={banner.id} className={`px-4 py-3 ${isPast ? "opacity-50" : ""}`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-slate-800 truncate">{banner.name}</p>
                      {isActive && <span className="text-[9px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">LIVE</span>}
                      {isFuture && <span className="text-[9px] font-bold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded-full">UPCOMING</span>}
                      {isPast && <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">ENDED</span>}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{banner.startDate} → {banner.endDate}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleActivate(banner)}
                      className="rounded-lg border border-slate-200 px-2 py-1 text-[10px] text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      Apply
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(banner.id)}
                      className="rounded-lg border border-red-200 px-2 py-1 text-[10px] text-red-500 hover:bg-red-50 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : !showForm ? (
        <div className="p-4 text-center text-xs text-slate-400">
          No scheduled banners yet. Add one to start rotating promotions.
        </div>
      ) : null}

      {/* Add banner form */}
      {showForm && (
        <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Banner name (e.g. Spring Sale)"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="text"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            placeholder="Banner image URL"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="text"
            value={form.linkUrl}
            onChange={(e) => setForm({ ...form, linkUrl: e.target.value })}
            placeholder="Banner link URL"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
          />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] text-slate-500 block mb-0.5">Start date</label>
              <input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="text-[10px] text-slate-500 block mb-0.5">End date</label>
              <input type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs focus:border-blue-500 focus:outline-none" />
            </div>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={handleAdd} className="flex-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">Add</button>
            <button type="button" onClick={() => setShowForm(false)} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
