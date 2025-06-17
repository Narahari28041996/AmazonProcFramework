import { test,expect } from "@playwright/test";
test("Display and validate NYC Temperature",async ({page}) => {
    await page.goto("https://www.google.com/?authuser=0");
    await expect(page).toHaveTitle("Google");
    const searchBox=await page.locator("//textarea[@id='APjFqb']");
    await expect(searchBox).toBeVisible();
    await expect(searchBox).toBeEnabled();
    await expect(searchBox).toBeEmpty();
    await searchBox.fill("highest temperature in new york");
    await expect(searchBox).toHaveValue("highest temperature in new york");
    await page.keyboard.press("Enter");
})