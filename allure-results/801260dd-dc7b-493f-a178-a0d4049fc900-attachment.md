# Test info

- Name: Test Spicejet conditions
- Location: C:\Users\DELL\Desktop\Project One\tests\testspicejet.spec.js:2:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('undefined-month-July-2025').getByTestId('undefined-calendar-day-24')

    at C:\Users\DELL\Desktop\Project One\tests\testspicejet.spec.js:23:98
```

# Test source

```ts
   1 | import { test,expect,chromium } from "@playwright/test";
   2 | test("Test Spicejet conditions",async () => {
   3 |     const browser=await chromium.launch({headless:false});
   4 |     const context=await browser.newContext({
   5 |         permissions:[]
   6 |     });
   7 |     const page=await context.newPage();
   8 |     await page.goto("https://www.spicejet.com/");
   9 |     await expect(page).toHaveTitle("SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets");
  10 |     //Choose Bengaluru in the From Dropdown
  11 |     const fromInput=await page.locator("//div[text()='From']/..//input[@class='css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu']");
  12 |     await fromInput.click();
  13 |     await fromInput.fill("Bengaluru");
  14 |
  15 |     //Choose Mangaluru in the To dropdown    
  16 |     const toInput=await page.locator("//div[text()='To']/..//input[@class='css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu']");
  17 |     await toInput.click();
  18 |     await toInput.fill("Mangaluru");
  19 |
  20 |     //Select 24th June 2025 from the Departure Date calendar
  21 |     const deptDateInput=await page.getByTestId("departure-date-dropdown-label-test-id");
  22 |     await deptDateInput.click();
> 23 |     await page.getByTestId("undefined-month-July-2025").getByTestId("undefined-calendar-day-24").click();
     |                                                                                                  ^ Error: locator.click: Target page, context or browser has been closed
  24 |     await page.pause();
  25 | });
```