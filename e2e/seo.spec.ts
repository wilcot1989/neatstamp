import { test, expect, type Page } from "@playwright/test";

// ================================================================
// SEO requirements — 10 key pages
//
// For each page we verify:
//  1. <title> tag present and under 70 chars
//  2. meta description present and under 160 chars
//  3. canonical <link> tag present
//  4. Exactly one <h1>
//  5. At least one JSON-LD structured data script
//  6. No internal links use http://localhost (all should be relative or https://neatstamp.com)
// ================================================================

const SEO_PAGES = [
  "/",
  "/editor",
  "/pricing",
  "/email-signature-outlook",
  "/outlook-mobile-signature",
  "/blog",
  "/blog/outlook-signature-not-working",
  "/email-signature-for-teams",
  "/alternative-to-exclaimer",
  "/email-signature-cost-calculator",
];

// ================================================================
// Helper functions
// ================================================================

async function getPageTitle(page: Page): Promise<string> {
  return await page.title();
}

async function getMetaDescription(page: Page): Promise<string | null> {
  return await page
    .locator("meta[name='description']")
    .getAttribute("content");
}

async function getCanonicalUrl(page: Page): Promise<string | null> {
  return await page
    .locator("link[rel='canonical']")
    .getAttribute("href");
}

async function getH1Count(page: Page): Promise<number> {
  return await page.locator("h1").count();
}

async function hasJsonLd(page: Page): Promise<boolean> {
  const scripts = await page.locator("script[type='application/ld+json']").count();
  return scripts > 0;
}

async function getInternalLocalhostLinks(page: Page): Promise<string[]> {
  return await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll("a[href]"));
    return anchors
      .map((a) => a.getAttribute("href") ?? "")
      .filter((href) => href.includes("localhost") && !href.startsWith("//"));
  });
}

// ================================================================
// Title length tests
// ================================================================

test.describe("SEO — Title tag", () => {
  for (const url of SEO_PAGES) {
    test(`${url}: title is present and under 70 chars`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      const title = await getPageTitle(page);
      expect(title.length, `Title on ${url} is empty`).toBeGreaterThan(0);
      expect(
        title.length,
        `Title on ${url} is too long (${title.length} chars): "${title}"`
      ).toBeLessThanOrEqual(70);
    });
  }
});

// ================================================================
// Meta description tests
// ================================================================

test.describe("SEO — Meta description", () => {
  for (const url of SEO_PAGES) {
    test(`${url}: meta description present and under 160 chars`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      const description = await getMetaDescription(page);
      expect(
        description,
        `${url} is missing meta description`
      ).not.toBeNull();
      expect(
        (description ?? "").length,
        `${url} meta description is empty`
      ).toBeGreaterThan(0);
      expect(
        (description ?? "").length,
        `${url} meta description too long (${(description ?? "").length} chars)`
      ).toBeLessThanOrEqual(160);
    });
  }
});

// ================================================================
// Canonical URL tests
// ================================================================

test.describe("SEO — Canonical URL", () => {
  for (const url of SEO_PAGES) {
    test(`${url}: has canonical <link> tag`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      const canonical = await getCanonicalUrl(page);
      expect(
        canonical,
        `${url} is missing canonical <link> tag`
      ).not.toBeNull();
      expect(
        (canonical ?? "").length,
        `${url} canonical URL is empty`
      ).toBeGreaterThan(0);
      // Canonical must point to the production domain
      expect(
        canonical,
        `${url} canonical should point to neatstamp.com`
      ).toContain("neatstamp.com");
    });
  }
});

// ================================================================
// H1 count tests
// ================================================================

test.describe("SEO — H1 tag", () => {
  for (const url of SEO_PAGES) {
    test(`${url}: has exactly one <h1>`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      const h1Count = await getH1Count(page);
      expect(
        h1Count,
        `${url} has ${h1Count} <h1> tags — should have exactly 1`
      ).toBe(1);
    });
  }
});

// ================================================================
// JSON-LD structured data tests
// ================================================================

test.describe("SEO — Structured data (JSON-LD)", () => {
  for (const url of SEO_PAGES) {
    test(`${url}: has at least one JSON-LD script`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      const hasStructuredData = await hasJsonLd(page);
      expect(
        hasStructuredData,
        `${url} is missing JSON-LD structured data`
      ).toBe(true);
    });
  }

  test("homepage JSON-LD contains WebSite or Organization type", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const jsonLdScripts = await page
      .locator("script[type='application/ld+json']")
      .allTextContents();

    const combined = jsonLdScripts.join(" ");
    const hasWebSite = combined.includes("WebSite");
    const hasOrganization = combined.includes("Organization");
    expect(
      hasWebSite || hasOrganization,
      "Homepage JSON-LD should contain WebSite or Organization type"
    ).toBe(true);
  });

  test("JSON-LD script content is valid JSON", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const jsonLdContents = await page
      .locator("script[type='application/ld+json']")
      .allTextContents();

    for (const content of jsonLdContents) {
      let parsed: unknown = null;
      let parseError: string | null = null;
      try {
        parsed = JSON.parse(content);
      } catch (e) {
        parseError = String(e);
      }
      expect(parseError, `JSON-LD contains invalid JSON: ${parseError}`).toBeNull();
      expect(parsed).not.toBeNull();
    }
  });
});

// ================================================================
// Internal links — no localhost URLs
// ================================================================

test.describe("SEO — Internal links use correct domain", () => {
  for (const url of SEO_PAGES) {
    test(`${url}: no internal links use http://localhost`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      const localhostLinks = await getInternalLocalhostLinks(page);
      expect(
        localhostLinks,
        `${url} has ${localhostLinks.length} link(s) pointing to localhost: ${localhostLinks.join(", ")}`
      ).toHaveLength(0);
    });
  }
});

// ================================================================
// Open Graph tags (bonus — important for social sharing)
// ================================================================

test.describe("SEO — Open Graph tags", () => {
  const ogPages = ["/", "/editor", "/pricing", "/blog"];

  for (const url of ogPages) {
    test(`${url}: has og:title and og:description`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      const ogTitle = await page
        .locator("meta[property='og:title']")
        .getAttribute("content");
      const ogDesc = await page
        .locator("meta[property='og:description']")
        .getAttribute("content");

      expect(ogTitle, `${url} missing og:title`).not.toBeNull();
      expect((ogTitle ?? "").length, `${url} og:title is empty`).toBeGreaterThan(0);
      expect(ogDesc, `${url} missing og:description`).not.toBeNull();
      expect((ogDesc ?? "").length, `${url} og:description is empty`).toBeGreaterThan(0);
    });
  }
});

// ================================================================
// Robots meta tag — pages should be indexable
// ================================================================

test.describe("SEO — Robots indexing", () => {
  const indexablePages = ["/", "/editor", "/pricing", "/blog", "/email-signature-outlook"];

  for (const url of indexablePages) {
    test(`${url}: is not blocked by robots meta tag`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      const robotsMeta = await page
        .locator("meta[name='robots']")
        .getAttribute("content");

      // If a robots meta exists, it must not be "noindex"
      if (robotsMeta) {
        expect(
          robotsMeta,
          `${url} has noindex robots meta — page will not be indexed`
        ).not.toContain("noindex");
      }
      // If no robots meta, that's fine — defaults to indexable
    });
  }
});

// ================================================================
// Page-specific content checks
// ================================================================

test.describe("SEO — Page-specific content", () => {
  test("homepage title contains NeatStamp", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    const title = await page.title();
    expect(title).toContain("NeatStamp");
  });

  test("editor page title contains relevant keyword", async ({ page }) => {
    await page.goto("/editor");
    await page.waitForLoadState("networkidle");
    const title = await page.title();
    expect(title.toLowerCase()).toMatch(/signature|editor|neatstamp/i);
  });

  test("pricing page title contains Pricing or Plan", async ({ page }) => {
    await page.goto("/pricing");
    await page.waitForLoadState("networkidle");
    const title = await page.title();
    expect(title.toLowerCase()).toMatch(/pricing|plan|cost/i);
  });

  test("outlook landing page title contains Outlook keyword", async ({ page }) => {
    await page.goto("/email-signature-outlook");
    await page.waitForLoadState("networkidle");
    const title = await page.title();
    expect(title.toLowerCase()).toContain("outlook");
  });

  test("blog index title contains Blog", async ({ page }) => {
    await page.goto("/blog");
    await page.waitForLoadState("networkidle");
    const title = await page.title();
    expect(title.toLowerCase()).toContain("blog");
  });

  test("alternative page title mentions competitor name", async ({ page }) => {
    await page.goto("/alternative-to-exclaimer");
    await page.waitForLoadState("networkidle");
    const title = await page.title();
    expect(title.toLowerCase()).toContain("exclaimer");
  });
});
