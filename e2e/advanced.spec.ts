import { expect, test } from "@playwright/test";

test.describe("Advanced UI reliability checks", () => {
  test("key routes have no runtime errors and no failed first-party requests", async ({ page }) => {
    const pageErrors: string[] = [];
    const consoleErrors: string[] = [];
    const failedRequests: string[] = [];

    page.on("pageerror", (error) => {
      pageErrors.push(error.message);
    });

    page.on("console", (message) => {
      if (message.type() === "error") {
        const text = message.text();
        const isKnownDevOverlayNoise =
          text.includes("Failed to fetch RSC payload") ||
          text.includes("hot-reloader-client.js");
        if (!isKnownDevOverlayNoise) {
          consoleErrors.push(text);
        }
      }
    });

    page.on("requestfailed", (request) => {
      const url = request.url();
      const errorText = request.failure()?.errorText ?? "unknown";
      const isAbortedRscRequest = errorText.includes("ERR_ABORTED") && url.includes("_rsc=");
      if (url.startsWith("http://127.0.0.1:3100") && !isAbortedRscRequest) {
        failedRequests.push(`${errorText}: ${url}`);
      }
    });

    const routes = ["/", "/work", "/engage", "/intelligence", "/thinking", "/signal"];

    for (const route of routes) {
      const response = await page.goto(route, { waitUntil: "networkidle" });
      expect(response?.status(), `Unexpected status for ${route}`).toBeLessThan(400);
      await expect(page.locator("main")).toBeVisible();
    }

    expect(pageErrors, `Runtime errors detected: ${pageErrors.join(" | ")}`).toEqual([]);
    expect(consoleErrors, `Console errors detected: ${consoleErrors.join(" | ")}`).toEqual([]);
    expect(
      failedRequests,
      `Failed first-party requests detected: ${failedRequests.join(" | ")}`,
    ).toEqual([]);
  });

  test("hero CTA is keyboard actionable", async ({ page }) => {
    await page.goto("/");

    const cta = page.getByRole("link", { name: "See case studies" }).first();
    await cta.focus();
    await expect(cta).toBeFocused();
    await page.keyboard.press("Enter");

    await expect(page).toHaveURL(/\/work$/);
    await expect(
      page.getByRole("heading", { name: "Real systems. Real outcomes. Real constraints." }),
    ).toBeVisible();
  });

  test("mobile menu updates aria-expanded state", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const toggle = page.getByRole("button", { name: "Open menu" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await toggle.click();
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
