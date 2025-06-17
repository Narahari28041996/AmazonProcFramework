# Test info

- Name: Display and validate NYC Temperature
- Location: C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:2:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('//textarea[@id=\'APjFqb\']')

    at C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:6:15
```

# Test source

```ts
  1 | import { test,expect } from "@playwright/test";
  2 | test("Display and validate NYC Temperature",async ({page}) => {
  3 |     await page.goto("https://www.google.com/?authuser=0");
  4 |     await expect(page).toHaveTitle("Google");
  5 |     let searchTab=await page.locator("//textarea[@id='APjFqb']");
> 6 |     searchTab.fill("highest temperature in new york");
    |               ^ Error: locator.fill: Test ended.
  7 |     
  8 | })
```