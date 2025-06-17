# Test info

- Name: Display and validate NYC Temperature
- Location: C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:2:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//ul[@class=\'G43f7e\']/child::li[@class=\'sbct PZPZlf\']/descendant::div[@class=\'wM6W7d mus_pc\']')

    at C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:10:121
```

# Test source

```ts
   1 | import { test,expect } from "@playwright/test";
   2 | test("Display and validate NYC Temperature",async ({page}) => {
   3 |     await page.goto("https://www.google.com/?authuser=0");
   4 |     await expect(page).toHaveTitle("Google");
   5 |     await expect(page.locator("//textarea[@id='APjFqb']")).toBeVisible();
   6 |     await expect(page.locator("//textarea[@id='APjFqb']")).toBeEnabled();
   7 |     await expect(page.locator("//textarea[@id='APjFqb']")).toBeEmpty();
   8 |     await page.locator("//textarea[@id='APjFqb']").fill("highest temperature in new york");
   9 |     await expect(page.locator("//textarea[@id='APjFqb']")).toHaveValue("highest temperature in new york");
> 10 |     await page.locator("//ul[@class='G43f7e']/child::li[@class='sbct PZPZlf']/descendant::div[@class='wM6W7d mus_pc']").click();
     |                                                                                                                         ^ Error: locator.click: Target page, context or browser has been closed
  11 |     await page.waitForTimeout(3000);
  12 | })
```