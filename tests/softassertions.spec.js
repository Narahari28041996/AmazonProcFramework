import { test,expect } from "@playwright/test";
test("Soft assertions",async ({page}) => {
    await page.goto("https://demoblaze.com/")

    //Hard assertions
    await expect(page).toHaveTitle('STORE12');
    await expect(page).toHaveURL('https://demoblaze.com/');
    await expect(page.locator('.navbar-brand')).toBeVisible();

    //Soft assertions
    // await expect.soft(page).toHaveTitle('STORE12');
    // await expect.soft(page).toHaveURL('https://demoblaze.com/');
    // await expect.soft(page.locator('.navbar-brand')).toBeVisible();
})