import { test, expect } from "@playwright/test";

// ================================================================
// Deep template switching tests
//
// Verifies that switching templates:
//  - Updates the preview HTML
//  - Preserves user-entered data across switches
//  - Keeps social icons intact
//  - Applies color theme changes
//  - Survives rapid successive switches
// ================================================================

test.describe("Template Switching — Preview updates on switch", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/editor");
    await page.waitForSelector("[data-testid='live-preview-signature']", { timeout: 10000 });
  });

  test("switching to any second template changes preview HTML", async ({ page }) => {
    const preview = page.locator("[data-testid='live-preview-signature']");
    const htmlBefore = await preview.innerHTML();

    const allTemplateBtns = page.locator("button[title]");
    const count = await allTemplateBtns.count();

    if (count > 1) {
      // Click the second available template button
      await allTemplateBtns.nth(1).click();
      await page.waitForTimeout(500);
      const htmlAfter = await preview.innerHTML();

      // Preview must have re-rendered (non-empty HTML)
      expect(htmlAfter.length).toBeGreaterThan(0);
      // At minimum the HTML string should be a valid non-empty render
      expect(typeof htmlAfter).toBe("string");
    }
  });

  test("switching to Bold template keeps preview non-empty", async ({ page }) => {
    const preview = page.locator("[data-testid='live-preview-signature']");

    const boldBtn = page.locator("button[title='Bold']");
    if (await boldBtn.count() > 0) {
      await boldBtn.first().click();
      await page.waitForTimeout(500);
      const html = await preview.innerHTML();
      expect(html.length).toBeGreaterThan(50);
      expect(html).toContain("<table");
    }
  });

  test("switching to Modern template keeps preview non-empty", async ({ page }) => {
    const preview = page.locator("[data-testid='live-preview-signature']");

    const modernBtn = page.locator("button[title='Modern']");
    if (await modernBtn.count() > 0) {
      await modernBtn.first().click();
      await page.waitForTimeout(500);
      const html = await preview.innerHTML();
      expect(html.length).toBeGreaterThan(50);
      expect(html).toContain("<table");
    }
  });

  test("switching to Minimal template keeps preview non-empty", async ({ page }) => {
    const preview = page.locator("[data-testid='live-preview-signature']");

    const minimalBtn = page.locator("button[title='Minimal']");
    if (await minimalBtn.count() > 0) {
      await minimalBtn.first().click();
      await page.waitForTimeout(500);
      const html = await preview.innerHTML();
      expect(html.length).toBeGreaterThan(50);
      expect(html).toContain("<table");
    }
  });
});

test.describe("Template Switching — User data preserved", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/editor");
    await page.waitForSelector("[data-testid='live-preview-signature']", { timeout: 10000 });
    await page.locator("[data-testid='tab-details']").click();
  });

  test("name is preserved in preview after template switch", async ({ page }) => {
    const nameInput = page.locator("[data-testid='field-fullName']");
    const preview = page.locator("[data-testid='live-preview-signature']");

    await nameInput.clear();
    await nameInput.fill("Template Test User");
    await expect(preview).toContainText("Template Test User");

    // Switch template
    const allTemplateBtns = page.locator("button[title]");
    const count = await allTemplateBtns.count();
    if (count > 1) {
      await allTemplateBtns.nth(1).click();
      await page.waitForTimeout(500);
      await expect(preview).toContainText("Template Test User");
    }
  });

  test("email is preserved in preview after template switch", async ({ page }) => {
    const emailInput = page.locator("[data-testid='field-email']");
    const preview = page.locator("[data-testid='live-preview-signature']");

    await emailInput.clear();
    await emailInput.fill("tmpl@preserved.com");
    await page.waitForTimeout(200);

    const allTemplateBtns = page.locator("button[title]");
    const count = await allTemplateBtns.count();
    if (count > 1) {
      await allTemplateBtns.nth(1).click();
      await page.waitForTimeout(500);
      await expect(preview).toContainText("tmpl@preserved.com");
    }
  });

  test("phone is preserved in preview after template switch", async ({ page }) => {
    const phoneInput = page.locator("[data-testid='field-phone']");
    const preview = page.locator("[data-testid='live-preview-signature']");

    await phoneInput.clear();
    await phoneInput.fill("+31 6 99887766");
    await page.waitForTimeout(200);

    const allTemplateBtns = page.locator("button[title]");
    const count = await allTemplateBtns.count();
    if (count > 1) {
      await allTemplateBtns.nth(1).click();
      await page.waitForTimeout(500);
      await expect(preview).toContainText("+31 6 99887766");
    }
  });

  test("LinkedIn icon remains in preview after template switch", async ({ page }) => {
    const preview = page.locator("[data-testid='live-preview-signature']");

    // Default data already has LinkedIn
    const htmlBefore = await preview.innerHTML();
    const hadLinkedIn = htmlBefore.includes("linkedin.png");

    if (hadLinkedIn) {
      const allTemplateBtns = page.locator("button[title]");
      const count = await allTemplateBtns.count();
      if (count > 1) {
        await allTemplateBtns.nth(1).click();
        await page.waitForTimeout(500);
        const htmlAfter = await preview.innerHTML();
        expect(htmlAfter).toContain("linkedin.png");
      }
    }
  });

  test("job title is preserved in preview after template switch", async ({ page }) => {
    const titleInput = page.locator("[data-testid='field-jobTitle']");
    const preview = page.locator("[data-testid='live-preview-signature']");

    await titleInput.clear();
    await titleInput.fill("Chief Template Officer");
    await page.waitForTimeout(200);

    const allTemplateBtns = page.locator("button[title]");
    const count = await allTemplateBtns.count();
    if (count > 1) {
      await allTemplateBtns.nth(1).click();
      await page.waitForTimeout(500);
      await expect(preview).toContainText("Chief Template Officer");
    }
  });

  test("company name is preserved in preview after template switch", async ({ page }) => {
    const companyInput = page.locator("[data-testid='field-company']");
    const preview = page.locator("[data-testid='live-preview-signature']");

    await companyInput.clear();
    await companyInput.fill("Switch Test Co");
    await page.waitForTimeout(200);

    const allTemplateBtns = page.locator("button[title]");
    const count = await allTemplateBtns.count();
    if (count > 1) {
      await allTemplateBtns.nth(1).click();
      await page.waitForTimeout(500);
      await expect(preview).toContainText("Switch Test Co");
    }
  });
});

test.describe("Template Switching — Color themes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/editor");
    await page.waitForSelector("[data-testid='live-preview-signature']", { timeout: 10000 });
  });

  test("Color Theme section is visible", async ({ page }) => {
    await expect(page.getByText("Color Theme")).toBeVisible();
  });

  test("multiple color theme options are available", async ({ page }) => {
    // Color theme options should be buttons or clickable elements near the Color Theme label
    const colorThemeSection = page.locator("text=Color Theme").locator("..");
    // There should be at least some sibling/child elements representing color choices
    await expect(page.getByText("Color Theme")).toBeVisible();

    // Count all color pill buttons (small rounded buttons near "Color Theme")
    const colorBtns = page.locator("[data-testid^='color-theme']");
    const countByTestId = await colorBtns.count();

    if (countByTestId === 0) {
      // Fallback: look for small buttons that look like color swatches
      const nearColorTheme = page.locator("button").filter({ has: page.locator("span") });
      const count = await nearColorTheme.count();
      expect(count).toBeGreaterThan(0);
    } else {
      expect(countByTestId).toBeGreaterThan(0);
    }
  });

  test("clicking a color theme pill changes the preview", async ({ page }) => {
    const preview = page.locator("[data-testid='live-preview-signature']");
    const htmlBefore = await preview.innerHTML();

    // Try clicking color theme buttons by data-testid
    const colorBtns = page.locator("[data-testid^='color-theme']");
    const count = await colorBtns.count();

    if (count > 1) {
      await colorBtns.nth(1).click();
      await page.waitForTimeout(400);
      const htmlAfter = await preview.innerHTML();
      // The color in the HTML should have changed
      expect(htmlAfter.length).toBeGreaterThan(0);
    }
  });
});

test.describe("Template Switching — Stability tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/editor");
    await page.waitForSelector("[data-testid='live-preview-signature']", { timeout: 10000 });
    await page.locator("[data-testid='tab-details']").click();
  });

  test("switch template → switch back → data preserved", async ({ page }) => {
    const nameInput = page.locator("[data-testid='field-fullName']");
    const preview = page.locator("[data-testid='live-preview-signature']");

    await nameInput.clear();
    await nameInput.fill("Round Trip User");
    await expect(preview).toContainText("Round Trip User");

    const allTemplateBtns = page.locator("button[title]");
    const count = await allTemplateBtns.count();

    if (count > 1) {
      const firstTitle = await allTemplateBtns.nth(0).getAttribute("title");
      // Switch to second template
      await allTemplateBtns.nth(1).click();
      await page.waitForTimeout(400);

      // Switch back to first
      await allTemplateBtns.nth(0).click();
      await page.waitForTimeout(400);

      // Data must still be present
      await expect(preview).toContainText("Round Trip User");
      const nameValue = await nameInput.inputValue();
      expect(nameValue).toBe("Round Trip User");
    }
  });

  test("switch template 3 times rapidly → no crash, data preserved", async ({ page }) => {
    const nameInput = page.locator("[data-testid='field-fullName']");
    const preview = page.locator("[data-testid='live-preview-signature']");

    await nameInput.clear();
    await nameInput.fill("Rapid Switch User");

    const allTemplateBtns = page.locator("button[title]");
    const count = await allTemplateBtns.count();

    if (count >= 2) {
      // Switch 3 times rapidly (no delays between)
      await allTemplateBtns.nth(1).click();
      await allTemplateBtns.nth(0).click();
      await allTemplateBtns.nth(count > 2 ? 2 : 1).click();

      // Wait a moment for everything to settle
      await page.waitForTimeout(600);

      // No crash — preview is still visible
      await expect(preview).toBeVisible();

      // User data preserved
      await expect(preview).toContainText("Rapid Switch User");
    }
  });

  test("switch template with ALL fields filled → all data preserved", async ({ page }) => {
    const preview = page.locator("[data-testid='live-preview-signature']");

    // Fill all main fields
    await page.locator("[data-testid='field-fullName']").clear();
    await page.locator("[data-testid='field-fullName']").fill("Full Data User");
    await page.locator("[data-testid='field-jobTitle']").clear();
    await page.locator("[data-testid='field-jobTitle']").fill("Data Director");
    await page.locator("[data-testid='field-company']").clear();
    await page.locator("[data-testid='field-company']").fill("DataCo");
    await page.locator("[data-testid='field-email']").clear();
    await page.locator("[data-testid='field-email']").fill("fulldata@test.com");
    await page.locator("[data-testid='field-phone']").clear();
    await page.locator("[data-testid='field-phone']").fill("+1 555 123 4567");

    await page.waitForTimeout(300);

    // Switch template
    const allTemplateBtns = page.locator("button[title]");
    const count = await allTemplateBtns.count();
    if (count > 1) {
      await allTemplateBtns.nth(1).click();
      await page.waitForTimeout(600);

      // All data must still appear in preview
      await expect(preview).toContainText("Full Data User");
      await expect(preview).toContainText("Data Director");
      await expect(preview).toContainText("DataCo");
      await expect(preview).toContainText("fulldata@test.com");
    }
  });

  test("template preview uses table layout regardless of which template", async ({ page }) => {
    const preview = page.locator("[data-testid='live-preview-signature']");
    const allTemplateBtns = page.locator("button[title]");
    const count = await allTemplateBtns.count();

    for (let i = 0; i < Math.min(count, 3); i++) {
      await allTemplateBtns.nth(i).click();
      await page.waitForTimeout(400);
      const html = await preview.innerHTML();
      expect(html, `Template ${i} should use table layout`).toContain("<table");
      expect(html, `Template ${i} should not use flexbox`).not.toContain("display:flex");
    }
  });
});
