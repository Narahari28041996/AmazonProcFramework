import { test,expect } from "@playwright/test";
test("Work on SBI Site",async ({browser}) => {
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://retail.onlinesbi.sbi/");
    await expect(page).toHaveTitle("State Bank of India");
    await page.getByRole("link",{name:"Banking Forms"}).click();
    await page.locator("//span[text()='click here']").click();
})