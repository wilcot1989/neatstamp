/**
 * Editor function tests — run with: npx tsx src/lib/__tests__/editor-functions.test.ts
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
      if (typeof val !== "string" || !val.includes(sub)) {
        throw new Error(`Expected to contain "${sub}" but got: ${String(val).slice(0, 100)}...`);
      }
    },
    not: {
      toContain(sub: string) {
        if (typeof val === "string" && val.includes(sub)) {
          throw new Error(`Expected NOT to contain "${sub}"`);
        }
      },
    },
    toBeTruthy() {
      if (!val) throw new Error(`Expected truthy but got: ${val}`);
    },
    toBeGreaterThan(n: number) {
      if (typeof val !== "number" && typeof val !== "string") throw new Error(`Expected number/string`);
      const len = typeof val === "string" ? val.length : val;
      if (len <= n) throw new Error(`Expected > ${n} but got ${len}`);
    },
    toBeLessThan(n: number) {
      if (typeof val !== "number") throw new Error(`Expected number`);
      if (val >= n) throw new Error(`Expected < ${n} but got ${val}`);
    },
  };
}

console.log("\n🧪 DETAILS TAB — Data fields in output\n");

test("fullName appears in output", () => {
  const html = generateSignatureHtml(makeData({ fullName: "TestName123" }));
  expect(html).toContain("TestName123");
});

test("jobTitle appears in output", () => {
  const html = generateSignatureHtml(makeData({ jobTitle: "TestTitle456" }));
  expect(html).toContain("TestTitle456");
});

test("company appears in output", () => {
  const html = generateSignatureHtml(makeData({ company: "TestCompany789" }));
  expect(html).toContain("TestCompany789");
});

test("email appears in output", () => {
  const html = generateSignatureHtml(makeData({ email: "test@unique.dev" }));
  expect(html).toContain("test@unique.dev");
});

test("phone appears in output", () => {
  const html = generateSignatureHtml(makeData({ phone: "+31612345678" }));
  expect(html).toContain("+31612345678");
});

test("website appears in output", () => {
  const html = generateSignatureHtml(makeData({ website: "www.testsite.nl" }));
  expect(html).toContain("testsite.nl");
});

test("empty phone does NOT produce tel: link", () => {
  const html = generateSignatureHtml(makeData({ phone: "" }));
  expect(html).not.toContain("tel:");
});

test("pronouns appear when set", () => {
  const html = generateSignatureHtml(makeData({ pronouns: "they/them" }));
  expect(html).toContain("they/them");
});

test("photo img appears when photoUrl is set", () => {
  const html = generateSignatureHtml(makeData({ photoUrl: "https://example.com/photo.jpg" }));
  expect(html).toContain("example.com/photo.jpg");
});

test("no photo img when photoUrl is empty", () => {
  const html = generateSignatureHtml(makeData({ photoUrl: "", linkedin: "", twitter: "" }));
  // Social icons may still produce <img> tags, so check specifically for photo alt text
  expect(html).not.toContain('alt="Alex Johnson"');
});

console.log("\n🎨 DESIGN TAB — Style overrides\n");

test("nameSize override changes font-size", () => {
  const html = generateSignatureHtml(makeData({ nameSize: 24 }));
  expect(html).toContain("font-size:24px");
});

test("nameColor override changes color", () => {
  const html = generateSignatureHtml(makeData({ nameColor: "#ff0000" }));
  expect(html).toContain("color:#ff0000");
});

test("nameBold false gives font-weight:normal", () => {
  const html = generateSignatureHtml(makeData({ nameBold: false }));
  expect(html).toContain("font-weight:normal");
});

test("nameItalic true gives font-style:italic", () => {
  const html = generateSignatureHtml(makeData({ nameItalic: true }));
  expect(html).toContain("font-style:italic");
});

test("titleColor override works", () => {
  const html = generateSignatureHtml(makeData({ titleColor: "#00ff00", jobTitle: "Manager" }));
  expect(html).toContain("color:#00ff00");
});

test("titleSize override works", () => {
  const html = generateSignatureHtml(makeData({ titleSize: 15, jobTitle: "Manager" }));
  expect(html).toContain("font-size:15px");
});

test("fontFamily override changes font", () => {
  const html = generateSignatureHtml(makeData({ fontFamily: "Verdana,Geneva,sans-serif" }));
  expect(html).toContain("Verdana");
});

test("primaryColor used in output", () => {
  const html = generateSignatureHtml(makeData({ primaryColor: "#abcdef" }));
  expect(html).toContain("#abcdef");
});

test("backgroundColor wraps in colored table", () => {
  const html = generateSignatureHtml(makeData({ backgroundColor: "#1a1a2e" }));
  expect(html).toContain("background-color:#1a1a2e");
});

test("textOnDark replaces dark colors with white", () => {
  const html = generateSignatureHtml(makeData({ backgroundColor: "#111827", textOnDark: true }));
  expect(html).toContain("#ffffff");
});

console.log("\n🖼️ PHOTO — Size, shape, position\n");

test("photoSize override changes dimensions", () => {
  const html = generateSignatureHtml(makeData({ photoUrl: "https://x.com/p.jpg", photoSize: 100 }));
  expect(html).toContain("width:100px");
  expect(html).toContain("height:100px");
});

test("photoShape circle gives 50% radius", () => {
  const html = generateSignatureHtml(makeData({ photoUrl: "https://x.com/p.jpg", photoShape: "circle" }));
  expect(html).toContain("border-radius:50%");
});

test("photoShape square gives 0 radius", () => {
  const html = generateSignatureHtml(makeData({ photoUrl: "https://x.com/p.jpg", photoShape: "square" }));
  expect(html).toContain("border-radius:0");
});

test("photoShape rounded gives 8px radius", () => {
  const html = generateSignatureHtml(makeData({ photoUrl: "https://x.com/p.jpg", photoShape: "rounded" }));
  expect(html).toContain("border-radius:8px");
});

test("photoPosition right: name appears before photo img", () => {
  const html = generateSignatureHtml(makeData({ photoUrl: "https://x.com/p.jpg", photoPosition: "right" }));
  const nameIdx = html.indexOf("Alex Johnson");
  const imgIdx = html.indexOf('alt="Alex Johnson"');
  expect(nameIdx).toBeLessThan(imgIdx);
});

console.log("\n🔗 SOCIAL & CTA\n");

test("linkedin icon appears when URL is set", () => {
  const html = generateSignatureHtml(makeData({ linkedin: "https://linkedin.com/in/test" }));
  expect(html).toContain("linkedin.png");
});

test("social icons absent when URLs empty", () => {
  const html = generateSignatureHtml(makeData({ linkedin: "", twitter: "" }));
  expect(html).not.toContain("linkedin.png");
});

test("calendly button appears when URL set", () => {
  const html = generateSignatureHtml(makeData({ calendlyUrl: "https://calendly.com/test" }));
  expect(html).toContain("calendly.com/test");
});

test("banner appears when URL set", () => {
  const html = generateSignatureHtml(makeData({ ctaBannerUrl: "https://example.com/banner.png" }));
  expect(html).toContain("banner.png");
});

console.log("\n📐 ALL 20 TEMPLATES — basic rendering + overrides\n");

const templates: TemplateName[] = [
  "minimal", "modern", "corporate", "creative", "bold",
  "elegant", "startup", "compact", "executive", "gradient",
  "developer", "sales", "medical", "legal", "academic",
  "realtor", "influencer", "photographer", "dark", "simple",
];

templates.forEach((template) => {
  test(`${template}: renders non-empty HTML`, () => {
    const html = generateSignatureHtml(makeData({ template }));
    expect(html).toBeTruthy();
    expect(html).toBeGreaterThan(100);
    expect(html).toContain("Alex Johnson");
  });

  test(`${template}: nameSize=22 appears`, () => {
    const html = generateSignatureHtml(makeData({ template, nameSize: 22 }));
    expect(html).toContain("font-size:22px");
  });

  test(`${template}: nameColor=#abcdef appears`, () => {
    const html = generateSignatureHtml(makeData({ template, nameColor: "#abcdef" }));
    expect(html).toContain("color:#abcdef");
  });

  test(`${template}: fontFamily=Verdana appears`, () => {
    const html = generateSignatureHtml(makeData({ template, fontFamily: "Verdana,Geneva,sans-serif" }));
    expect(html).toContain("Verdana");
  });
});

// Summary
console.log(`\n${"=".repeat(50)}`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`Total: ${passed + failed}`);
console.log(`${"=".repeat(50)}\n`);

if (failed > 0) process.exit(1);
