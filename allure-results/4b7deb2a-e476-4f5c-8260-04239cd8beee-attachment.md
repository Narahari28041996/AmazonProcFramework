# Test info

- Name: Work on SBI Site
- Location: C:\Users\DELL\Desktop\Project One\tests\sbicase.spec.js:2:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//span[text()=\'click here\']')

    at C:\Users\DELL\Desktop\Project One\tests\sbicase.spec.js:8:55
```

# Test source

```ts
  1 | import { test,expect } from "@playwright/test";
  2 | test("Work on SBI Site",async ({browser}) => {
  3 |     const context=await browser.newContext();
  4 |     const page=await context.newPage();
  5 |     await page.goto("https://retail.onlinesbi.sbi/");
  6 |     await expect(page).toHaveTitle("State Bank of India");
  7 |     await page.getByRole("link",{name:"Banking Forms"}).click();
> 8 |     await page.locator("//span[text()='click here']").click();
    |                                                       ^ Error: locator.click: Target page, context or browser has been closed
  9 | })
```