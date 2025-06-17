# Test info

- Name: Test Spicejet conditions
- Location: C:\Users\DELL\Desktop\Project One\tests\testspicejet.spec.js:2:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\DELL\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test,expect } from "@playwright/test";
>  2 | test("Test Spicejet conditions",async ({page}) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at C:\Users\DELL\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
   3 |     await page.goto("https://www.spicejet.com/");
   4 |     await expect(page).toHaveURL("https://www.spicejet.com/");
   5 |     await expect(page).toHaveTitle("SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets");
   6 |     await page.locator("//div[text()='From']/../..").click();
   7 |     await expect(page.locator("//div[text()='From']/../..")).toBeEmpty();
   8 |     await expect(page.locator("//div[text()='From']/../..")).toBeEnabled();
   9 |     await expect(page.locator("//div[text()='From']/../..")).toBeEditable();
  10 |     await page.locator("//div[text()='From']/..").click();
  11 |     await expect(page.locator("//div[text()='From']/..")).toHaveText('From');
  12 |     await page.locator("//div[text()='From']/..").fill("Bengaluru");
  13 |     let li1=await page.locator("//div[@class='css-1dbjc4n r-b5h31w r-95jzfe']/descendant::div[@class='css-76zvg2 r-cqee49 r-ubezar r-1kfrs79']");
  14 |     let fromPlace=li1.filter({
  15 |         hasText:"Bengaluru"
  16 |     })
  17 |     await fromPlace.click();
  18 | })
```