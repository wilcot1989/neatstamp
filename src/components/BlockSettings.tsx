"use client";

import { Block, BlockType } from "@/lib/blocks";
import { SignatureData } from "@/lib/types";

interface BlockSettingsProps {
  block: Block;
  data: SignatureData;
  plan: "free" | "pro" | "team";
  onSettingsChange: (settings: Record<string, unknown>) => void;
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
}: {
  block: Block;
  onChange: (s: Record<string, unknown>) => void;
}) {
  const s = block.settings;
  const set = (key: string, val: unknown) => onChange({ ...s, [key]: val });

  return (
    <div className="space-y-3">
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
        hint="Horizontal position of the photo"
        onChange={(v) => set("alignment", v)}
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
          <a href="/pricing" className="text-blue-600 underline">Upgrade for unlimited.</a>
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

export default function BlockSettings({ block, data, plan, onSettingsChange }: BlockSettingsProps) {
  const map: Record<BlockType, React.ReactNode> = {
    photo: <PhotoSettings block={block} onChange={onSettingsChange} />,
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
