import { test, expect, type Page } from "@playwright/test";

// ================================================================
// Helper: verify a page loads correctly
// ================================================================

async function expectPageLoadsCorrectly(page: Page, url: string) {
  const jsErrors: string[] = [];
  page.on("pageerror", (err) => jsErrors.push(err.message));

  const response = await page.goto(url, { timeout: 10000 });

  // HTTP 200
  expect(response?.status(), `${url} should return 200`).toBe(200);

  // Has <title>
  const title = await page.title();
  expect(title.length, `${url} should have a non-empty <title>`).toBeGreaterThan(0);

  // Has <h1>
  const h1Count = await page.locator("h1").count();
  expect(h1Count, `${url} should have at least one <h1>`).toBeGreaterThan(0);

  // No broken images: every <img> that loaded should not have naturalWidth === 0
  const brokenImages = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll("img"));
    return imgs
      .filter((img) => img.complete && img.naturalWidth === 0 && img.src !== "")
      .map((img) => img.src);
  });
  expect(brokenImages, `${url} has broken images: ${brokenImages.join(", ")}`).toHaveLength(0);

  // No JS errors
  expect(jsErrors, `${url} has JS errors: ${jsErrors.join("; ")}`).toHaveLength(0);
}

// ================================================================
// GROUP 1: Core pages
// ================================================================

test.describe("Core pages load correctly", () => {
  test("homepage /", async ({ page }) => {
    await expectPageLoadsCorrectly(page, "/");
  });

  test("editor /editor", async ({ page }) => {
    await expectPageLoadsCorrectly(page, "/editor");
  });

  test("templates /templates", async ({ page }) => {
    await expectPageLoadsCorrectly(page, "/templates");
  });

  test("examples /examples", async ({ page }) => {
    await expectPageLoadsCorrectly(page, "/examples");
  });

  test("pricing /pricing", async ({ page }) => {
    await expectPageLoadsCorrectly(page, "/pricing");
  });

  test("about /about", async ({ page }) => {
    await expectPageLoadsCorrectly(page, "/about");
  });

  test("privacy /privacy", async ({ page }) => {
    await expectPageLoadsCorrectly(page, "/privacy");
  });

  test("terms /terms", async ({ page }) => {
    await expectPageLoadsCorrectly(page, "/terms");
  });

  test("blog index /blog", async ({ page }) => {
    await expectPageLoadsCorrectly(page, "/blog");
  });
});

// ================================================================
// GROUP 2: Email client landing pages
// ================================================================

test.describe("Email client landing pages load correctly", () => {
  const emailClientPages = [
    "/email-signature-gmail",
    "/email-signature-outlook",
    "/email-signature-apple-mail",
    "/email-signature-yahoo",
    "/email-signature-outlook-365",
  ];

  for (const url of emailClientPages) {
    test(`${url}`, async ({ page }) => {
      await expectPageLoadsCorrectly(page, url);
    });
  }
});

// ================================================================
// GROUP 3: Feature pages (high-priority)
// ================================================================

test.describe("Feature pages load correctly", () => {
  const featurePages = [
    "/email-signature-maker",
    "/professional-email-signature",
    "/email-signature-with-logo",
    "/email-signature-design",
    "/html-email-signature",
    "/best-email-signature-generator",
    "/ai-email-signature-generator",
    "/email-signature-with-pronouns",
    "/email-signature-disclaimer",
    "/email-signature-quotes",
  ];

  for (const url of featurePages) {
    test(`${url}`, async ({ page }) => {
      await expectPageLoadsCorrectly(page, url);
    });
  }
});

// ================================================================
// GROUP 4: Use case pages
// ================================================================

test.describe("Use case pages load correctly", () => {
  const useCasePages = [
    "/email-signature-for-business",
    "/email-signature-for-freelancers",
    "/email-signature-for-students",
    "/email-signature-for-teams",
    "/small-business-email-signature",
    "/email-signature-for-sales",
    "/email-signature-for-lawyer",
    "/email-signature-for-doctor",
    "/email-signature-for-ceo",
  ];

  for (const url of useCasePages) {
    test(`${url}`, async ({ page }) => {
      await expectPageLoadsCorrectly(page, url);
    });
  }
});

// ================================================================
// GROUP 5: Strategic / Outlook sub-niche pages
// ================================================================

test.describe("Strategic Outlook pages load correctly", () => {
  const outlookPages = [
    "/outlook-mobile-signature",
    "/outlook-signature-html",
    "/outlook-signature-for-company",
    "/email-signature-outlook-compatible",
    "/email-signature-dark-mode-compatible",
    "/email-signature-mobile-friendly",
    "/email-signature-deliverability",
    "/email-signature-cost-calculator",
  ];

  for (const url of outlookPages) {
    test(`${url}`, async ({ page }) => {
      await expectPageLoadsCorrectly(page, url);
    });
  }
});

// ================================================================
// GROUP 6: Alternative pages
// ================================================================

test.describe("Alternative pages load correctly", () => {
  const alternativePages = [
    "/alternative-to-wisestamp",
    "/alternative-to-mysignature",
    "/alternative-to-exclaimer",
    "/alternative-to-newoldstamp",
    "/alternative-to-hubspot-signature",
    "/alternative-to-codetwo",
  ];

  for (const url of alternativePages) {
    test(`${url}`, async ({ page }) => {
      await expectPageLoadsCorrectly(page, url);
    });
  }
});

// ================================================================
// GROUP 7: Blog articles (high-priority)
// ================================================================

test.describe("Blog articles load correctly", () => {
  const blogPages = [
    "/blog/outlook-signature-not-working",
    "/blog/email-signature-best-practices",
    "/blog/email-signature-size",
    "/blog/how-to-add-social-media-icons-email-signature",
    "/blog/email-signature-not-showing-outlook",
    "/blog/gmail-signature-not-working",
    "/blog/what-to-include-email-signature",
    "/blog/how-to-create-email-signature",
    "/blog/email-signature-examples-2026",
    "/blog/outlook-signature-template-guide",
    "/blog/cancel-wisestamp-subscription",
    "/blog/outlook-signature-disappeared",
    "/blog/new-outlook-signature-problems",
    "/blog/email-signature-not-working-new-outlook",
    "/blog/email-signature-deliverability-guide",
    "/blog/outlook-365-signature-setup",
    "/blog/microsoft-365-email-signature-management",
    "/blog/email-signature-spam-filter-fix",
    "/blog/email-signature-company-wide-management",
    "/blog/email-signature-gdpr-compliance",
  ];

  for (const url of blogPages) {
    test(`${url}`, async ({ page }) => {
      await expectPageLoadsCorrectly(page, url);
    });
  }
});

// ================================================================
// GROUP 8: Seasonal pages
// ================================================================

test.describe("Seasonal pages load correctly", () => {
  const seasonalPages = [
    "/christmas-email-signature",
    "/holiday-email-signature",
    "/new-year-email-signature",
  ];

  for (const url of seasonalPages) {
    test(`${url}`, async ({ page }) => {
      await expectPageLoadsCorrectly(page, url);
    });
  }
});
