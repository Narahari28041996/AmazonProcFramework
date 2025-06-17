import { test,expect } from "@playwright/test";

test("Add to Cart and verify whether the product is displayed",async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.amazon.in/");
    const title=await page.title();
    await expect(page).toHaveTitle(title);
    await page.getByPlaceholder("Search Amazon.in").fill("fastrack watches for man");
    await page.keyboard.press("Enter");
    await page.waitForSelector(`//span[text()='Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43" AMOLED, 466 * 466 Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes & Smartwatch Faces, Upto 5 Day Battery, IP68 (Rose Gold)']/ancestor::div[@class='a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro']/descendant::span[@class='a-price-whole']`);
    let price=await page.locator(`//span[text()='Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43" AMOLED, 466 * 466 Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes & Smartwatch Faces, Upto 5 Day Battery, IP68 (Rose Gold)']/ancestor::div[@class='a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro']/descendant::span[@class='a-price-whole']`).textContent();
    console.log(price);
    await page.click("//div[@class='a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro' and contains(.,'Fastrack Dezire FX1 PRO Fashion Smart Watch')]/descendant::button");
    await page.locator("//div[@class=' nav-progressive-attribute']/parent::a[@class='nav-a nav-a-2 nav-progressive-attribute']").click();
    let subtotalText=await page.locator("//span[@class='a-size-medium sc-number-of-items' and contains(.,'Subtotal (1 item):')]/parent::div[@class='a-row a-spacing-mini sc-subtotal sc-subtotal-activecart sc-java-remote-feature']/descendant::span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap']").textContent();
    console.log(subtotalText.slice(1,6));    
    await expect(subtotalText).toContain(price);
})