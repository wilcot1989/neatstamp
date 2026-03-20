import { SignatureData, TemplateName, WrapperSettings, DEFAULT_WRAPPER_SETTINGS } from "./types";
import { GenerateOptions } from "./generateSignature";

// ---------------------------------------------------------------------------
// Block type system
// ---------------------------------------------------------------------------

export type BlockType =
  | "photo"
  | "name"
  | "contact"
  | "social"
  | "divider"
  | "cta"
  | "disclaimer"
  | "spacer";

export interface Block {
  id: string;
  type: BlockType;
  visible: boolean;
  settings: Record<string, unknown>;
}

export interface BlockConfig {
  type: BlockType;
  label: string;
  icon: string;
  description: string;
  defaultSettings: Record<string, unknown>;
  proOnly: boolean;
}

// ---------------------------------------------------------------------------
// Block configs
// ---------------------------------------------------------------------------

export const BLOCK_CONFIGS: Record<BlockType, BlockConfig> = {
  photo: {
    type: "photo",
    label: "Photo",
    icon: "🖼️",
    description: "Profile photo or company logo",
    defaultSettings: {
      shape: "circle",
      size: 80,
      position: "left",
      borderWidth: 0,
      borderColor: "#2563eb",
    },
    proOnly: false,
  },
  name: {
    type: "name",
    label: "Name & Title",
    icon: "👤",
    description: "Full name, job title, company, pronouns",
    defaultSettings: {
      nameSize: 16,
      nameWeight: "bold",
      nameColor: "#1a1a1a",
      nameLetterSpacing: "",
      showTitle: true,
      titleSize: 13,
      titleColor: "#555555",
      titleTransform: "none",
      titleFontStyle: "normal",
      showCompany: true,
      companyDisplay: "merged-title",
      companyColor: "#555555",
      showPronouns: true,
      pronounsStyle: "inline",
    },
    proOnly: false,
  },
  contact: {
    type: "contact",
    label: "Contact Info",
    icon: "📞",
    description: "Phone, email, website, address",
    defaultSettings: {
      layout: "stacked",
      fontSize: 12,
      linkColor: "#2563eb",
      textColor: "#555555",
      showIcons: false,
      fontFamily: "",
    },
    proOnly: false,
  },
  social: {
    type: "social",
    label: "Social Links",
    icon: "🔗",
    description: "Social media profile links",
    defaultSettings: {
      iconSize: 20,
      spacing: 8,
      subset: false,
    },
    proOnly: false,
  },
  divider: {
    type: "divider",
    label: "Divider",
    icon: "➖",
    description: "A horizontal separator line",
    defaultSettings: {
      color: "#2563eb",
      width: 100,
      style: "solid",
      thickness: 2,
    },
    proOnly: false,
  },
  cta: {
    type: "cta",
    label: "Button / CTA",
    icon: "🔘",
    description: "A call-to-action button (Calendly, custom link)",
    defaultSettings: {
      text: "Book a Meeting",
      url: "",
      bgColor: "#2563eb",
      textColor: "#ffffff",
      borderRadius: 4,
      fontSize: 13,
    },
    proOnly: true,
  },
  disclaimer: {
    type: "disclaimer",
    label: "Disclaimer",
    icon: "📋",
    description: "Legal disclaimer or confidentiality notice",
    defaultSettings: {
      text: "This email and any attachments are confidential.",
      fontSize: 10,
      color: "#94a3b8",
    },
    proOnly: true,
  },
  spacer: {
    type: "spacer",
    label: "Spacer",
    icon: "↕️",
    description: "Empty vertical space between blocks",
    defaultSettings: {
      height: 8,
    },
    proOnly: false,
  },
};

// ---------------------------------------------------------------------------
// Default block arrangement
// ---------------------------------------------------------------------------

function makeBlock(type: BlockType, overrides?: Partial<Block> & { settings?: Record<string, unknown> }): Block {
  return {
    id: crypto.randomUUID(),
    type,
    visible: true,
    settings: { ...BLOCK_CONFIGS[type].defaultSettings, ...(overrides?.settings ?? {}) },
    ...(overrides ? { ...overrides, settings: { ...BLOCK_CONFIGS[type].defaultSettings, ...(overrides.settings ?? {}) } } : {}),
  };
}

export function getDefaultBlocks(): Block[] {
  return [
    makeBlock("name"),
    makeBlock("divider"),
    makeBlock("contact"),
    makeBlock("social"),
  ];
}

// ---------------------------------------------------------------------------
// HTML escape helpers
// ---------------------------------------------------------------------------

function esc(text: string): string {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeStr(val: unknown, fallback = ""): string {
  return typeof val === "string" ? val : fallback;
}

function safeNum(val: unknown, fallback: number): number {
  return typeof val === "number" ? val : fallback;
}

function safeBool(val: unknown, fallback: boolean): boolean {
  return typeof val === "boolean" ? val : fallback;
}

// ---------------------------------------------------------------------------
// Social constants
// ---------------------------------------------------------------------------

export const SOCIAL_LABELS: Record<string, string> = {
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
  instagram: "Instagram",
  facebook: "Facebook",
  github: "GitHub",
  youtube: "YouTube",
};

export const SOCIAL_ICON_URLS: Record<string, string> = {
  linkedin: "https://neatstamp.com/icons/linkedin.svg",
  twitter: "https://neatstamp.com/icons/twitter.svg",
  instagram: "https://neatstamp.com/icons/instagram.svg",
  facebook: "https://neatstamp.com/icons/facebook.svg",
  github: "https://neatstamp.com/icons/github.svg",
  youtube: "https://neatstamp.com/icons/youtube.svg",
};

export const SOCIAL_FIELDS: (keyof SignatureData)[] = [
  "linkedin", "twitter", "instagram", "facebook", "github", "youtube",
];

// ---------------------------------------------------------------------------
// getPresetForTemplate — returns fully-configured blocks + wrapperSettings
// ---------------------------------------------------------------------------

export function getPresetForTemplate(
  template: TemplateName,
  data: SignatureData
): { blocks: Block[]; wrapperSettings: WrapperSettings } {
  const pc = data.primaryColor || "#2563eb";
  const ac = data.accentColor || "#f59e0b";

  const defaultWrapper: WrapperSettings = { ...DEFAULT_WRAPPER_SETTINGS };

  switch (template) {

    // -----------------------------------------------------------------------
    case "minimal":
      return {
        wrapperSettings: { ...defaultWrapper },
        blocks: [
          makeBlock("photo", { settings: { size: 80, shape: "circle", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 16, nameWeight: "bold", nameColor: "#1a1a1a",
            showTitle: true, titleSize: 13, titleColor: "#555555", titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "merged-title", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("divider", { settings: { style: "solid", color: pc, thickness: 2, width: 100 } }),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "modern":
      return {
        wrapperSettings: { ...defaultWrapper, borderLeft: `3px solid ${pc}` },
        blocks: [
          makeBlock("photo", { settings: { size: 80, shape: "rounded", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 18, nameWeight: "bold", nameColor: pc,
            showTitle: true, titleSize: 13, titleColor: ac, titleTransform: "uppercase", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("contact", { settings: { layout: "partial-inline", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "corporate":
      return {
        wrapperSettings: { ...defaultWrapper, borderTop: `3px solid ${pc}` },
        blocks: [
          makeBlock("photo", { settings: { size: 70, shape: "near-square", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 17, nameWeight: "bold", nameColor: "#1a1a1a",
            showTitle: true, titleSize: 13, titleColor: pc, titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate-bold", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "separate",
          }}),
          makeBlock("contact", { settings: { layout: "stacked-labeled", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "creative":
      return {
        wrapperSettings: { ...defaultWrapper, borderLeft: `2px dashed ${ac}` },
        blocks: [
          makeBlock("photo", { settings: { size: 90, shape: "circle", position: "left", borderWidth: 3, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 20, nameWeight: "bold", nameColor: pc,
            showTitle: true, titleSize: 14, titleColor: "#555555", titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate-uppercase", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("divider", { settings: { style: "dashed", color: ac, thickness: 2, width: 100 } }),
          makeBlock("contact", { settings: { layout: "stacked-emoji", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
          makeBlock("cta", { settings: { text: "Book a Meeting", url: "", bgColor: ac, textColor: "#ffffff", borderRadius: 4, fontSize: 13 } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "bold":
      return {
        wrapperSettings: { ...defaultWrapper, backgroundColor: pc, backgroundRadius: 8, backgroundPadding: 16, textOnDark: true },
        blocks: [
          makeBlock("photo", { settings: { size: 80, shape: "rounded", position: "left", borderWidth: 2, borderColor: "rgba(255,255,255,0.3)" } }),
          makeBlock("name", { settings: {
            nameSize: 20, nameWeight: "bold", nameColor: "#ffffff",
            showTitle: true, titleSize: 13, titleColor: "rgba(255,255,255,0.85)", titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "merged-title", companyColor: "rgba(255,255,255,0.6)",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: "#ffffff", textColor: "rgba(255,255,255,0.85)", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
          makeBlock("cta", { settings: { text: "Book a Meeting", url: "", bgColor: "#ffffff", textColor: pc, borderRadius: 4, fontSize: 13 } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "elegant":
      return {
        wrapperSettings: { ...defaultWrapper, fontFamily: "Georgia,'Times New Roman',serif" },
        blocks: [
          makeBlock("photo", { settings: { size: 75, shape: "circle", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 18, nameWeight: "bold", nameColor: "#1a1a1a", nameLetterSpacing: "0.5px",
            showTitle: true, titleSize: 13, titleColor: pc, titleTransform: "none", titleFontStyle: "italic",
            showCompany: true, companyDisplay: "separate-uppercase", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "italic-separate",
          }}),
          makeBlock("divider", { settings: { style: "decorative", color: pc, thickness: 2, width: 100 } }),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "Arial,Helvetica,sans-serif" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "startup":
      return {
        wrapperSettings: { ...defaultWrapper },
        blocks: [
          makeBlock("photo", { settings: { size: 48, shape: "circle", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 16, nameWeight: "bold", nameColor: "#1a1a1a",
            showTitle: true, titleSize: 13, titleColor: pc, titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "merged-at", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("divider", { settings: { style: "thin-grey", color: "#eeeeee", thickness: 1, width: 100 } }),
          makeBlock("contact", { settings: { layout: "inline-pipes", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
          makeBlock("cta", { settings: { text: "Book a Meeting", url: "", bgColor: pc, textColor: "#ffffff", borderRadius: 20, fontSize: 13 } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "compact":
      return {
        wrapperSettings: { ...defaultWrapper, baseFontSize: 13 },
        blocks: [
          makeBlock("name", { settings: {
            nameSize: 13, nameWeight: "bold", nameColor: "#1a1a1a",
            showTitle: true, titleSize: 12, titleColor: "#555555", titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "inline-name", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("contact", { settings: { layout: "inline-middot", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: true } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "executive":
      return {
        wrapperSettings: { ...defaultWrapper, headerBackground: "#1e293b", borderLeft: `3px solid ${pc}` },
        blocks: [
          makeBlock("photo", { settings: { size: 85, shape: "rounded", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 20, nameWeight: "bold", nameColor: "#ffffff",
            showTitle: true, titleSize: 13, titleColor: ac, titleTransform: "uppercase", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate-uppercase", companyColor: "rgba(255,255,255,0.6)",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "gradient":
      return {
        wrapperSettings: { ...defaultWrapper, borderLeft: `8px solid ${pc}` },
        blocks: [
          makeBlock("photo", { settings: { size: 75, shape: "circle", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 18, nameWeight: "bold", nameColor: pc,
            showTitle: true, titleSize: 13, titleColor: ac, titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("contact", { settings: { layout: "inline-pipes", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "developer":
      return {
        wrapperSettings: { ...defaultWrapper, fontFamily: "'Courier New',Courier,monospace" },
        blocks: [
          makeBlock("photo", { settings: { size: 70, shape: "rounded", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 16, nameWeight: "bold", nameColor: pc,
            showTitle: true, titleSize: 13, titleColor: "#555555", titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("divider", { settings: { style: "solid", color: "#eeeeee", thickness: 1, width: 100 } }),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "'Courier New',Courier,monospace" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "sales":
      return {
        wrapperSettings: { ...defaultWrapper },
        blocks: [
          makeBlock("photo", { settings: { size: 80, shape: "circle", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 18, nameWeight: "bold", nameColor: "#1a1a1a",
            showTitle: true, titleSize: 13, titleColor: "#555555", titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("divider", { settings: { style: "solid", color: pc, thickness: 2, width: 100 } }),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
          makeBlock("cta", { settings: { text: "Book a Meeting", url: "", bgColor: "#16a34a", textColor: "#ffffff", borderRadius: 4, fontSize: 13 } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "medical":
      return {
        wrapperSettings: { ...defaultWrapper, borderTop: `3px solid ${pc}` },
        blocks: [
          makeBlock("photo", { settings: { size: 75, shape: "circle", position: "left", borderWidth: 2, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 17, nameWeight: "bold", nameColor: "#1a1a1a",
            showTitle: true, titleSize: 13, titleColor: pc, titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("divider", { settings: { style: "solid", color: pc, thickness: 2, width: 100 } }),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "legal":
      return {
        wrapperSettings: { ...defaultWrapper, fontFamily: "Georgia,'Times New Roman',serif" },
        blocks: [
          makeBlock("photo", { settings: { size: 70, shape: "near-square", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 16, nameWeight: "bold", nameColor: "#1a1a1a", nameLetterSpacing: "2px",
            showTitle: true, titleSize: 13, titleColor: "#555555", titleTransform: "none", titleFontStyle: "italic",
            showCompany: true, companyDisplay: "separate-bold", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "separate",
          }}),
          makeBlock("divider", { settings: { style: "solid", color: "#555555", thickness: 2, width: 100 } }),
          makeBlock("contact", { settings: { layout: "stacked-labeled", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "Arial,Helvetica,sans-serif" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "academic":
      return {
        wrapperSettings: { ...defaultWrapper },
        blocks: [
          makeBlock("photo", { settings: { size: 75, shape: "circle", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 17, nameWeight: "bold", nameColor: "#1a1a1a",
            showTitle: true, titleSize: 13, titleColor: pc, titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate-bold", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("divider", { settings: { style: "thin-grey", color: "#eeeeee", thickness: 1, width: 100 } }),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "realtor":
      return {
        wrapperSettings: { ...defaultWrapper },
        blocks: [
          makeBlock("photo", { settings: { size: 100, shape: "rounded", position: "left", borderWidth: 3, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 22, nameWeight: "bold", nameColor: "#1a1a1a",
            showTitle: true, titleSize: 13, titleColor: "#555555", titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("divider", { settings: { style: "solid", color: pc, thickness: 2, width: 100 } }),
          makeBlock("contact", { settings: { layout: "partial-inline", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "influencer":
      return {
        wrapperSettings: { ...defaultWrapper },
        blocks: [
          makeBlock("photo", { settings: { size: 85, shape: "circle", position: "left", borderWidth: 3, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 20, nameWeight: "bold", nameColor: pc,
            showTitle: true, titleSize: 13, titleColor: "#555555", titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 24, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "photographer":
      return {
        wrapperSettings: { ...defaultWrapper },
        blocks: [
          makeBlock("photo", { settings: { size: 60, shape: "near-square", position: "left", borderWidth: 0, borderColor: pc } }),
          makeBlock("name", { settings: {
            nameSize: 18, nameWeight: "300", nameColor: "#1a1a1a",
            showTitle: true, titleSize: 13, titleColor: "#555555", titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("divider", { settings: { style: "thin-grey", color: "#eeeeee", thickness: 1, width: 100 } }),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "dark":
      return {
        wrapperSettings: { ...defaultWrapper, backgroundColor: "#111827", backgroundRadius: 8, backgroundPadding: 16, textOnDark: true },
        blocks: [
          makeBlock("photo", { settings: { size: 76, shape: "rounded", position: "left", borderWidth: 2, borderColor: "#ffffff" } }),
          makeBlock("name", { settings: {
            nameSize: 18, nameWeight: "bold", nameColor: "#ffffff",
            showTitle: true, titleSize: 13, titleColor: ac, titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "separate", companyColor: "rgba(255,255,255,0.5)",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("contact", { settings: { layout: "stacked", fontSize: 12, linkColor: pc, textColor: "rgba(255,255,255,0.7)", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: false } }),
          makeBlock("cta", { settings: { text: "Book a Meeting", url: "", bgColor: "#ffffff", textColor: "#111827", borderRadius: 4, fontSize: 13 } }),
        ],
      };

    // -----------------------------------------------------------------------
    case "simple":
      return {
        wrapperSettings: { ...defaultWrapper, baseFontSize: 13 },
        blocks: [
          makeBlock("name", { settings: {
            nameSize: 14, nameWeight: "bold", nameColor: "#1a1a1a",
            showTitle: true, titleSize: 12, titleColor: "#555555", titleTransform: "none", titleFontStyle: "normal",
            showCompany: true, companyDisplay: "inline-name", companyColor: "#555555",
            showPronouns: true, pronounsStyle: "inline",
          }}),
          makeBlock("contact", { settings: { layout: "inline-middot", fontSize: 12, linkColor: pc, textColor: "#555555", showIcons: false, fontFamily: "" } }),
          makeBlock("social", { settings: { iconSize: 20, spacing: 8, subset: true } }),
        ],
      };

    // -----------------------------------------------------------------------
    default:
      return {
        wrapperSettings: { ...defaultWrapper },
        blocks: getDefaultBlocks(),
      };
  }
}

// ---------------------------------------------------------------------------
// Per-block HTML renderers — read ALL settings from block.settings
// ---------------------------------------------------------------------------

function renderPhoto(block: Block, data: SignatureData): string {
  if (!data.photoUrl) return "";

  const s = block.settings;
  const size = safeNum(s.size, 80);
  const shape = safeStr(s.shape, "circle");
  const position = safeStr(s.position, "left");
  const borderWidth = safeNum(s.borderWidth, 0);
  const borderColor = safeStr(s.borderColor, "#2563eb");

  if (shape === "none") return "";

  const borderRadius =
    shape === "circle" ? "50%" :
    shape === "rounded" ? "8px" :
    shape === "near-square" ? "4px" : "0px";

  const borderStyle = borderWidth > 0 ? `border:${borderWidth}px solid ${borderColor};` : "";
  const src = esc(data.photoUrl);
  const align = position === "center" ? "center" : "left";

  return `<tr><td align="${align}" style="padding-bottom:8px;">
  <img src="${src}" alt="${esc(data.fullName)}" width="${size}" height="${size}" style="width:${size}px;height:${size}px;border-radius:${borderRadius};object-fit:cover;display:block;${borderStyle}" />
</td></tr>`;
}

function renderName(block: Block, data: SignatureData, wrapperSettings: WrapperSettings): string {
  const s = block.settings;
  const nameSize = safeNum(s.nameSize, 16);
  const nameWeight = safeStr(s.nameWeight, "bold");
  const nameColor = safeStr(s.nameColor, "#1a1a1a");
  const nameLetterSpacing = safeStr(s.nameLetterSpacing, "");
  const showTitle = safeBool(s.showTitle, true);
  const titleSize = safeNum(s.titleSize, 13);
  const titleColor = safeStr(s.titleColor, "#555555");
  const titleTransform = safeStr(s.titleTransform, "none");
  const titleFontStyle = safeStr(s.titleFontStyle, "normal");
  const showCompany = safeBool(s.showCompany, true);
  const companyDisplay = safeStr(s.companyDisplay, "merged-title");
  const companyColor = safeStr(s.companyColor, "#555555");
  const showPronouns = safeBool(s.showPronouns, true);
  const pronounsStyle = safeStr(s.pronounsStyle, "inline");

  const fontFamily = wrapperSettings.fontFamily || "Arial,Helvetica,sans-serif";
  const letterSp = nameLetterSpacing ? `letter-spacing:${nameLetterSpacing};` : "";

  // Pronouns
  let pronounRow = "";
  if (showPronouns && data.pronouns) {
    if (pronounsStyle === "italic-separate") {
      pronounRow = `<tr><td style="font-size:11px;color:#888;font-style:italic;">${esc(data.pronouns)}</td></tr>`;
    } else if (pronounsStyle === "separate") {
      pronounRow = `<tr><td style="font-size:11px;color:#888;">${esc(data.pronouns)}</td></tr>`;
    }
  }

  const pronounInline =
    pronounsStyle === "inline" && showPronouns && data.pronouns
      ? ` <span style="font-size:12px;font-weight:normal;color:#888;">(${esc(data.pronouns)})</span>`
      : "";

  // Title + company rows
  let titleRows = "";
  if (companyDisplay === "merged-title") {
    if (showTitle && data.jobTitle) {
      const companyPart = showCompany && data.company ? ` at ${esc(data.company)}` : "";
      const transform = titleTransform === "uppercase" ? "text-transform:uppercase;letter-spacing:0.5px;" : "";
      const fStyle = titleFontStyle === "italic" ? "font-style:italic;" : "";
      titleRows = `<tr><td style="font-size:${titleSize}px;color:${titleColor};padding-top:2px;${transform}${fStyle}">${esc(data.jobTitle)}${companyPart}</td></tr>`;
    }
  } else if (companyDisplay === "merged-at") {
    const combined = [data.jobTitle, data.company].filter(Boolean);
    if (combined.length > 0 && (showTitle || showCompany)) {
      const text = showTitle && data.jobTitle && showCompany && data.company
        ? `${esc(data.jobTitle)} @ ${esc(data.company)}`
        : esc(combined[0]);
      titleRows = `<tr><td style="font-size:12px;color:${titleColor};padding-top:2px;">${text}</td></tr>`;
    }
  } else if (companyDisplay === "inline-name") {
    // Compact: handled in name row as suffix
  } else {
    // separate, separate-bold, separate-uppercase
    if (showTitle && data.jobTitle) {
      const transform = titleTransform === "uppercase" ? "text-transform:uppercase;letter-spacing:0.5px;" : "";
      const fStyle = titleFontStyle === "italic" ? "font-style:italic;" : "";
      const weight = companyDisplay === "separate-bold" ? "font-weight:600;" : "";
      titleRows += `<tr><td style="font-size:${titleSize}px;color:${titleColor};padding-top:2px;${transform}${fStyle}${weight}">${esc(data.jobTitle)}</td></tr>`;
    }
    if (showCompany && data.company) {
      if (companyDisplay === "separate-bold") {
        titleRows += `<tr><td style="font-size:13px;color:${companyColor};font-weight:bold;padding-top:1px;">${esc(data.company)}</td></tr>`;
      } else if (companyDisplay === "separate-uppercase") {
        titleRows += `<tr><td style="font-size:12px;color:${companyColor};letter-spacing:1px;text-transform:uppercase;padding-top:2px;">${esc(data.company)}</td></tr>`;
      } else {
        titleRows += `<tr><td style="font-size:13px;color:${companyColor};padding-top:1px;">${esc(data.company)}</td></tr>`;
      }
    }
  }

  // Build name row
  let nameHtml: string;
  if (companyDisplay === "inline-name") {
    const inlineParts: string[] = [];
    if (showTitle && data.jobTitle) inlineParts.push(`<span style="color:${titleColor};">${esc(data.jobTitle)}</span>`);
    if (showCompany && data.company) inlineParts.push(esc(data.company));
    const suffix = inlineParts.length > 0 ? " | " + inlineParts.join(" | ") : "";
    nameHtml = `<tr><td style="font-size:${nameSize}px;font-weight:${nameWeight};color:${nameColor};font-family:${fontFamily};${letterSp}"><strong style="color:${nameColor};">${esc(data.fullName)}</strong>${pronounInline}${suffix}</td></tr>`;
  } else {
    nameHtml = `<tr><td style="font-size:${nameSize}px;font-weight:${nameWeight};color:${nameColor};font-family:${fontFamily};${letterSp}">${esc(data.fullName)}${pronounInline}</td></tr>`;
  }

  return `<tr><td style="padding-bottom:4px;">
  <table cellpadding="0" cellspacing="0" border="0">
    ${nameHtml}
    ${pronounRow}
    ${titleRows}
  </table>
</td></tr>`;
}

function renderContact(block: Block, data: SignatureData, wrapperSettings: WrapperSettings): string {
  const s = block.settings;
  const layout = safeStr(s.layout, "stacked");
  const linkColor = safeStr(s.linkColor, "#2563eb");
  const textColor = safeStr(s.textColor, "#555555");
  const showIcons = safeBool(s.showIcons, false);
  const fontFamily = safeStr(s.fontFamily, "") || wrapperSettings.fontFamily || "Arial,Helvetica,sans-serif";

  const fields: { key: keyof SignatureData; icon: string; label: string; href: (v: string) => string }[] = [
    { key: "email", icon: "✉", label: "E", href: (v) => `mailto:${esc(v)}` },
    { key: "phone", icon: "☎", label: "T", href: (v) => `tel:${esc(v.replace(/\s/g, ""))}` },
    { key: "website", icon: "🌐", label: "W", href: (v) => `https://${esc(v.replace(/^https?:\/\//, ""))}` },
    { key: "address", icon: "📍", label: "A", href: () => "" },
  ];

  const items = fields.filter((f) => !!data[f.key]);
  if (items.length === 0) return "";

  // Inline layouts
  if (layout === "inline-pipes" || layout === "inline-middot" || layout === "partial-inline") {
    const separator = layout === "inline-middot"
      ? ' <span style="color:#ccc;">&middot;</span> '
      : '<span style="color:#888;margin:0 4px;">|</span>';

    let inlineItems = items;
    let extraRows = "";

    if (layout === "partial-inline") {
      const inlineKeys = ["email", "phone"];
      inlineItems = items.filter((f) => inlineKeys.includes(f.key as string));
      const stackedItems = items.filter((f) => !inlineKeys.includes(f.key as string));
      extraRows = stackedItems.map((f) => {
        const val = String(data[f.key]);
        const display = f.key === "website" ? val.replace(/^https?:\/\//, "") : val;
        const href = f.href(val);
        if (href) {
          return `<tr><td style="padding-top:2px;font-size:12px;font-family:${fontFamily};"><a href="${href}" style="color:${linkColor};text-decoration:none;">${esc(display)}</a></td></tr>`;
        }
        return `<tr><td style="padding-top:2px;font-size:11px;color:${textColor};font-family:${fontFamily};">${esc(display)}</td></tr>`;
      }).join("\n");
    }

    const parts = inlineItems.map((f) => {
      const val = String(data[f.key]);
      const display = f.key === "website" ? val.replace(/^https?:\/\//, "") : val;
      const href = f.href(val);
      if (href) {
        return `<a href="${href}" style="color:${linkColor};text-decoration:none;font-size:12px;font-family:${fontFamily};">${esc(display)}</a>`;
      }
      return `<span style="font-size:12px;color:${textColor};font-family:${fontFamily};">${esc(display)}</span>`;
    });

    return `<tr><td style="padding-bottom:4px;">
  <table cellpadding="0" cellspacing="0" border="0">
    <tr><td style="font-size:12px;">${parts.join(separator)}</td></tr>
    ${extraRows}
  </table>
</td></tr>`;
  }

  // Stacked with labels
  if (layout === "stacked-labeled") {
    const rows = items.map((f) => {
      const val = String(data[f.key]);
      const display = f.key === "website" ? val.replace(/^https?:\/\//, "") : val;
      const href = f.href(val);
      const labelHtml = `<strong style="color:#888;">${f.label}</strong>&nbsp;&nbsp;`;
      if (href) {
        return `<tr><td style="padding-bottom:2px;font-size:12px;font-family:${fontFamily};">${labelHtml}<a href="${href}" style="color:${f.key === "phone" ? textColor : linkColor};text-decoration:none;">${esc(display)}</a></td></tr>`;
      }
      return `<tr><td style="padding-bottom:2px;font-size:12px;color:${textColor};font-family:${fontFamily};">${labelHtml}${esc(display)}</td></tr>`;
    });

    return `<tr><td style="padding-bottom:4px;">
  <table cellpadding="0" cellspacing="0" border="0">
    ${rows.join("\n    ")}
  </table>
</td></tr>`;
  }

  // Stacked with emoji icons
  if (layout === "stacked-emoji") {
    const rows = items.map((f) => {
      const val = String(data[f.key]);
      const display = f.key === "website" ? val.replace(/^https?:\/\//, "") : val;
      const href = f.href(val);
      if (href) {
        return `<tr><td style="padding-bottom:3px;font-size:12px;font-family:${fontFamily};"><a href="${href}" style="color:${linkColor};text-decoration:none;">${f.icon} ${esc(display)}</a></td></tr>`;
      }
      return `<tr><td style="padding-bottom:3px;font-size:12px;color:${textColor};font-family:${fontFamily};">${f.icon} ${esc(display)}</td></tr>`;
    });

    return `<tr><td style="padding-bottom:4px;">
  <table cellpadding="0" cellspacing="0" border="0">
    ${rows.join("\n    ")}
  </table>
</td></tr>`;
  }

  // Default: stacked
  const rows = items.map((f) => {
    const val = String(data[f.key]);
    const display = f.key === "website" ? val.replace(/^https?:\/\//, "") : val;
    const href = f.href(val);
    const iconHtml = showIcons ? `<span style="margin-right:4px;">${f.icon}</span>` : "";
    if (href) {
      return `<tr><td style="padding-bottom:2px;font-size:12px;font-family:${fontFamily};">${iconHtml}<a href="${href}" style="color:${linkColor};text-decoration:none;">${esc(display)}</a></td></tr>`;
    }
    return `<tr><td style="padding-bottom:2px;font-size:12px;color:${textColor};font-family:${fontFamily};">${iconHtml}${esc(display)}</td></tr>`;
  });

  return `<tr><td style="padding-bottom:4px;">
  <table cellpadding="0" cellspacing="0" border="0">
    ${rows.join("\n    ")}
  </table>
</td></tr>`;
}

function renderSocial(block: Block, data: SignatureData, plan: "free" | "pro" | "team"): string {
  const s = block.settings;
  const iconSize = safeNum(s.iconSize, 20);
  const spacing = safeNum(s.spacing, 8);
  const subset = safeBool(s.subset, false);

  const isPro = plan === "pro" || plan === "team";
  const maxLinks = isPro ? 99 : 2;

  let fields: (keyof SignatureData)[] = [...SOCIAL_FIELDS];
  if (subset) {
    fields = ["linkedin", "twitter", "github"] as (keyof SignatureData)[];
  }

  const links = fields
    .filter((f) => !!data[f])
    .slice(0, maxLinks);

  if (links.length === 0) return "";

  const parts = links.map((f) => {
    const url = String(data[f]);
    const href = url.startsWith("http") ? url : `https://${url}`;
    const label = SOCIAL_LABELS[f] ?? String(f);
    const iconUrl = SOCIAL_ICON_URLS[f];

    return `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-right:${spacing}px;text-decoration:none;" title="${esc(label)}"><img src="${iconUrl}" alt="${esc(label)}" width="${iconSize}" height="${iconSize}" style="width:${iconSize}px;height:${iconSize}px;display:block;border:0;" /></a>`;
  });

  return `<tr><td style="padding-bottom:4px;">${parts.join("")}</td></tr>`;
}

function renderDivider(block: Block): string {
  const s = block.settings;
  const style = safeStr(s.style, "solid");
  const color = safeStr(s.color, "#2563eb");
  const thickness = safeNum(s.thickness, 2);
  const width = safeNum(s.width, 100);

  if (style === "decorative") {
    return `<tr><td style="padding-top:4px;padding-bottom:4px;">
  <table cellpadding="0" cellspacing="0" border="0"><tr><td style="width:40px;height:1px;background:${color};"></td><td style="width:8px;"></td><td style="width:8px;height:1px;background:${color};"></td></tr></table>
</td></tr>`;
  }

  if (style === "thin-grey") {
    return `<tr><td style="padding-top:4px;padding-bottom:4px;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr><td style="font-size:0;line-height:0;border-top:1px solid #eeeeee;">&nbsp;</td></tr>
  </table>
</td></tr>`;
  }

  const lineStyle = style === "dashed" ? "dashed" : style === "dotted" ? "dotted" : "solid";
  return `<tr><td style="padding-top:4px;padding-bottom:4px;">
  <table cellpadding="0" cellspacing="0" border="0" width="${width}%">
    <tr><td style="font-size:0;line-height:0;border-top:${thickness}px ${lineStyle} ${color};">&nbsp;</td></tr>
  </table>
</td></tr>`;
}

function renderCta(block: Block): string {
  const s = block.settings;
  const text = safeStr(s.text, "Book a Meeting");
  const url = safeStr(s.url, "");
  const bgColor = safeStr(s.bgColor, "#2563eb");
  const textColor = safeStr(s.textColor, "#ffffff");
  const borderRadius = safeNum(s.borderRadius, 4);
  const fontSize = safeNum(s.fontSize, 13);

  if (!url) return "";
  const href = url.startsWith("http") ? url : `https://${url}`;

  return `<tr><td style="padding-bottom:4px;">
  <a href="${esc(href)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:7px 18px;background-color:${bgColor};color:${textColor};text-decoration:none;font-size:${fontSize}px;font-family:Arial,Helvetica,sans-serif;border-radius:${borderRadius}px;font-weight:bold;">${esc(text)}</a>
</td></tr>`;
}

function renderDisclaimer(block: Block): string {
  const s = block.settings;
  const text = safeStr(s.text, "");
  const fontSize = safeNum(s.fontSize, 10);
  const color = safeStr(s.color, "#94a3b8");

  if (!text) return "";

  return `<tr><td style="padding-top:4px;font-size:${fontSize}px;color:${color};font-family:Arial,Helvetica,sans-serif;line-height:1.4;">${esc(text)}</td></tr>`;
}

function renderSpacer(block: Block): string {
  const s = block.settings;
  const height = safeNum(s.height, 8);

  return `<tr><td style="font-size:0;line-height:0;height:${height}px;">&nbsp;</td></tr>`;
}

// ---------------------------------------------------------------------------
// Main HTML generator
// ---------------------------------------------------------------------------

export function generateHtmlFromBlocks(
  blocks: Block[],
  data: SignatureData,
  wrapperSettings: WrapperSettings,
  options?: GenerateOptions
): string {
  const plan = options?.plan ?? "free";
  const isPro = plan === "pro" || plan === "team";

  const ws = wrapperSettings ?? DEFAULT_WRAPPER_SETTINGS;
  const fontFamily = ws.fontFamily || "Arial,Helvetica,sans-serif";
  const baseFontSize = ws.baseFontSize || 14;
  const textOnDark = ws.textOnDark ?? false;
  const baseTextColor = textOnDark ? "#ffffff" : "#333333";

  const visibleBlocks = blocks.filter((b) => b.visible);

  const photoBlock = visibleBlocks.find((b) => b.type === "photo");
  const photoPosition = photoBlock ? safeStr(photoBlock.settings.position, "left") : "";
  const photoShape = photoBlock ? safeStr(photoBlock.settings.shape, "circle") : "";
  const photoIsSideBySide =
    photoBlock &&
    (photoPosition === "left" || photoPosition === "right") &&
    !!data.photoUrl &&
    photoShape !== "none";

  // Executive split: dark header row + light content row
  if (photoIsSideBySide && ws.headerBackground) {
    const size = safeNum(photoBlock!.settings.size, 80);
    const shape = safeStr(photoBlock!.settings.shape, "circle");
    const borderWidth = safeNum(photoBlock!.settings.borderWidth, 0);
    const borderColor = safeStr(photoBlock!.settings.borderColor, "#ffffff");
    const borderRadius =
      shape === "circle" ? "50%" :
      shape === "rounded" ? "8px" :
      shape === "near-square" ? "4px" : "0px";
    const borderStyle = borderWidth > 0 ? `border:${borderWidth}px solid ${borderColor};` : "";
    const src = esc(data.photoUrl);

    const nameBlock = visibleBlocks.find((b) => b.type === "name");
    const otherBlocks = visibleBlocks.filter((b) => b.type !== "photo" && b.type !== "name");

    const nameHtml = nameBlock ? renderName(nameBlock, data, { ...ws, fontFamily }) : "";

    const otherRows = otherBlocks
      .map((b) => {
        switch (b.type) {
          case "contact": return renderContact(b, data, ws);
          case "social": return renderSocial(b, data, plan);
          case "divider": return renderDivider(b);
          case "cta": return isPro ? renderCta(b) : "";
          case "disclaimer": return isPro ? renderDisclaimer(b) : "";
          case "spacer": return renderSpacer(b);
          default: return "";
        }
      })
      .filter(Boolean)
      .join("\n");

    const photoTd = `<td style="vertical-align:middle;padding-right:14px;width:${size}px;">
        <img src="${src}" alt="${esc(data.fullName)}" width="${size}" height="${size}" style="width:${size}px;height:${size}px;border-radius:${borderRadius};object-fit:cover;display:block;${borderStyle}" />
      </td>`;
    const nameTd = `<td style="vertical-align:middle;">
        <table cellpadding="0" cellspacing="0" border="0" style="font-family:${fontFamily};font-size:${baseFontSize}px;color:#ffffff;">
          ${nameHtml}
        </table>
      </td>`;

    const headerRow = `<tr><td style="background-color:${ws.headerBackground};padding:14px 18px;">
        <table cellpadding="0" cellspacing="0" border="0"><tr>${photoTd}${nameTd}</tr></table>
      </td></tr>`;

    const contentBorderStyle = ws.borderLeft ? `border-left:${ws.borderLeft};padding-left:14px;` : "";
    const contactRow = otherRows ? `<tr><td style="padding:12px 18px;${contentBorderStyle}">
        <table cellpadding="0" cellspacing="0" border="0" style="font-family:${fontFamily};font-size:${baseFontSize}px;color:#333;">
          ${otherRows}
        </table>
      </td></tr>` : "";

    const branding = !isPro
      ? `<tr><td style="padding-top:8px;"><a href="https://neatstamp.com?ref=sig" target="_blank" rel="noopener noreferrer" style="color:#94a3b8;font-size:10px;font-family:Arial,Helvetica,sans-serif;text-decoration:none;">Made with NeatStamp</a></td></tr>`
      : "";

    const pixel =
      !isPro && options?.signatureId
        ? `<tr><td><img src="https://neatstamp.com/api/images/${esc(options.signatureId)}/track" width="1" height="1" style="width:1px;height:1px;display:block;" alt="" /></td></tr>`
        : "";

    const outerStyles = buildOuterStyles(ws, fontFamily, baseFontSize, baseTextColor);

    return `<table cellpadding="0" cellspacing="0" border="0" style="${outerStyles}">
${headerRow}
${contactRow}
${branding}
${pixel}
</table>`;
  }

  // Standard side-by-side (photo left/right, no dark header)
  if (photoIsSideBySide && photoBlock) {
    const size = safeNum(photoBlock.settings.size, 80);
    const shape = safeStr(photoBlock.settings.shape, "circle");
    const borderWidth = safeNum(photoBlock.settings.borderWidth, 0);
    const borderColor = safeStr(photoBlock.settings.borderColor, "#2563eb");
    const borderRadius =
      shape === "circle" ? "50%" :
      shape === "rounded" ? "8px" :
      shape === "near-square" ? "4px" : "0px";
    const borderStyle = borderWidth > 0 ? `border:${borderWidth}px solid ${borderColor};` : "";
    const src = esc(data.photoUrl);

    const contentBlocks = visibleBlocks.filter((b) => b.type !== "photo");
    const contentRows = contentBlocks
      .map((b) => {
        switch (b.type) {
          case "name": return renderName(b, data, ws);
          case "contact": return renderContact(b, data, ws);
          case "social": return renderSocial(b, data, plan);
          case "divider": return renderDivider(b);
          case "cta": return isPro ? renderCta(b) : "";
          case "disclaimer": return isPro ? renderDisclaimer(b) : "";
          case "spacer": return renderSpacer(b);
          default: return "";
        }
      })
      .filter(Boolean)
      .join("\n");

    const photoTd = `<td style="vertical-align:top;padding-${photoPosition === "left" ? "right" : "left"}:14px;width:${size}px;">
        <img src="${src}" alt="${esc(data.fullName)}" width="${size}" height="${size}" style="width:${size}px;height:${size}px;border-radius:${borderRadius};object-fit:cover;display:block;${borderStyle}" />
      </td>`;

    const contentBorderStyle = ws.borderLeft ? `border-left:${ws.borderLeft};padding-left:14px;` : "";
    const contentTd = `<td style="vertical-align:top;${contentBorderStyle}">
        <table cellpadding="0" cellspacing="0" border="0" style="font-family:${fontFamily};font-size:${baseFontSize}px;color:${baseTextColor};">
          ${contentRows}
        </table>
      </td>`;

    const rows = `<tr>${photoPosition === "left" ? photoTd + contentTd : contentTd + photoTd}</tr>`;

    const branding = !isPro
      ? `<tr><td style="padding-top:8px;"><a href="https://neatstamp.com?ref=sig" target="_blank" rel="noopener noreferrer" style="color:${textOnDark ? "rgba(255,255,255,0.4)" : "#94a3b8"};font-size:10px;font-family:Arial,Helvetica,sans-serif;text-decoration:none;">Made with NeatStamp</a></td></tr>`
      : "";

    const pixel =
      !isPro && options?.signatureId
        ? `<tr><td><img src="https://neatstamp.com/api/images/${esc(options.signatureId)}/track" width="1" height="1" style="width:1px;height:1px;display:block;" alt="" /></td></tr>`
        : "";

    const outerStyles = buildOuterStyles(ws, fontFamily, baseFontSize, baseTextColor);

    return `<table cellpadding="0" cellspacing="0" border="0" style="${outerStyles}">
${rows}
${branding}
${pixel}
</table>`;
  }

  // Stacked layout (no side-by-side photo, or no photo)
  const contentRows = visibleBlocks
    .map((b) => {
      switch (b.type) {
        case "photo": return renderPhoto(b, data);
        case "name": return renderName(b, data, ws);
        case "contact": return renderContact(b, data, ws);
        case "social": return renderSocial(b, data, plan);
        case "divider": return renderDivider(b);
        case "cta": return isPro ? renderCta(b) : "";
        case "disclaimer": return isPro ? renderDisclaimer(b) : "";
        case "spacer": return renderSpacer(b);
        default: return "";
      }
    })
    .filter(Boolean)
    .join("\n");

  const branding = !isPro
    ? `<tr><td style="padding-top:8px;"><a href="https://neatstamp.com?ref=sig" target="_blank" rel="noopener noreferrer" style="color:${textOnDark ? "rgba(255,255,255,0.4)" : "#94a3b8"};font-size:10px;font-family:Arial,Helvetica,sans-serif;text-decoration:none;">Made with NeatStamp</a></td></tr>`
    : "";

  const pixel =
    !isPro && options?.signatureId
      ? `<tr><td><img src="https://neatstamp.com/api/images/${esc(options.signatureId)}/track" width="1" height="1" style="width:1px;height:1px;display:block;" alt="" /></td></tr>`
      : "";

  const outerStyles = buildOuterStyles(ws, fontFamily, baseFontSize, baseTextColor);

  return `<table cellpadding="0" cellspacing="0" border="0" style="${outerStyles}">
${contentRows}
${branding}
${pixel}
</table>`;
}

// ---------------------------------------------------------------------------
// Helper: build outer table style string from WrapperSettings
// ---------------------------------------------------------------------------

function buildOuterStyles(
  ws: WrapperSettings,
  fontFamily: string,
  baseFontSize: number,
  baseTextColor: string
): string {
  const styles: string[] = [
    `font-family:${fontFamily}`,
    `font-size:${baseFontSize}px`,
    `color:${baseTextColor}`,
  ];

  if (ws.borderTop) {
    styles.push(`border-top:${ws.borderTop}`, "padding-top:12px");
  }

  if (ws.backgroundColor && ws.backgroundColor !== "none") {
    styles.push(`background-color:${ws.backgroundColor}`);
    if (ws.backgroundRadius) styles.push(`border-radius:${ws.backgroundRadius}px`);
    if (ws.backgroundPadding) styles.push(`padding:${ws.backgroundPadding}px`);
  }

  return styles.join(";") + ";";
}
