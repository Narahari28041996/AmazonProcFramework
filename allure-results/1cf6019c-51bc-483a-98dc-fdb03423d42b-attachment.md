# Test info

- Name: Display and validate NYC Temperature
- Location: C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:2:5

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
Call log:
  - waiting for locator('//div[@class=\'mus_il\']/child::span[text()=\'12°C\']')

    at C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:10:92
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
> 10 |     const currTemp=await page.locator("//div[@class='mus_il']/child::span[text()='12°C']").innerText();
     |                                                                                            ^ Error: locator.innerText: Target page, context or browser has been closed
  11 |     console.log(currTemp);
  12 |     
  13 | })
```