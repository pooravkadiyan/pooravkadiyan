import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Homepage UI journey", () => {
  test("renders hero + ctas and opens work page", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Intelligence systems that upgrade decisions in days.",
      }),
    ).toBeVisible();

    await expect(page.getByRole("link", { name: "Book a build sprint" })).toBeVisible();
    await expect(page.getByRole("link", { name: "See case studies" })).toBeVisible();

    await page.getByRole("link", { name: "See case studies" }).first().click();
    await expect(page).toHaveURL(/\/work$/);
    await expect(
      page.getByRole("heading", { name: "Real systems. Real outcomes. Real constraints." }),
    ).toBeVisible();
  });

  test("builds a structured contact mailto draft", async ({ page }) => {
    await page.goto("/");

    await page.getByLabel("Name").fill("Alex Ops");
    await page.getByLabel("Work email").fill("alex@example.com");
    await page.getByLabel("Company (optional)").fill("Signal Systems");
    await page
      .getByLabel("What decision should improve? (context)")
      .fill("Forecast demand by city and reduce stockouts.");

    const draftLink = page.getByRole("link", { name: "Draft the intro email" });
    await expect(draftLink).toBeVisible();

    const href = await draftLink.getAttribute("href");
    expect(href).toContain("mailto:hello@pooravkadiyan.com");
    expect(href).toContain("Name%3A+Alex+Ops");
    expect(href).toContain("Email%3A+alex%40example.com");
    expect(href).toContain("Company%3A+Signal+Systems");
  });

  test("has no serious or critical accessibility violations on home", async ({ page }) => {
    await page.goto("/");

    const axeResults = await new AxeBuilder({ page }).analyze();
    const impactfulViolations = axeResults.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );

    expect(
      impactfulViolations,
      `Serious/critical violations found: ${impactfulViolations
        .map((v) => `${v.id} (${v.impact})`)
        .join(", ")}`,
    ).toEqual([]);
  });
});

test.describe("Mobile menu UX", () => {
  test("can open and close the mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    await expect(page.getByRole("link", { name: "Intelligence" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();
  });
});
