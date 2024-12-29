// @ts-check
const { test, expect } = require("@playwright/test");

test("has content", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(
    page.getByText("Custom application to learn deployment.")
  ).toBeVisible();
});
