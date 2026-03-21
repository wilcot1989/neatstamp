/**
 * Feature tests — verifies all new components and features work correctly
 * Run with: npx tsx src/lib/__tests__/features.test.ts
 */

import { generateSignatureHtml } from "../generateSignature";
import { SignatureData, DEFAULT_SIGNATURE_DATA, TemplateName } from "../types";

function makeData(overrides: Partial<SignatureData> = {}): SignatureData {
  return { ...DEFAULT_SIGNATURE_DATA, ...overrides };
}

let passed = 0;
let failed = 0;

function test(name: string, fn: () => void) {
  try {
    fn();
    passed++;
    console.log(`  ✅ ${name}`);
  } catch (e: unknown) {
    failed++;
    console.log(`  ❌ ${name}: ${(e as Error).message}`);
  }
}

function expect(val: unknown) {
  return {
    toContain(sub: string) {
      if (typeof val !== "string" || !val.includes(sub)) throw new Error(`Expected to contain "${sub}"`);
    },
    not: { toContain(sub: string) { if (typeof val === "string" && val.includes(sub)) throw new Error(`Expected NOT to contain "${sub}"`); } },
    toBeTruthy() { if (!val) throw new Error(`Expected truthy but got: ${val}`); },
    toBe(expected: unknown) { if (val !== expected) throw new Error(`Expected ${expected} but got ${val}`); },
    toBeGreaterThan(n: number) { if (typeof val !== "number" || val <= n) throw new Error(`Expected > ${n} but got ${val}`); },
    toBeGreaterThanOrEqual(n: number) { if (typeof val !== "number" || val < n) throw new Error(`Expected >= ${n} but got ${val}`); },
    toBeLessThanOrEqual(n: number) { if (typeof val !== "number" || val > n) throw new Error(`Expected <= ${n} but got ${val}`); },
  };
}

// ================================================================
console.log("\n📊 SIGNATURE SCORE TESTS\n");
// ================================================================

// Import the score logic (we'll inline it since it's a React component)
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
    { points: 5, met: data.calendlyUrl.trim().length > 0 },
    { points: 5, met: data.address.trim().length > 0 },
  ];
  const score = items.reduce((sum, item) => sum + (item.met ? item.points : 0), 0);
  const maxScore = items.reduce((sum, item) => sum + item.points, 0);
  return Math.round((score / maxScore) * 100);
}

test("Default data gets a score > 0", () => {
  const score = calculateScore(DEFAULT_SIGNATURE_DATA);
  expect(score).toBeGreaterThan(0);
});

test("Full data gets score close to 100", () => {
  const score = calculateScore(makeData({
    fullName: "John Doe",
    jobTitle: "Manager",
    company: "Acme",
    email: "john@acme.com",
    phone: "+1555123",
    website: "acme.com",
    photoUrl: "https://example.com/photo.jpg",
    linkedin: "https://linkedin.com/in/john",
    twitter: "https://x.com/john",
    template: "modern",
    calendlyUrl: "https://calendly.com/john",
    address: "123 Main St",
  }));
  expect(score).toBe(100);
});

test("Empty data gets score 0", () => {
  const score = calculateScore(makeData({
    fullName: "", jobTitle: "", company: "", email: "", phone: "",
    website: "", photoUrl: "", linkedin: "", twitter: "", instagram: "",
    facebook: "", github: "", youtube: "", calendlyUrl: "", address: "",
    template: "minimal",
  }));
  expect(score).toBe(0);
});

test("Adding photo increases score significantly", () => {
  const without = calculateScore(makeData({ photoUrl: "" }));
  const withPhoto = calculateScore(makeData({ photoUrl: "https://example.com/p.jpg" }));
  expect(withPhoto - without).toBeGreaterThan(10);
});

// ================================================================
console.log("\n📝 DISCLAIMER TESTS\n");
// ================================================================

test("Disclaimer renders in all templates when set", () => {
  const templates: TemplateName[] = ["minimal", "modern", "corporate", "creative", "bold", "elegant"];
  templates.forEach((template) => {
    const html = generateSignatureHtml(makeData({ template, disclaimer: "CONFIDENTIAL_TEST_123" }));
    expect(html).toContain("CONFIDENTIAL_TEST_123");
  });
});

test("Disclaimer does not render when empty", () => {
  const html = generateSignatureHtml(makeData({ disclaimer: "" }));
  expect(html).not.toContain("CONFIDENTIAL");
});

test("Disclaimer is HTML-escaped", () => {
  const html = generateSignatureHtml(makeData({ disclaimer: "Test <script>alert('xss')</script>" }));
  expect(html).not.toContain("<script>");
  expect(html).toContain("&lt;script&gt;");
});

// ================================================================
console.log("\n🖼️ PHOTO OVERRIDE TESTS\n");
// ================================================================

test("photoSize overrides template default in all templates", () => {
  const templates: TemplateName[] = ["minimal", "modern", "executive", "realtor", "dark"];
  templates.forEach((template) => {
    const html = generateSignatureHtml(makeData({ template, photoUrl: "https://x.com/p.jpg", photoSize: 95 }));
    expect(html).toContain("width:95px");
  });
});

test("photoShape circle works across templates", () => {
  const html = generateSignatureHtml(makeData({ photoUrl: "https://x.com/p.jpg", photoShape: "circle", template: "corporate" }));
  expect(html).toContain("border-radius:50%");
});

test("photoShape square works across templates", () => {
  const html = generateSignatureHtml(makeData({ photoUrl: "https://x.com/p.jpg", photoShape: "square", template: "modern" }));
  expect(html).toContain("border-radius:0");
});

// ================================================================
console.log("\n🎨 DESIGN TAB OVERRIDE TESTS (all 20 templates)\n");
// ================================================================

const allTemplates: TemplateName[] = [
  "minimal", "modern", "corporate", "creative", "bold",
  "elegant", "startup", "compact", "executive", "gradient",
  "developer", "sales", "medical", "legal", "academic",
  "realtor", "influencer", "photographer", "dark", "simple",
];

test("nameColor override works on ALL templates", () => {
  allTemplates.forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t, nameColor: "#ff1234" }));
    expect(html).toContain("#ff1234");
  });
});

test("nameSize override works on ALL templates", () => {
  allTemplates.forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t, nameSize: 25 }));
    expect(html).toContain("font-size:25px");
  });
});

test("nameBold=false gives normal weight on ALL templates", () => {
  allTemplates.forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t, nameBold: false }));
    expect(html).toContain("font-weight:normal");
  });
});

test("fontFamily override works on ALL templates", () => {
  allTemplates.forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t, fontFamily: "Tahoma,Geneva,sans-serif" }));
    expect(html).toContain("Tahoma");
  });
});

test("titleColor override works on ALL templates with a title", () => {
  allTemplates.forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t, jobTitle: "CEO", titleColor: "#00ff99" }));
    expect(html).toContain("#00ff99");
  });
});

test("backgroundColor wraps ALL templates", () => {
  allTemplates.forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t, backgroundColor: "#1a1a2e" }));
    expect(html).toContain("background-color:#1a1a2e");
  });
});

test("textOnDark replaces dark text on ALL templates", () => {
  allTemplates.forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t, backgroundColor: "#111", textOnDark: true }));
    expect(html).toContain("#ffffff");
  });
});

// ================================================================
console.log("\n🔗 SOCIAL ICONS TESTS\n");
// ================================================================

test("All 6 social platforms render when URLs set", () => {
  const html = generateSignatureHtml(makeData({
    linkedin: "https://linkedin.com/in/test",
    twitter: "https://x.com/test",
    instagram: "https://instagram.com/test",
    facebook: "https://facebook.com/test",
    github: "https://github.com/test",
    youtube: "https://youtube.com/@test",
  }));
  expect(html).toContain("linkedin.png");
  expect(html).toContain("twitter.png");
  expect(html).toContain("instagram.png");
  expect(html).toContain("facebook.png");
  expect(html).toContain("github.png");
  expect(html).toContain("youtube.png");
});

test("Social icons use PNG format (Outlook compatible)", () => {
  const html = generateSignatureHtml(makeData({ linkedin: "https://linkedin.com/in/test" }));
  expect(html).toContain(".png");
  expect(html).not.toContain(".svg");
});

// ================================================================
console.log("\n📋 COPY OUTPUT TESTS\n");
// ================================================================

test("Free user output contains branding", () => {
  const html = generateSignatureHtml(makeData(), { plan: "free" });
  expect(html).toContain("NeatStamp");
});

test("Pro user output does NOT contain branding", () => {
  const html = generateSignatureHtml(makeData(), { plan: "pro" });
  expect(html).not.toContain("Made with NeatStamp");
});

test("Output is table-based (Outlook-safe)", () => {
  const html = generateSignatureHtml(makeData());
  expect(html).toContain("<table");
  expect(html).toContain("cellpadding");
});

test("Output uses inline styles (no CSS classes)", () => {
  const html = generateSignatureHtml(makeData());
  expect(html).toContain('style="');
  expect(html).not.toContain('class="');
});

test("Output width is 500px", () => {
  const html = generateSignatureHtml(makeData());
  expect(html).toContain('width="500"');
});

// ================================================================
console.log("\n📐 TEMPLATE CONSISTENCY TESTS\n");
// ================================================================

test("All 20 templates render valid HTML", () => {
  allTemplates.forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t }));
    expect(html).toBeTruthy();
    // Check it starts with a table tag
    expect(html.trimStart().startsWith("<table")).toBeTruthy();
  });
});

test("All templates contain the user's name", () => {
  allTemplates.forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t, fullName: "UniqueTestName789" }));
    expect(html).toContain("UniqueTestName789");
  });
});

test("All templates with photo render the photo", () => {
  const templatesWithPhoto = allTemplates.filter((t) => t !== "compact" && t !== "simple");
  templatesWithPhoto.forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t, photoUrl: "https://test.com/photo123.jpg" }));
    expect(html).toContain("photo123.jpg");
  });
});

test("Compact and Simple templates do NOT render photos", () => {
  ["compact", "simple"].forEach((t) => {
    const html = generateSignatureHtml(makeData({ template: t as TemplateName, photoUrl: "https://test.com/photo.jpg" }));
    expect(html).not.toContain("photo.jpg");
  });
});

// ================================================================
// Summary
// ================================================================

console.log(`\n${"=".repeat(50)}`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`Total: ${passed + failed}`);
console.log(`${"=".repeat(50)}\n`);

if (failed > 0) process.exit(1);
