import { test,expect } from "@playwright/test";
test("Built-in Locators",async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //page.getByAltText() - To locate an element, usually image, by its text alternative.
    const logo=await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() - To locate an input by placeholder.
    const username=await page.getByPlaceholder('Username').fill('Admin');
    await expect(username).toBeTruthy();
    const password=await page.getByPlaceholder('Password').fill('admin123');
    await expect(password).toBeTruthy();
})