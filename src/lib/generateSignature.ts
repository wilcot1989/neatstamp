import { SignatureData, TemplateName } from "./types";

export interface GenerateOptions {
  plan?: "free" | "pro" | "team";
  signatureId?: string;
  imageUrl?: string; // R2 hosted image URL for free user signatures
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const SOCIAL_ICON_URLS: Record<string, string> = {
  linkedin: "https://neatstamp.com/icons/linkedin.svg",
  twitter: "https://neatstamp.com/icons/twitter.svg",
  instagram: "https://neatstamp.com/icons/instagram.svg",
  facebook: "https://neatstamp.com/icons/facebook.svg",
  github: "https://neatstamp.com/icons/github.svg",
  youtube: "https://neatstamp.com/icons/youtube.svg",
};

const SOCIAL_LABELS: Record<string, string> = {
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
  instagram: "Instagram",
  facebook: "Facebook",
  github: "GitHub",
  youtube: "YouTube",
};

function socialLink(url: string, platform: string): string {
  if (!url) return "";
  const href = url.startsWith("http") ? url : `https://${url}`;
  const label = SOCIAL_LABELS[platform] || platform;
  const iconUrl = SOCIAL_ICON_URLS[platform] || "";
  return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-right:8px;text-decoration:none;" title="${escapeHtml(label)}"><img src="${iconUrl}" alt="${escapeHtml(label)}" width="20" height="20" style="width:20px;height:20px;display:block;border:0;" /></a>`;
}

function socialLinks(data: SignatureData): string {
  const links = [
    socialLink(data.linkedin, "linkedin"),
    socialLink(data.twitter, "twitter"),
    socialLink(data.instagram, "instagram"),
    socialLink(data.facebook, "facebook"),
    socialLink(data.github, "github"),
    socialLink(data.youtube, "youtube"),
  ]
    .filter(Boolean)
    .join("");

  if (!links) return "";
  return `<tr><td style="padding-top:8px;">${links}</td></tr>`;
}

function photoCell(
  data: SignatureData,
  size: number,
  borderRadius: string,
  options?: GenerateOptions
): string {
  if (!data.photoUrl) return "";

  // For free users with a signatureId, route photo through our CDN
  const isPro = options?.plan === "pro" || options?.plan === "team";
  let src = escapeHtml(data.photoUrl);
  if (!isPro && options?.signatureId && !data.photoUrl.startsWith("https://neatstamp.com")) {
    src = `https://neatstamp.com/api/images/${escapeHtml(options.signatureId)}/photo`;
  }

  return `<td style="vertical-align:top;padding-right:16px;">
    <img src="${src}" alt="${escapeHtml(data.fullName)}" width="${size}" height="${size}" style="width:${size}px;height:${size}px;border-radius:${borderRadius};object-fit:cover;display:block;" />
  </td>`;
}

function calendlyButton(data: SignatureData, color: string): string {
  if (!data.calendlyUrl) return "";
  const href = data.calendlyUrl.startsWith("http")
    ? data.calendlyUrl
    : `https://${data.calendlyUrl}`;
  return `<tr><td style="padding-top:10px;">
    <a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:6px 16px;background-color:${color};color:#ffffff;text-decoration:none;font-size:12px;font-family:Arial,sans-serif;border-radius:4px;font-weight:bold;">Book a Meeting</a>
  </td></tr>`;
}

function ctaBanner(data: SignatureData): string {
  if (!data.ctaBannerUrl) return "";
  const img = `<img src="${escapeHtml(data.ctaBannerUrl)}" alt="Banner" width="400" style="width:400px;max-width:100%;height:auto;display:block;border-radius:4px;" />`;
  if (data.ctaBannerLink) {
    const href = data.ctaBannerLink.startsWith("http")
      ? data.ctaBannerLink
      : `https://${data.ctaBannerLink}`;
    return `<tr><td style="padding-top:12px;"><a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${img}</a></td></tr>`;
  }
  return `<tr><td style="padding-top:12px;">${img}</td></tr>`;
}

function neatstampBranding(): string {
  return `<tr><td style="padding-top:10px;"><a href="https://neatstamp.com?ref=sig" target="_blank" rel="noopener noreferrer" style="color:#94a3b8;font-size:10px;font-family:Arial,sans-serif;text-decoration:none;">Made with NeatStamp</a></td></tr>`;
}

function trackingPixel(signatureId: string): string {
  return `<tr><td><img src="https://neatstamp.com/api/images/${escapeHtml(signatureId)}/track" width="1" height="1" style="width:1px;height:1px;display:block;" alt="" /></td></tr>`;
}

// ============================================================
// TEMPLATES
// ============================================================

function generateMinimal(data: SignatureData, options?: GenerateOptions): string {
  const c = data.primaryColor;
  const isPro = options?.plan === "pro" || options?.plan === "team";
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;">
  <tr>
    ${photoCell(data, 72, "50%", options)}
    <td style="vertical-align:top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="font-size:16px;font-weight:bold;color:#1a1a1a;">${escapeHtml(data.fullName)}${data.pronouns ? ` <span style="font-size:12px;font-weight:normal;color:#888;">(${escapeHtml(data.pronouns)})</span>` : ""}</td></tr>
        ${data.jobTitle ? `<tr><td style="font-size:13px;color:#555555;padding-top:2px;">${escapeHtml(data.jobTitle)}${data.company ? ` at ${escapeHtml(data.company)}` : ""}</td></tr>` : ""}
        <tr><td style="padding-top:8px;border-top:2px solid ${c};margin-top:8px;">
          <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px;color:#555555;">
            ${data.email ? `<tr><td style="padding-top:4px;"><a href="mailto:${escapeHtml(data.email)}" style="color:${c};text-decoration:none;">${escapeHtml(data.email)}</a></td></tr>` : ""}
            ${data.phone ? `<tr><td style="padding-top:2px;"><a href="tel:${escapeHtml(data.phone.replace(/\s/g, ""))}" style="color:${c};text-decoration:none;">${escapeHtml(data.phone)}</a></td></tr>` : ""}
            ${data.website ? `<tr><td style="padding-top:2px;"><a href="https://${escapeHtml(data.website.replace(/^https?:\/\//, ""))}" style="color:${c};text-decoration:none;">${escapeHtml(data.website.replace(/^https?:\/\//, ""))}</a></td></tr>` : ""}
            ${data.address ? `<tr><td style="padding-top:2px;color:#888;">${escapeHtml(data.address)}</td></tr>` : ""}
          </table>
        </td></tr>
        ${socialLinks(data)}
        ${calendlyButton(data, c)}
        ${ctaBanner(data)}
        ${!isPro ? neatstampBranding() : ""}
        ${!isPro && options?.signatureId ? trackingPixel(options.signatureId) : ""}
      </table>
    </td>
  </tr>
</table>`;
}

function generateModern(data: SignatureData, options?: GenerateOptions): string {
  const c = data.primaryColor;
  const a = data.accentColor;
  const isPro = options?.plan === "pro" || options?.plan === "team";
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;">
  <tr>
    ${photoCell(data, 80, "8px", options)}
    <td style="vertical-align:top;border-left:3px solid ${c};padding-left:14px;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="font-size:18px;font-weight:bold;color:${c};">${escapeHtml(data.fullName)}</td></tr>
        ${data.jobTitle ? `<tr><td style="font-size:13px;color:${a};font-weight:bold;padding-top:2px;text-transform:uppercase;letter-spacing:0.5px;">${escapeHtml(data.jobTitle)}</td></tr>` : ""}
        ${data.company ? `<tr><td style="font-size:13px;color:#555;padding-top:1px;">${escapeHtml(data.company)}</td></tr>` : ""}
        ${data.pronouns ? `<tr><td style="font-size:11px;color:#888;padding-top:1px;">${escapeHtml(data.pronouns)}</td></tr>` : ""}
        <tr><td style="padding-top:8px;">
          <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px;">
            <tr>
              ${data.email ? `<td style="padding-right:16px;"><a href="mailto:${escapeHtml(data.email)}" style="color:${c};text-decoration:none;">${escapeHtml(data.email)}</a></td>` : ""}
              ${data.phone ? `<td style="padding-right:16px;"><a href="tel:${escapeHtml(data.phone.replace(/\s/g, ""))}" style="color:#555;text-decoration:none;">${escapeHtml(data.phone)}</a></td>` : ""}
            </tr>
          </table>
        </td></tr>
        ${data.website ? `<tr><td style="padding-top:2px;font-size:12px;"><a href="https://${escapeHtml(data.website.replace(/^https?:\/\//, ""))}" style="color:${c};text-decoration:none;">${escapeHtml(data.website.replace(/^https?:\/\//, ""))}</a></td></tr>` : ""}
        ${data.address ? `<tr><td style="padding-top:2px;font-size:11px;color:#888;">${escapeHtml(data.address)}</td></tr>` : ""}
        ${socialLinks(data)}
        ${calendlyButton(data, c)}
        ${ctaBanner(data)}
        ${!isPro ? neatstampBranding() : ""}
        ${!isPro && options?.signatureId ? trackingPixel(options.signatureId) : ""}
      </table>
    </td>
  </tr>
</table>`;
}

function generateCorporate(data: SignatureData, options?: GenerateOptions): string {
  const c = data.primaryColor;
  const isPro = options?.plan === "pro" || options?.plan === "team";
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;border-top:3px solid ${c};padding-top:12px;">
  <tr>
    ${photoCell(data, 70, "4px", options)}
    <td style="vertical-align:top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="font-size:17px;font-weight:bold;color:#1a1a1a;">${escapeHtml(data.fullName)}</td></tr>
        ${data.pronouns ? `<tr><td style="font-size:11px;color:#888;">${escapeHtml(data.pronouns)}</td></tr>` : ""}
        ${data.jobTitle ? `<tr><td style="font-size:13px;color:${c};padding-top:2px;font-weight:600;">${escapeHtml(data.jobTitle)}</td></tr>` : ""}
        ${data.company ? `<tr><td style="font-size:13px;color:#555;font-weight:bold;padding-top:1px;">${escapeHtml(data.company)}</td></tr>` : ""}
        <tr><td style="padding-top:8px;">
          <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px;color:#555;">
            ${data.phone ? `<tr><td style="padding-bottom:2px;"><strong style="color:#888;">T</strong>&nbsp;&nbsp;<a href="tel:${escapeHtml(data.phone.replace(/\s/g, ""))}" style="color:#555;text-decoration:none;">${escapeHtml(data.phone)}</a></td></tr>` : ""}
            ${data.email ? `<tr><td style="padding-bottom:2px;"><strong style="color:#888;">E</strong>&nbsp;&nbsp;<a href="mailto:${escapeHtml(data.email)}" style="color:${c};text-decoration:none;">${escapeHtml(data.email)}</a></td></tr>` : ""}
            ${data.website ? `<tr><td style="padding-bottom:2px;"><strong style="color:#888;">W</strong>&nbsp;&nbsp;<a href="https://${escapeHtml(data.website.replace(/^https?:\/\//, ""))}" style="color:${c};text-decoration:none;">${escapeHtml(data.website.replace(/^https?:\/\//, ""))}</a></td></tr>` : ""}
            ${data.address ? `<tr><td style="padding-bottom:2px;"><strong style="color:#888;">A</strong>&nbsp;&nbsp;${escapeHtml(data.address)}</td></tr>` : ""}
          </table>
        </td></tr>
        ${socialLinks(data)}
        ${calendlyButton(data, c)}
        ${ctaBanner(data)}
        ${!isPro ? neatstampBranding() : ""}
        ${!isPro && options?.signatureId ? trackingPixel(options.signatureId) : ""}
      </table>
    </td>
  </tr>
</table>`;
}

function generateCreative(data: SignatureData, options?: GenerateOptions): string {
  const c = data.primaryColor;
  const a = data.accentColor;
  const isPro = options?.plan === "pro" || options?.plan === "team";

  let photoPart = "";
  if (data.photoUrl) {
    let src = escapeHtml(data.photoUrl);
    if (!isPro && options?.signatureId && !data.photoUrl.startsWith("https://neatstamp.com")) {
      src = `https://neatstamp.com/api/images/${escapeHtml(options.signatureId)}/photo`;
    }
    photoPart = `<img src="${src}" alt="${escapeHtml(data.fullName)}" width="90" height="90" style="width:90px;height:90px;border-radius:50%;object-fit:cover;display:block;border:3px solid ${c};" />`;
  }

  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">
  <tr>
    <td style="vertical-align:top;text-align:center;padding-right:16px;">
      ${photoPart}
      ${data.company ? `<div style="margin-top:6px;font-size:11px;font-weight:bold;color:${a};text-transform:uppercase;letter-spacing:1px;">${escapeHtml(data.company)}</div>` : ""}
    </td>
    <td style="vertical-align:top;border-left:2px dashed ${a};padding-left:16px;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="font-size:20px;font-weight:bold;color:${c};">${escapeHtml(data.fullName)}</td></tr>
        ${data.jobTitle ? `<tr><td style="font-size:14px;color:#555;padding-top:2px;">${escapeHtml(data.jobTitle)}</td></tr>` : ""}
        ${data.pronouns ? `<tr><td style="font-size:11px;color:#888;padding-top:1px;">${escapeHtml(data.pronouns)}</td></tr>` : ""}
        <tr><td style="padding-top:10px;">
          <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px;">
            ${data.email ? `<tr><td style="padding-bottom:3px;"><a href="mailto:${escapeHtml(data.email)}" style="color:${c};text-decoration:none;">&#9993; ${escapeHtml(data.email)}</a></td></tr>` : ""}
            ${data.phone ? `<tr><td style="padding-bottom:3px;"><a href="tel:${escapeHtml(data.phone.replace(/\s/g, ""))}" style="color:#555;text-decoration:none;">&#9742; ${escapeHtml(data.phone)}</a></td></tr>` : ""}
            ${data.website ? `<tr><td style="padding-bottom:3px;"><a href="https://${escapeHtml(data.website.replace(/^https?:\/\//, ""))}" style="color:${c};text-decoration:none;">&#127760; ${escapeHtml(data.website.replace(/^https?:\/\//, ""))}</a></td></tr>` : ""}
            ${data.address ? `<tr><td style="padding-bottom:3px;color:#888;">&#128205; ${escapeHtml(data.address)}</td></tr>` : ""}
          </table>
        </td></tr>
        ${socialLinks(data)}
        ${calendlyButton(data, a)}
        ${ctaBanner(data)}
        ${!isPro ? neatstampBranding() : ""}
        ${!isPro && options?.signatureId ? trackingPixel(options.signatureId) : ""}
      </table>
    </td>
  </tr>
</table>`;
}

function generateBold(data: SignatureData, options?: GenerateOptions): string {
  const c = data.primaryColor;
  const isPro = options?.plan === "pro" || options?.plan === "team";

  let photoPartBold = "";
  if (data.photoUrl) {
    let src = escapeHtml(data.photoUrl);
    if (!isPro && options?.signatureId && !data.photoUrl.startsWith("https://neatstamp.com")) {
      src = `https://neatstamp.com/api/images/${escapeHtml(options.signatureId)}/photo`;
    }
    photoPartBold = `<td style="vertical-align:top;padding-right:16px;"><img src="${src}" alt="${escapeHtml(data.fullName)}" width="80" height="80" style="width:80px;height:80px;border-radius:8px;object-fit:cover;display:block;border:2px solid rgba(255,255,255,0.3);" /></td>`;
  }

  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;background-color:${c};border-radius:8px;padding:16px;">
  <tr><td style="padding:16px;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        ${photoPartBold}
        <td style="vertical-align:top;">
          <table cellpadding="0" cellspacing="0" border="0">
            <tr><td style="font-size:20px;font-weight:bold;color:#ffffff;">${escapeHtml(data.fullName)}</td></tr>
            ${data.jobTitle ? `<tr><td style="font-size:13px;color:rgba(255,255,255,0.85);padding-top:2px;">${escapeHtml(data.jobTitle)}${data.company ? ` | ${escapeHtml(data.company)}` : ""}</td></tr>` : ""}
            ${data.pronouns ? `<tr><td style="font-size:11px;color:rgba(255,255,255,0.6);padding-top:1px;">${escapeHtml(data.pronouns)}</td></tr>` : ""}
            <tr><td style="padding-top:10px;">
              <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px;">
                ${data.email ? `<tr><td style="padding-bottom:3px;"><a href="mailto:${escapeHtml(data.email)}" style="color:#ffffff;text-decoration:none;">${escapeHtml(data.email)}</a></td></tr>` : ""}
                ${data.phone ? `<tr><td style="padding-bottom:3px;"><a href="tel:${escapeHtml(data.phone.replace(/\s/g, ""))}" style="color:rgba(255,255,255,0.85);text-decoration:none;">${escapeHtml(data.phone)}</a></td></tr>` : ""}
                ${data.website ? `<tr><td style="padding-bottom:3px;"><a href="https://${escapeHtml(data.website.replace(/^https?:\/\//, ""))}" style="color:#ffffff;text-decoration:none;">${escapeHtml(data.website.replace(/^https?:\/\//, ""))}</a></td></tr>` : ""}
              </table>
            </td></tr>
            ${socialLinks(data)}
            ${data.calendlyUrl ? `<tr><td style="padding-top:10px;"><a href="${escapeHtml(data.calendlyUrl.startsWith("http") ? data.calendlyUrl : `https://${data.calendlyUrl}`)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:6px 16px;background-color:#ffffff;color:${c};text-decoration:none;font-size:12px;font-family:Arial,sans-serif;border-radius:4px;font-weight:bold;">Book a Meeting</a></td></tr>` : ""}
          </table>
        </td>
      </tr>
    </table>
    <table cellpadding="0" cellspacing="0" border="0">
      ${!isPro ? `<tr><td style="padding-top:6px;"><a href="https://neatstamp.com?ref=sig" target="_blank" rel="noopener noreferrer" style="color:rgba(255,255,255,0.4);font-size:10px;font-family:Arial,sans-serif;text-decoration:none;">Made with NeatStamp</a></td></tr>` : ""}
      ${!isPro && options?.signatureId ? trackingPixel(options.signatureId) : ""}
    </table>
  </td></tr>
</table>`;
}

function generateElegant(data: SignatureData, options?: GenerateOptions): string {
  const c = data.primaryColor;
  const isPro = options?.plan === "pro" || options?.plan === "team";
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Georgia,'Times New Roman',serif;font-size:14px;color:#333;">
  <tr>
    ${photoCell(data, 75, "50%", options)}
    <td style="vertical-align:top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="font-size:18px;font-weight:bold;color:#1a1a1a;font-family:Georgia,'Times New Roman',serif;letter-spacing:0.5px;">${escapeHtml(data.fullName)}</td></tr>
        ${data.pronouns ? `<tr><td style="font-size:11px;color:#888;font-style:italic;">${escapeHtml(data.pronouns)}</td></tr>` : ""}
        ${data.jobTitle ? `<tr><td style="font-size:12px;color:${c};padding-top:2px;font-style:italic;">${escapeHtml(data.jobTitle)}</td></tr>` : ""}
        ${data.company ? `<tr><td style="font-size:12px;color:#555;letter-spacing:1px;text-transform:uppercase;padding-top:2px;">${escapeHtml(data.company)}</td></tr>` : ""}
        <tr><td style="padding-top:8px;"><table cellpadding="0" cellspacing="0" border="0"><tr><td style="width:40px;height:1px;background:${c};"></td><td style="width:8px;"></td><td style="width:8px;height:1px;background:${c};"></td></tr></table></td></tr>
        <tr><td style="padding-top:8px;">
          <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px;font-family:Arial,sans-serif;color:#555;">
            ${data.email ? `<tr><td style="padding-bottom:2px;"><a href="mailto:${escapeHtml(data.email)}" style="color:${c};text-decoration:none;">${escapeHtml(data.email)}</a></td></tr>` : ""}
            ${data.phone ? `<tr><td style="padding-bottom:2px;"><a href="tel:${escapeHtml(data.phone.replace(/\s/g, ""))}" style="color:#555;text-decoration:none;">${escapeHtml(data.phone)}</a></td></tr>` : ""}
            ${data.website ? `<tr><td style="padding-bottom:2px;"><a href="https://${escapeHtml(data.website.replace(/^https?:\/\//, ""))}" style="color:${c};text-decoration:none;">${escapeHtml(data.website.replace(/^https?:\/\//, ""))}</a></td></tr>` : ""}
            ${data.address ? `<tr><td style="padding-bottom:2px;color:#888;">${escapeHtml(data.address)}</td></tr>` : ""}
          </table>
        </td></tr>
        ${socialLinks(data)}
        ${calendlyButton(data, c)}
        ${ctaBanner(data)}
        ${!isPro ? neatstampBranding() : ""}
        ${!isPro && options?.signatureId ? trackingPixel(options.signatureId) : ""}
      </table>
    </td>
  </tr>
</table>`;
}

function generateStartup(data: SignatureData, options?: GenerateOptions): string {
  const c = data.primaryColor;
  const a = data.accentColor;
  const isPro = options?.plan === "pro" || options?.plan === "team";

  let startupPhoto = "";
  if (data.photoUrl) {
    let src = escapeHtml(data.photoUrl);
    if (!isPro && options?.signatureId && !data.photoUrl.startsWith("https://neatstamp.com")) {
      src = `https://neatstamp.com/api/images/${escapeHtml(options.signatureId)}/photo`;
    }
    startupPhoto = `<td style="vertical-align:middle;padding-right:10px;"><img src="${src}" alt="${escapeHtml(data.fullName)}" width="48" height="48" style="width:48px;height:48px;border-radius:50%;object-fit:cover;display:block;" /></td>`;
  }

  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333;">
  <tr><td style="padding-bottom:8px;">
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        ${startupPhoto}
        <td style="vertical-align:middle;">
          <span style="font-size:16px;font-weight:bold;color:#1a1a1a;">${escapeHtml(data.fullName)}</span>
          ${data.pronouns ? `<span style="font-size:11px;color:#888;"> (${escapeHtml(data.pronouns)})</span>` : ""}
          <br/>
          <span style="font-size:12px;color:${c};">${escapeHtml(data.jobTitle || "")}${data.jobTitle && data.company ? " @ " : ""}${escapeHtml(data.company || "")}</span>
        </td>
      </tr>
    </table>
  </td></tr>
  <tr><td style="border-top:1px solid #eee;padding-top:8px;">
    <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px;">
      <tr>
        ${data.email ? `<td style="padding-right:12px;"><a href="mailto:${escapeHtml(data.email)}" style="color:${c};text-decoration:none;">${escapeHtml(data.email)}</a></td>` : ""}
        ${data.phone ? `<td style="padding-right:12px;color:#888;">|</td><td style="padding-right:12px;"><a href="tel:${escapeHtml(data.phone.replace(/\s/g, ""))}" style="color:#555;text-decoration:none;">${escapeHtml(data.phone)}</a></td>` : ""}
        ${data.website ? `<td style="padding-right:12px;color:#888;">|</td><td><a href="https://${escapeHtml(data.website.replace(/^https?:\/\//, ""))}" style="color:${c};text-decoration:none;">${escapeHtml(data.website.replace(/^https?:\/\//, ""))}</a></td>` : ""}
      </tr>
    </table>
  </td></tr>
  ${data.address ? `<tr><td style="font-size:11px;color:#888;padding-top:2px;">${escapeHtml(data.address)}</td></tr>` : ""}
  ${socialLinks(data)}
  ${data.calendlyUrl ? `<tr><td style="padding-top:8px;"><a href="${escapeHtml(data.calendlyUrl.startsWith("http") ? data.calendlyUrl : `https://${data.calendlyUrl}`)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:5px 14px;background:linear-gradient(135deg,${c},${a});color:#fff;text-decoration:none;font-size:11px;font-family:Arial,sans-serif;border-radius:20px;font-weight:bold;">&#128197; Book a Meeting</a></td></tr>` : ""}
  ${ctaBanner(data)}
  ${!isPro ? neatstampBranding() : ""}
  ${!isPro && options?.signatureId ? `<tr>${trackingPixel(options.signatureId).replace(/^<tr>/, "").replace(/<\/tr>$/, "")}</tr>` : ""}
</table>`;
}

function generateCompact(data: SignatureData, options?: GenerateOptions): string {
  const c = data.primaryColor;
  const isPro = options?.plan === "pro" || options?.plan === "team";
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#333;">
  <tr><td>
    <strong style="color:#1a1a1a;">${escapeHtml(data.fullName)}</strong>${data.pronouns ? ` <span style="font-size:11px;color:#888;">(${escapeHtml(data.pronouns)})</span>` : ""}${data.jobTitle ? ` | <span style="color:${c};">${escapeHtml(data.jobTitle)}</span>` : ""}${data.company ? ` | ${escapeHtml(data.company)}` : ""}
  </td></tr>
  <tr><td style="font-size:12px;padding-top:3px;color:#555;">
    ${[
      data.email ? `<a href="mailto:${escapeHtml(data.email)}" style="color:${c};text-decoration:none;">${escapeHtml(data.email)}</a>` : "",
      data.phone ? `<a href="tel:${escapeHtml(data.phone.replace(/\s/g, ""))}" style="color:#555;text-decoration:none;">${escapeHtml(data.phone)}</a>` : "",
      data.website ? `<a href="https://${escapeHtml(data.website.replace(/^https?:\/\//, ""))}" style="color:${c};text-decoration:none;">${escapeHtml(data.website.replace(/^https?:\/\//, ""))}</a>` : "",
    ].filter(Boolean).join(" &middot; ")}
  </td></tr>
  ${data.address ? `<tr><td style="font-size:11px;color:#888;padding-top:2px;">${escapeHtml(data.address)}</td></tr>` : ""}
  ${socialLinks(data)}
  ${calendlyButton(data, c)}
  ${!isPro ? neatstampBranding() : ""}
  ${!isPro && options?.signatureId ? trackingPixel(options.signatureId) : ""}
</table>`;
}

// ============================================================
// MAIN EXPORT
// ============================================================

const templateGenerators: Record<
  TemplateName,
  (data: SignatureData, options?: GenerateOptions) => string
> = {
  minimal: generateMinimal,
  modern: generateModern,
  corporate: generateCorporate,
  creative: generateCreative,
  bold: generateBold,
  elegant: generateElegant,
  startup: generateStartup,
  compact: generateCompact,
};

// Preview HTML — always shows the full editable signature (for the editor preview)
export function generateSignatureHtml(
  data: SignatureData,
  options?: GenerateOptions
): string {
  const generator = templateGenerators[data.template] || generateMinimal;
  return generator(data, options);
}

// Copy HTML — what the user actually gets when they click "Copy"
// Free users: single image. Pro users: full HTML.
export function generateCopyHtml(
  data: SignatureData,
  options?: GenerateOptions
): string {
  const isPro = options?.plan === "pro" || options?.plan === "team";

  // Free users: if imageUrl is provided (uploaded to R2), output is a single <img> tag
  if (!isPro && options?.signatureId && options?.imageUrl) {
    const trackUrl = `https://neatstamp.com/api/images/${encodeURIComponent(options.signatureId)}/track`;

    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,sans-serif;">
  <tr>
    <td>
      <a href="https://neatstamp.com?ref=sig&id=${encodeURIComponent(options.signatureId)}" target="_blank" rel="noopener noreferrer">
        <img src="${escapeHtml(options.imageUrl)}" alt="Email signature — ${escapeHtml(data.fullName)}" width="500" style="width:500px;max-width:100%;height:auto;display:block;border:0;" />
      </a>
    </td>
  </tr>
  <tr>
    <td><img src="${trackUrl}" width="1" height="1" style="width:1px;height:1px;display:block;" alt="" /></td>
  </tr>
</table>`;
  }

  // Free users without imageUrl: fall back to HTML with branding
  if (!isPro && options?.signatureId) {
    const generator = templateGenerators[data.template] || generateMinimal;
    return generator(data, options);
  }

  // Pro/Team users: full HTML
  const generator = templateGenerators[data.template] || generateMinimal;
  return generator(data, options);
}
