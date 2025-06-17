# Test info

- Name: Add to Cart and verify whether the product is displayed
- Location: C:\Users\DELL\Desktop\Project One\tests\addtocartamazon.spec.js:3:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('//span[text()=\'Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43" AMOLED, 466 * 466 Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes & Smartwatch Faces, Upto 5 Day Battery, IP68 (Rose Gold)\']/ancestor::div[@class=\'a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro\']/descendant::span[@class=\'a-price-whole\']')

    at C:\Users\DELL\Desktop\Project One\tests\addtocartamazon.spec.js:11:393
```

# Test source

```ts
   1 | import { test,expect } from "@playwright/test";
   2 |
   3 | test("Add to Cart and verify whether the product is displayed",async ({browser}) => {
   4 |     const context = await browser.newContext();
   5 |     const page = await context.newPage();
   6 |     await page.goto("https://www.amazon.in/");
   7 |     const title=await page.title();
   8 |     await expect(page).toHaveTitle(title);
   9 |     await page.getByPlaceholder("Search Amazon.in").fill("fastrack watches for man");
  10 |     await page.keyboard.press("Enter");
> 11 |     let price=await page.locator(`//span[text()='Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43" AMOLED, 466 * 466 Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes & Smartwatch Faces, Upto 5 Day Battery, IP68 (Rose Gold)']/ancestor::div[@class='a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro']/descendant::span[@class='a-price-whole']`).textContent();
     |                                                                                                                                                                                                                                                                                                                                                                                                         ^ Error: locator.textContent: Target page, context or browser has been closed
  12 |     console.log(price);
  13 |     // await page.click("//div[@class='a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro' and contains(.,'Fastrack Dezire FX1 PRO Fashion Smart Watch')]/descendant::button");
  14 |     // await page.locator("//div[@class=' nav-progressive-attribute']/parent::a[@class='nav-a nav-a-2 nav-progressive-attribute']").click();
  15 |     // let subtotalText=await page.locator("//span[@class='a-size-medium sc-number-of-items' and contains(.,'Subtotal (1 item):')]/parent::div[@class='a-row a-spacing-mini sc-subtotal sc-subtotal-activecart sc-java-remote-feature']/descendant::span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap']").textContent();
  16 |     // console.log(subtotalText.slice(1,6));    
  17 |     // await expect(subtotalText).toContain(price);
  18 | })
```