"use client";

import { Block, BlockType } from "@/lib/blocks";
import { SignatureData } from "@/lib/types";

interface BlockSettingsProps {
  block: Block;
  data: SignatureData;
  plan: "free" | "pro" | "team";
  onSettingsChange: (settings: Record<string, unknown>) => void;
  onDataChange?: (data: SignatureData) => void;
}

// ---------------------------------------------------------------------------
// Small reusable controls
// ---------------------------------------------------------------------------

function Label({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <label className="block text-xs font-medium text-slate-600 mb-1" title={hint}>
      {children}
      {hint && (
        <span className="ml-1 text-slate-400 cursor-help" title={hint}>ⓘ</span>
      )}
    </label>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  unit = "",
  hint,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  unit?: string;
  hint?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <Label hint={hint}>{label} <span className="text-slate-400 font-normal">{value}{unit}</span></Label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
    </div>
  );
}

function ToggleField({
  label,
  value,
  hint,
  onChange,
}: {
  label: string;
  value: boolean;
  hint?: string;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <Label hint={hint}>{label}</Label>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${value ? "bg-blue-600" : "bg-slate-300"}`}
      >
        <span
          className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${value ? "translate-x-4" : "translate-x-0"}`}
        />
      </button>
    </div>
  );
}

function RadioGroup({
  label,
  value,
  options,
  hint,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  hint?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label hint={hint}>{label}</Label>
      <div className="flex gap-1 flex-wrap">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              value === opt.value
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ColorField({
  label,
  value,
  hint,
  onChange,
}: {
  label: string;
  value: string;
  hint?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label hint={hint}>{label}</Label>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-8 cursor-pointer rounded border border-slate-200"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-24 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 focus:border-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
}

function TextInputField({
  label,
  value,
  placeholder,
  hint,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  hint?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label hint={hint}>{label}</Label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Per-block settings panels
// ---------------------------------------------------------------------------

function PhotoSettings({
  block,
  onChange,
  data,
  onDataChange,
}: {
  block: Block;
  data?: SignatureData;
  onDataChange?: (data: SignatureData) => void;
  onChange: (s: Record<string, unknown>) => void;
}) {
  const s = block.settings;
  const set = (key: string, val: unknown) => onChange({ ...s, [key]: val });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !data || !onDataChange) return;
    if (file.size > 2 * 1024 * 1024) { alert("Image must be under 2MB"); return; }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const size = 200;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const minDim = Math.min(img.width, img.height);
        const sx = (img.width - minDim) / 2;
        const sy = (img.height - minDim) / 2;
        ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);
        onDataChange({ ...data, photoUrl: canvas.toDataURL("image/jpeg", 0.85) });
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-3">
      {/* Photo upload */}
      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1.5">Photo</label>
        {data?.photoUrl ? (
          <div className="flex items-center gap-3">
            <img src={data.photoUrl} alt="Preview" className="h-14 w-14 rounded-full object-cover border border-slate-200" />
            <div className="flex gap-2">
              <label className="cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                Change
                <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
              </label>
              <button
                onClick={() => onDataChange?.({ ...data, photoUrl: "" })}
                className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-100 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <label className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-sm text-slate-500 hover:border-blue-300 hover:text-blue-600 transition-colors">
            <span>Click to upload photo (max 2MB)</span>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
          </label>
        )}
        <p className="mt-1 text-[10px] text-slate-400">Or paste a URL below:</p>
        <input
          type="text"
          value={data?.photoUrl?.startsWith("data:") ? "" : (data?.photoUrl || "")}
          onChange={(e) => onDataChange?.({ ...data!, photoUrl: e.target.value })}
          placeholder="https://example.com/photo.jpg"
          className="mt-1 w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <RadioGroup
        label="Shape"
        value={String(s.shape ?? "circle")}
        options={[
          { value: "circle", label: "Circle" },
          { value: "square", label: "Square" },
          { value: "rounded", label: "Rounded" },
        ]}
        hint="The border-radius applied to the photo"
        onChange={(v) => set("shape", v)}
      />
      <SliderField
        label="Size"
        value={Number(s.size ?? 80)}
        min={60}
        max={120}
        unit="px"
        hint="Photo width and height in pixels"
        onChange={(v) => set("size", v)}
      />
      <RadioGroup
        label="Alignment"
        value={String(s.alignment ?? "left")}
        options={[
          { value: "left", label: "Left" },
          { value: "center", label: "Center" },
        ]}
        hint="Photo alignment when it's on its own row"
        onChange={(v) => set("alignment", v)}
      />
      <RadioGroup
        label="Photo position"
        value={String(s.position ?? "left")}
        options={[
          { value: "left", label: "Left of text" },
          { value: "right", label: "Right of text" },
        ]}
        hint="Place your photo to the left or right of your contact details"
        onChange={(v) => set("position", v)}
      />
    </div>
  );
}

function NameSettings({
  block,
  onChange,
}: {
  block: Block;
  onChange: (s: Record<string, unknown>) => void;
}) {
  const s = block.settings;
  const set = (key: string, val: unknown) => onChange({ ...s, [key]: val });

  return (
    <div className="space-y-3">
      <SliderField
        label="Name font size"
        value={Number(s.nameSize ?? 18)}
        min={16}
        max={24}
        unit="px"
        hint="Font size for the full name"
        onChange={(v) => set("nameSize", v)}
      />
      <ToggleField
        label="Show job title"
        value={Boolean(s.showTitle ?? true)}
        hint="Toggle visibility of the job title line"
        onChange={(v) => set("showTitle", v)}
      />
      <ToggleField
        label="Show company"
        value={Boolean(s.showCompany ?? true)}
        hint="Toggle visibility of the company name"
        onChange={(v) => set("showCompany", v)}
      />
      <ToggleField
        label="Show pronouns"
        value={Boolean(s.showPronouns ?? true)}
        hint="Toggle visibility of pronouns in parentheses"
        onChange={(v) => set("showPronouns", v)}
      />
    </div>
  );
}

function ContactSettings({
  block,
  onChange,
}: {
  block: Block;
  onChange: (s: Record<string, unknown>) => void;
}) {
  const s = block.settings;
  const set = (key: string, val: unknown) => onChange({ ...s, [key]: val });

  return (
    <div className="space-y-3">
      <RadioGroup
        label="Layout"
        value={String(s.layout ?? "stacked")}
        options={[
          { value: "stacked", label: "Stacked" },
          { value: "inline", label: "Inline" },
        ]}
        hint="Stacked puts each item on its own line; inline puts them side by side"
        onChange={(v) => set("layout", v)}
      />
      <ToggleField
        label="Show icons"
        value={Boolean(s.showIcons ?? false)}
        hint="Show a small emoji icon before each contact item"
        onChange={(v) => set("showIcons", v)}
      />
    </div>
  );
}

function SocialSettings({
  block,
  data,
  plan,
  onChange,
}: {
  block: Block;
  data: SignatureData;
  plan: "free" | "pro" | "team";
  onChange: (s: Record<string, unknown>) => void;
}) {
  const s = block.settings;
  const isPro = plan === "pro" || plan === "team";
  const set = (key: string, val: unknown) => onChange({ ...s, [key]: val });

  const filledLinks = [data.linkedin, data.twitter, data.instagram, data.facebook, data.github, data.youtube].filter(Boolean);

  return (
    <div className="space-y-3">
      <RadioGroup
        label="Display style"
        value={String(s.style ?? "text")}
        options={[
          { value: "text", label: "Text links" },
          { value: "icons", label: "Pill buttons" },
        ]}
        hint="Text links are plain hyperlinks; pill buttons are colored badge-style links"
        onChange={(v) => set("style", v)}
      />
      {!isPro && (
        <p className="text-xs text-slate-500 bg-slate-50 rounded-md px-3 py-2">
          Free plan shows up to 2 social links. You have {filledLinks.length} filled in.{" "}
          <a href="https://neatstamp.com/pricing" className="text-blue-600 underline">Upgrade for unlimited.</a>
        </p>
      )}
      <p className="text-xs text-slate-400">
        Add social URLs in your details form. Filled links appear here automatically.
      </p>
    </div>
  );
}

function DividerSettings({
  block,
  onChange,
}: {
  block: Block;
  onChange: (s: Record<string, unknown>) => void;
}) {
  const s = block.settings;
  const set = (key: string, val: unknown) => onChange({ ...s, [key]: val });

  return (
    <div className="space-y-3">
      <ColorField
        label="Color"
        value={String(s.color ?? "#e2e8f0")}
        hint="The color of the divider line"
        onChange={(v) => set("color", v)}
      />
      <SliderField
        label="Width"
        value={Number(s.width ?? 100)}
        min={50}
        max={100}
        unit="%"
        hint="How wide the divider is, as a percentage of the signature width"
        onChange={(v) => set("width", v)}
      />
      <RadioGroup
        label="Line style"
        value={String(s.style ?? "solid")}
        options={[
          { value: "solid", label: "Solid" },
          { value: "dashed", label: "Dashed" },
          { value: "dotted", label: "Dotted" },
        ]}
        hint="The CSS border style for the line"
        onChange={(v) => set("style", v)}
      />
      <RadioGroup
        label="Thickness"
        value={String(s.thickness ?? 1)}
        options={[
          { value: "1", label: "Thin (1px)" },
          { value: "2", label: "Medium (2px)" },
          { value: "3", label: "Thick (3px)" },
        ]}
        hint="Height of the divider line"
        onChange={(v) => set("thickness", Number(v))}
      />
    </div>
  );
}

function CtaSettings({
  block,
  onChange,
}: {
  block: Block;
  onChange: (s: Record<string, unknown>) => void;
}) {
  const s = block.settings;
  const set = (key: string, val: unknown) => onChange({ ...s, [key]: val });

  return (
    <div className="space-y-3">
      <TextInputField
        label="Button text"
        value={String(s.text ?? "")}
        placeholder="Book a Meeting"
        hint="The label on the button"
        onChange={(v) => set("text", v)}
      />
      <TextInputField
        label="Link URL"
        value={String(s.url ?? "")}
        placeholder="https://calendly.com/yourname"
        hint="Where the button links to. Leave blank to hide the button."
        onChange={(v) => set("url", v)}
      />
      <ColorField
        label="Button background"
        value={String(s.bgColor ?? "#2563eb")}
        hint="Background color of the button"
        onChange={(v) => set("bgColor", v)}
      />
      <ColorField
        label="Button text color"
        value={String(s.textColor ?? "#ffffff")}
        hint="Text color inside the button"
        onChange={(v) => set("textColor", v)}
      />
    </div>
  );
}

function DisclaimerSettings({
  block,
  onChange,
}: {
  block: Block;
  onChange: (s: Record<string, unknown>) => void;
}) {
  const s = block.settings;
  const set = (key: string, val: unknown) => onChange({ ...s, [key]: val });

  return (
    <div className="space-y-3">
      <div>
        <Label hint="The disclaimer text that will appear below your signature">
          Disclaimer text
        </Label>
        <textarea
          value={String(s.text ?? "")}
          onChange={(e) => set("text", e.target.value)}
          placeholder="This email and any attachments are confidential..."
          rows={3}
          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
        />
      </div>
      <SliderField
        label="Font size"
        value={Number(s.fontSize ?? 10)}
        min={9}
        max={12}
        unit="px"
        hint="Font size of the disclaimer text (keep small — it's supplementary)"
        onChange={(v) => set("fontSize", v)}
      />
    </div>
  );
}

function SpacerSettings({
  block,
  onChange,
}: {
  block: Block;
  onChange: (s: Record<string, unknown>) => void;
}) {
  const s = block.settings;
  const set = (key: string, val: unknown) => onChange({ ...s, [key]: val });

  return (
    <div className="space-y-3">
      <SliderField
        label="Height"
        value={Number(s.height ?? 8)}
        min={4}
        max={20}
        unit="px"
        hint="How much vertical space this spacer adds"
        onChange={(v) => set("height", v)}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export default function BlockSettings({ block, data, plan, onSettingsChange, onDataChange }: BlockSettingsProps) {
  const map: Record<BlockType, React.ReactNode> = {
    photo: <PhotoSettings block={block} onChange={onSettingsChange} data={data} onDataChange={onDataChange} />,
    name: <NameSettings block={block} onChange={onSettingsChange} />,
    contact: <ContactSettings block={block} onChange={onSettingsChange} />,
    social: <SocialSettings block={block} data={data} plan={plan} onChange={onSettingsChange} />,
    divider: <DividerSettings block={block} onChange={onSettingsChange} />,
    cta: <CtaSettings block={block} onChange={onSettingsChange} />,
    disclaimer: <DisclaimerSettings block={block} onChange={onSettingsChange} />,
    spacer: <SpacerSettings block={block} onChange={onSettingsChange} />,
  };

  return (
    <div className="px-3 pb-3 pt-2 border-t border-slate-100 bg-slate-50 rounded-b-xl">
      {map[block.type] ?? <p className="text-xs text-slate-400">No settings for this block.</p>}
    </div>
  );
}
