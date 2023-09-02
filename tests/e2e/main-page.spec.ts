import { test, expect } from "@playwright/test";

import { countriesAll } from "./fixtures/countries-all";

test.beforeEach(async ({ page }) => {
  await page.route("*/**/v3.1/all", async (route) => {
    const json = countriesAll;

    await route.fulfill({ json });
  });

  await page.goto("http://localhost:3000/");
});

test("See country list page", async ({ page }) => {
  const pageTitle = page.getByText(/where in the world/i);
  const darkModeBtn = page.getByRole("button", { name: /dark mode/i });
  const continentSelect = page.locator("select");
  const inputSearch = page.getByRole("textbox");

  expect(pageTitle).toBeVisible();
  expect(darkModeBtn).toBeVisible();
  expect(inputSearch).toBeVisible();
  expect(continentSelect).toBeVisible();

  const countryCard = page.getByTestId("country-card");

  await expect(countryCard).toHaveCount(16);
});

test("Can filter by continent", async ({ page }) => {
  const continentSelect = page.locator("select");

  await continentSelect.selectOption("Africa");

  const countryCard = page.getByTestId("country-card");

  await expect(countryCard).toHaveCount(7);
});

test("Can search a country using text input", async ({ page }) => {
  const inputSearch = page.getByRole("textbox");

  await inputSearch.type("Mauritania");

  const countryCard = page.getByTestId("country-card");

  await expect(countryCard).toHaveCount(1);
});

test("Can enable dark and light mode", async ({ page }) => {
  const darkModeBtn = page.getByRole("button", { name: "Dark Mode" });
  await darkModeBtn.click();

  await expect(page.locator("body")).toHaveClass("dark-theme");

  const lightModeBtn = page.getByRole("button", { name: "Light Mode" });
  await lightModeBtn.click();
});
