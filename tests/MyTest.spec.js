import { test,expect } from "@playwright/test";

test('Homepage',async({page})=>{
    await page.goto('https://demoblaze.com/');
    const pageTitle=await page.title();
    console.log("Page title is:",pageTitle);
    await expect(page).toHaveTitle('STORE');
    await page.close();
})