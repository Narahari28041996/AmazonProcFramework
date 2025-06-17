# Test info

- Name: Display and validate NYC Temperature
- Location: C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:2:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//ul[@class=\'G43f7e\']/child::li[@class=\'sbct PZPZlf\']/descendant::div[@class=\'wM6W7d mus_pc\']')

    at C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:12:31
```

# Test source

```ts
   1 | import { test,expect } from "@playwright/test";
   2 | test("Display and validate NYC Temperature",async ({page}) => {
   3 |     await page.goto("https://www.google.com/?authuser=0");
   4 |     await expect(page).toHaveTitle("Google");
   5 |     const searchBox=await page.locator("//textarea[@id='APjFqb']");
   6 |     await expect(searchBox).toBeVisible();
   7 |     await expect(searchBox).toBeEnabled();
   8 |     await expect(searchBox).toBeEmpty();
   9 |     await searchBox.fill("highest temperature in new york");
  10 |     await expect(searchBox).toHaveValue("highest temperature in new york");
  11 |     const firstAutoSuggestion=await page.locator("//ul[@class='G43f7e']/child::li[@class='sbct PZPZlf']/descendant::div[@class='wM6W7d mus_pc']");
> 12 |     await firstAutoSuggestion.click();
     |                               ^ Error: locator.click: Target page, context or browser has been closed
  13 |     
  14 | })
```