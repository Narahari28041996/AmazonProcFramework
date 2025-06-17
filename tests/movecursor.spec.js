import { test } from "@playwright/test";
test("Handle mouse hover",async ({page}) => {
   await page.goto("https://www.myntra.com/");
    await page.locator("//a[text()='Men' and @class='desktop-main']").hover()
    await page.locator("//a[text()='Formal Shirts']").click()
    await page.waitForTimeout(3000);
});