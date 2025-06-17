import { test } from "@playwright/test";
test("Handle Product Dropdown",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    let searchBox = page.getByPlaceholder("Search for Products, Brands and More");
    await searchBox.fill('iphone 16 pro')
    await page.waitForSelector("//ul/li/div/a");
    const allAutoSuggestions=await page.locator("//ul/li/div/a[1]").allTextContents();
    
    for(let sugg of allAutoSuggestions)
    {
        await console.log(sugg);
    }
});