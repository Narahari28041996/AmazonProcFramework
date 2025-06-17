import { test,expect } from "@playwright/test";

test("Validate available options",async ({browser}) => {
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.amazon.in/");
    const title=await page.title();
    await expect(page).toHaveTitle(title);
    await page.waitForSelector("//div[@class='nav-div']/child::a[@class='nav-a  ' and contains(.,'Electronics')]");
    await page.locator("//div[@class='nav-div']/child::a[@class='nav-a  ' and contains(.,'Electronics')]").click();
    await expect(page.locator("//div[@class='nav-div']/child::a[@class='nav-a  ' and contains(.,'Electronics')]")).toBeVisible();
    await page.locator("//span[@class='nav-a-content' and contains(.,'Laptops & Accessories')]").hover();
    let laptopOption=await page.locator("//a[text()='Laptops']").textContent();
    console.log(laptopOption);
    await expect(laptopOption).toHaveTitle();
    await page.locator("//span[@class='nav-a-content' and contains(.,'Audio')]").hover();
    let headphoneOption=await page.locator("//a[text()='Headphones']").textContent();
    console.log(headphoneOption);  
    await expect(headphoneOption).toHaveTitle();  
});