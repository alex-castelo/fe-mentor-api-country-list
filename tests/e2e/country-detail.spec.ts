import { test, expect } from "@playwright/test";

import { countriesAll } from "./fixtures/countries-all";

test.beforeEach(async ({ page }) => {
  await page.route("*/**/v3.1/all", async (route) => {
    const json = countriesAll;

    await route.fulfill({ json });
  });

  await page.goto("http://localhost:3000/");

  await page.getByRole("img", { name: "Mauritania flag" }).click();

  await expect(page.getByRole("heading", { name: "Mauritania" })).toBeVisible();
  await expect(page.getByText("Native name: Mauritania")).toBeVisible();
});

test("Can navigate to country detail page", async ({ page }) => {
  await expect(page.getByText("Population: 4649660")).toBeVisible();
  await expect(page.getByText("Region: 4649660")).toBeVisible();
  await expect(page.getByText("Top level domain: .mr")).toBeVisible();
  await expect(page.getByText("Currencies: Mauritanian ouguiya")).toBeVisible();
  await expect(page.getByText("Languages: Arabic")).toBeVisible();

  await expect(page.getByText("Border Countries:")).toBeVisible();
});

test("can go back to main page", async ({ page }) => {
  await page.getByRole("button", { name: "Back" }).click();

  expect(page.url()).toBe("http://localhost:3000/");
});

test("can navigate to a border country", async ({ page }) => {
  await page.getByRole("button", { name: /algeria/i }).click();

  await expect(page.getByRole("heading", { name: "Algeria" })).toBeVisible();
  expect(page.url()).toBe("http://localhost:3000/country/Algeria");
});
