import { test,expect } from "@playwright/test";
test("Uploading a file",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/fileUpload?sublist=0");
    await page.locator("//input[@class='ps-[30%]']").setInputFiles("uploadfile/Passport.pdf");
    await expect(page.locator("//p[text()='Passport.pdf']")).toBeVisible();  
    await page.waitForTimeout(5000);
});