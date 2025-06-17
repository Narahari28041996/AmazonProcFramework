# Test info

- Name: Validate available options
- Location: C:\Users\DELL\Desktop\Project One\tests\amazontest.spec.js:3:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('//a[text()=\'Laptops\']')

    at C:\Users\DELL\Desktop\Project One\tests\amazontest.spec.js:11:66
```

# Test source

```ts
   1 | import { test,expect } from "@playwright/test";
   2 |
   3 | test("Validate available options",async ({browser}) => {
   4 |     const context=await browser.newContext();
   5 |     const page=await context.newPage();
   6 |     await page.goto("https://www.amazon.in/");
   7 |     const title=await page.title();
   8 |     await expect(page).toHaveTitle(title);
   9 |     await page.waitForSelector("//a[text()=' Electronics ']/ancestor::ul[@class='nav-ul']");
  10 |     await page.locator("//a[text()=' Electronics ']/ancestor::ul[@class='nav-ul']").click();
> 11 |     let laptopOption=await page.locator("//a[text()='Laptops']").textContent();
     |                                                                  ^ Error: locator.textContent: Target page, context or browser has been closed
  12 |     console.log(laptopOption);
  13 |     
  14 | })
```