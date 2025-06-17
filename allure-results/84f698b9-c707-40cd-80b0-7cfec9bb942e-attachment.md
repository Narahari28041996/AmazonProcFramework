# Test info

- Name: Display and validate NYC Temperature
- Location: C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:2:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//span[text()=\'highest temperature in new york\']/ancestor::div[@class=\'wM6W7d mus_pc\']')
    2 × waiting for" https://www.google.com/search?q=highest+temperature+in+new+york&sca_esv=5eae2f8f5e851a2c&authuser=0&source=hp&ei=ejM0aIqQCPfl2roPwYu6mA8&iflsig=AOw8s4IAAAAAaDRBipqZaqc_FmwIFuOZOns0ajS-KLgh&oq=highest…" navigation to finish...
      - navigated to "https://www.google.com/search?q=highest+temperature+in+new+york&sca_esv=5eae2f8f5e851a2c&authuser=0&source=hp&ei=ejM0aIqQCPfl2roPwYu6mA8&iflsig=AOw8s4IAAAAAaDRBipqZaqc_FmwIFuOZOns0ajS-KLgh&oq=highest…"

    at C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:10:114
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
> 10 |     await page.locator("//span[text()='highest temperature in new york']/ancestor::div[@class='wM6W7d mus_pc']").click(); 
     |                                                                                                                  ^ Error: locator.click: Target page, context or browser has been closed
  11 | })
```