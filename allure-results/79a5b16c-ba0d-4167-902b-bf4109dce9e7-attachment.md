# Test info

- Name: Handling Nested Frames@Narahari
- Location: C:\Users\DELL\Desktop\Project One\tests\frames.spec.js:11:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('//iframe[@class="w-full h-96"]').contentFrame().locator('//p[text()="Admin@gmail.com"]')

    at C:\Users\DELL\Desktop\Project One\tests\frames.spec.js:14:69
```

# Test source

```ts
   1 | /*Handling single frame*/
   2 | import { test } from "@playwright/test";
   3 | // test("frames",async({page}) => {
   4 | //     await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0");
   5 | //     let frame1=await page.frameLocator('//iframe[@class="w-full h-96"]')
   6 | //     await frame1.locator('#username').fill("woodinarahari@gmail.com")
   7 | //     await page.waitForTimeout(3000);
   8 | // })
   9 |
  10 | /*Handling nested frames*/
  11 | test("Handling Nested Frames@Narahari",async({page})=>{
  12 |     await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1");
  13 |     let frame1=page.frameLocator('//iframe[@class="w-full h-96"]')
> 14 |     let email=await frame1.locator('//p[text()="Admin@gmail.com"]').textContent()
     |                                                                     ^ Error: locator.textContent: Target page, context or browser has been closed
  15 |     let frame2=frame1.frameLocator('//div[@class="form_container"]/iframe')
  16 |     await frame2.locator('#email').fill(email)
  17 |     await page.waitForTimeout(3000)
  18 | })
```