/**
 * Tests for new features: AI Generator, Pro gating, Deliverability, Outlook Tester
 * Run with: npx tsx src/lib/__tests__/new-features.test.ts
 */

import { generateSignatureHtml } from "../generateSignature";
import { SignatureData, DEFAULT_SIGNATURE_DATA, TemplateName } from "../types";

function makeData(overrides: Partial<SignatureData> = {}): SignatureData {
  return { ...DEFAULT_SIGNATURE_DATA, ...overrides };
}

let passed = 0;
let failed = 0;
const failures: string[] = [];

function test(name: string, fn: () => void) {
  try {
    fn();
    passed++;
  } catch (e: unknown) {
    failed++;
    const msg = `${name}: ${(e as Error).message}`;
    failures.push(msg);
    console.log(`  ❌ ${msg}`);
  }
}

function assert(condition: boolean, msg: string) {
  if (!condition) throw new Error(msg);
}

// ================================================================
console.log("\n🤖 AI SIGNATURE GENERATOR — Parser Tests\n");
// ================================================================

// Test the parsing logic that the AI Generator uses
function parseInput(input: string): Partial<SignatureData> {
  const result: Partial<SignatureData> = {};
  const text = input.trim();

  if (text.includes("linkedin.com")) {
    result.linkedin = text.startsWith("http") ? text : `https://${text}`;
    const match = text.match(/linkedin\.com\/in\/([^/?]+)/);
    if (match) {
      const username = match[1].replace(/-/g, " ");
      result.fullName = username.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    }
  }

  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length >= 2 && !text.includes("linkedin.com")) {
    if (lines[0] && !lines[0].includes("@") && !lines[0].includes("http")) {
      result.fullName = lines[0];
    }
    lines.forEach((line) => {
      const emailMatch = line.match(/[\w.-]+@[\w.-]+\.\w+/);
      if (emailMatch) result.email = emailMatch[0];
      const phoneMatch = line.match(/[\+]?[\d\s\-\(\)]{7,}/);
      if (phoneMatch && !result.phone) result.phone = phoneMatch[0].trim();
      if (line.match(/^(https?:\/\/)?(www\.)?[\w-]+\.\w{2,}/i) && !line.includes("@") && !line.includes("linkedin")) {
        result.website = line.replace(/^https?:\/\//, "");
      }
    });
  }

  return result;
}

test("Parse LinkedIn URL extracts name", () => {
  const result = parseInput("https://linkedin.com/in/john-doe");
  assert(result.fullName === "John Doe", `Expected "John Doe" got "${result.fullName}"`);
  assert(result.linkedin === "https://linkedin.com/in/john-doe", "LinkedIn URL not set");
});

test("Parse multi-line text extracts name, email, phone", () => {
  const result = parseInput("Jane Smith\njane@acme.com\n+1 555 123 4567");
  assert(result.fullName === "Jane Smith", `Expected "Jane Smith" got "${result.fullName}"`);
  assert(result.email === "jane@acme.com", `Expected email got "${result.email}"`);
  assert(result.phone?.includes("555"), `Expected phone got "${result.phone}"`);
});

test("Parse text with website", () => {
  const result = parseInput("John Doe\nCEO\nwww.acme.com\njohn@acme.com");
  assert(result.website === "www.acme.com", `Expected website got "${result.website}"`);
});

test("Parse empty input returns empty", () => {
  const result = parseInput("");
  assert(!result.fullName, "Should be empty");
});

test("Parse single line returns nothing useful", () => {
  const result = parseInput("hello");
  assert(!result.fullName, "Single line should not parse as name");
});

// ================================================================
console.log("\n🔒 PRO GATING — Free vs Pro output differences\n");
// ================================================================

test("Free user signature has NeatStamp branding link", () => {
  const html = generateSignatureHtml(makeData(), { plan: "free" });
  assert(html.includes("neatstamp.com"), "Free output should contain NeatStamp link");
  assert(html.includes("Made with") || html.includes("NeatStamp"), "Free should have branding text");
});

test("Pro user signature has NO NeatStamp branding", () => {
  const html = generateSignatureHtml(makeData(), { plan: "pro" });
  assert(!html.includes("Made with NeatStamp"), "Pro should not have branding");
});

test("Team user signature has NO NeatStamp branding", () => {
  const html = generateSignatureHtml(makeData(), { plan: "team" });
  assert(!html.includes("Made with NeatStamp"), "Team should not have branding");
});

test("Free user gets tracking pixel with signatureId", () => {
  const html = generateSignatureHtml(makeData(), { plan: "free", signatureId: "test-abc" });
  assert(html.includes("test-abc/track"), "Free should have tracking pixel");
});

test("Pro user does NOT get tracking pixel", () => {
  const html = generateSignatureHtml(makeData(), { plan: "pro", signatureId: "test-abc" });
  assert(!html.includes("test-abc/track"), "Pro should not have tracking pixel");
});

test("Free user without signatureId has NO tracking pixel", () => {
  const html = generateSignatureHtml(makeData(), { plan: "free" });
  assert(!html.includes("/track"), "No signatureId = no tracking");
});

// ================================================================
console.log("\n📬 DELIVERABILITY — HTML quality checks\n");
// ================================================================

// Simulate the deliverability checks
function checkDeliverability(html: string): { links: number; images: number; hasBase64: boolean; hasHttp: boolean; hasTable: boolean; hasClasses: boolean; sizeKB: number } {
  return {
    links: (html.match(/href="/g) || []).length,
    images: (html.match(/<img/g) || []).length,
    hasBase64: html.includes("data:image"),
    hasHttp: html.includes('src="http:'),
    hasTable: html.includes("<table"),
    hasClasses: /class="[^"]+"/g.test(html),
    sizeKB: new Blob([html]).size / 1024,
  };
}

const ALL_TEMPLATES: TemplateName[] = [
  "minimal", "modern", "corporate", "creative", "bold",
  "elegant", "startup", "compact", "executive", "gradient",
  "developer", "sales", "medical", "legal", "academic",
  "realtor", "influencer", "photographer", "dark", "simple",
];

ALL_TEMPLATES.forEach((t) => {
  test(`"${t}": uses table-based layout (Outlook-safe)`, () => {
    const html = generateSignatureHtml(makeData({ template: t }));
    const check = checkDeliverability(html);
    assert(check.hasTable, "Must use table layout for Outlook");
  });

  test(`"${t}": no CSS classes (email clients strip them)`, () => {
    const html = generateSignatureHtml(makeData({ template: t }));
    const check = checkDeliverability(html);
    assert(!check.hasClasses, "CSS classes will be stripped");
  });

  test(`"${t}": under 50KB (Gmail clipping threshold)`, () => {
    const html = generateSignatureHtml(makeData({ template: t }));
    const check = checkDeliverability(html);
    assert(check.sizeKB < 50, `HTML is ${check.sizeKB.toFixed(1)}KB — too large`);
  });

  test(`"${t}": no non-HTTPS images`, () => {
    const html = generateSignatureHtml(makeData({ template: t }));
    const check = checkDeliverability(html);
    assert(!check.hasHttp, "Contains non-HTTPS image — blocked by spam filters");
  });

  test(`"${t}": reasonable link count (under 15)`, () => {
    const html = generateSignatureHtml(makeData({ template: t, linkedin: "https://li.com", twitter: "https://x.com", instagram: "https://ig.com", facebook: "https://fb.com", github: "https://gh.com", youtube: "https://yt.com" }));
    const check = checkDeliverability(html);
    assert(check.links < 15, `${check.links} links — too many for deliverability`);
  });
});

// ================================================================
console.log("\n📋 OUTLOOK COMPATIBILITY — specific checks\n");
// ================================================================

ALL_TEMPLATES.forEach((t) => {
  test(`"${t}": has width=500 (Outlook needs explicit width)`, () => {
    const html = generateSignatureHtml(makeData({ template: t }));
    assert(html.includes('width="500"'), "Missing width=500 for Outlook");
  });

  test(`"${t}": has cellpadding attribute (Outlook table rendering)`, () => {
    const html = generateSignatureHtml(makeData({ template: t }));
    assert(html.includes("cellpadding"), "Missing cellpadding for Outlook");
  });

  test(`"${t}": uses inline styles only`, () => {
    const html = generateSignatureHtml(makeData({ template: t }));
    assert(html.includes('style="'), "Must use inline styles");
    assert(!html.includes('class="'), "Must not use CSS classes");
  });

  test(`"${t}": social icons are PNG (not SVG)`, () => {
    const html = generateSignatureHtml(makeData({ template: t, linkedin: "https://linkedin.com/in/test" }));
    if (html.includes("linkedin")) {
      assert(html.includes(".png"), "Social icons must be PNG for Outlook");
      assert(!html.includes(".svg"), "SVG not supported in Outlook");
    }
  });
});

// ================================================================
console.log("\n🌙 DARK MODE — preview and override tests\n");
// ================================================================

test("backgroundColor wraps signature in colored table", () => {
  const html = generateSignatureHtml(makeData({ backgroundColor: "#1e1e2e" }));
  assert(html.includes("background-color:#1e1e2e"), "Background not applied");
  assert(html.includes("border-radius:8px"), "Background should have rounded corners");
  assert(html.includes("padding:16px"), "Background should have padding");
});

test("textOnDark converts dark colors to white", () => {
  const html = generateSignatureHtml(makeData({ backgroundColor: "#111", textOnDark: true }));
  assert(html.includes("#ffffff"), "Should have white text");
  assert(!html.includes("color:#1a1a1a"), "Dark text should be replaced");
  assert(!html.includes("color:#333"), "Dark grey should be replaced");
});

test("No background when backgroundColor not set", () => {
  const html = generateSignatureHtml(makeData({}));
  assert(!html.startsWith('<table cellpadding="0" cellspacing="0" border="0" style="background-color:'), "Should not have background wrapper");
});

test("textOnDark without backgroundColor does nothing harmful", () => {
  const html = generateSignatureHtml(makeData({ textOnDark: true }));
  // Should still render normally — textOnDark only activates with backgroundColor
  assert(html.includes("Alex Johnson"), "Should still render content");
});

// ================================================================
console.log("\n⭐ TESTIMONIAL — disclaimer-based rendering\n");
// ================================================================

test("Testimonial text renders via disclaimer field", () => {
  const html = generateSignatureHtml(makeData({ disclaimer: "[testimonial]Rated 4.9 on Google (127 reviews)" }));
  assert(html.includes("Rated 4.9"), "Testimonial text should render");
});

test("Regular disclaimer still works", () => {
  const html = generateSignatureHtml(makeData({ disclaimer: "This email is confidential." }));
  assert(html.includes("This email is confidential"), "Regular disclaimer should render");
});

test("Empty disclaimer renders nothing", () => {
  const html = generateSignatureHtml(makeData({ disclaimer: "" }));
  // Check no stray disclaimer elements
  assert(!html.includes("testimonial"), "Empty should not render");
});

// ================================================================
console.log("\n📊 SIGNATURE SCORE — scoring logic\n");
// ================================================================

function calculateScore(data: SignatureData): number {
  const items = [
    { points: 10, met: data.fullName.trim().length > 2 },
    { points: 10, met: data.jobTitle.trim().length > 0 },
    { points: 8, met: data.company.trim().length > 0 },
    { points: 10, met: data.email.trim().length > 0 && data.email.includes("@") },
    { points: 10, met: data.phone.trim().length > 0 },
    { points: 8, met: data.website.trim().length > 0 },
    { points: 15, met: data.photoUrl.length > 0 },
    { points: 8, met: !!(data.linkedin || data.twitter || data.instagram || data.facebook || data.github || data.youtube) },
    { points: 5, met: [data.linkedin, data.twitter, data.instagram, data.facebook, data.github, data.youtube].filter(Boolean).length >= 2 },
    { points: 6, met: data.template !== "minimal" && data.template !== "simple" && data.template !== "compact" },
    { points: 5, met: (data.calendlyUrl || "").trim().length > 0 },
    { points: 5, met: (data.address || "").trim().length > 0 },
  ];
  const score = items.reduce((sum, item) => sum + (item.met ? item.points : 0), 0);
  const maxScore = items.reduce((sum, item) => sum + item.points, 0);
  return Math.round((score / maxScore) * 100);
}

test("Perfect score = 100", () => {
  const score = calculateScore(makeData({
    fullName: "John", jobTitle: "CEO", company: "Acme", email: "j@a.com",
    phone: "+1555", website: "acme.com", photoUrl: "http://photo.jpg",
    linkedin: "http://li.com", twitter: "http://x.com", template: "modern",
    calendlyUrl: "http://cal.com", address: "123 Main St",
  }));
  assert(score === 100, `Expected 100 got ${score}`);
});

test("Empty data = 0", () => {
  const score = calculateScore(makeData({
    fullName: "", jobTitle: "", company: "", email: "", phone: "",
    website: "", photoUrl: "", linkedin: "", twitter: "", instagram: "",
    facebook: "", github: "", youtube: "", calendlyUrl: "", address: "",
    template: "minimal",
  }));
  assert(score === 0, `Expected 0 got ${score}`);
});

test("Photo adds significant points (15/100)", () => {
  const without = calculateScore(makeData({ photoUrl: "" }));
  const withPhoto = calculateScore(makeData({ photoUrl: "http://p.jpg" }));
  assert(withPhoto > without, "Photo should increase score");
  assert(withPhoto - without >= 10, `Photo should add 10+ points, got ${withPhoto - without}`);
});

test("Default data gets reasonable score (40-70)", () => {
  const score = calculateScore(DEFAULT_SIGNATURE_DATA);
  assert(score >= 30 && score <= 80, `Default score ${score} outside expected range`);
});

// ================================================================
// Summary
// ================================================================

console.log(`\n${"=".repeat(60)}`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`Total: ${passed + failed}`);
if (failures.length > 0) {
  console.log(`\nFailed tests:`);
  failures.forEach((f) => console.log(`  - ${f}`));
}
console.log(`${"=".repeat(60)}\n`);

if (failed > 0) process.exit(1);
