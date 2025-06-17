# Test info

- Name: Select cheap ticket flight
- Location: C:\Users\DELL\Desktop\Project One\tests\cheapflightpricetest.spec.js:2:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//li[@role=\'presentation\']//span[@class=\'autoCompleteTitle \']').filter({ hasText: 'Chennai, India' })

    at C:\Users\DELL\Desktop\Project One\tests\cheapflightpricetest.spec.js:18:14
```

# Test source

```ts
   1 | import { test,expect } from "@playwright/test";
   2 | test("Select cheap ticket flight",async ({page}) => {
   3 |     await page.goto("https://www.goibibo.com/");
   4 |     await page.locator("//span[@class='logSprite icClose']").click();
   5 |     await page.locator("//span[text()='From']/..").click();
   6 |     await page.locator("//span[text()='From']/..//input").fill("Bengaluru");
   7 |     let li1=await page.locator("//li[@role='presentation']//span[@class='autoCompleteTitle ']");
   8 |     let from=li1.filter({
   9 |         hasText:"Bengaluru, India"
  10 |     })
  11 |     await from.click();
  12 |
  13 |     await page.locator("//span[text()='To']/..//input").fill("Mysore");
  14 |     let li2=await page.locator("//li[@role='presentation']//span[@class='autoCompleteTitle ']");
  15 |     let to=li2.filter({
  16 |         hasText:"Chennai, India"
  17 |     })
> 18 |     await to.click();
     |              ^ Error: locator.click: Target page, context or browser has been closed
  19 |     await page.waitForTimeout(5000);
  20 | });
```