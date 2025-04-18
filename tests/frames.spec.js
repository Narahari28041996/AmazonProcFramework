/*Handling single frame*/
import { test } from "@playwright/test";
// test("frames",async({page}) => {
//     await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0");
//     let frame1=await page.frameLocator('//iframe[@class="w-full h-96"]')
//     await frame1.locator('#username').fill("woodinarahari@gmail.com")
//     await page.waitForTimeout(3000);
// })

/*Handling nested frames*/
test("Handling Nested Frames",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1");
    let frame1=page.frameLocator('//iframe[@class="w-full h-96"]')
    let email=await frame1.locator('//p[text()="Admin@gmail.com"]').textContent()
    let frame2=frame1.frameLocator('//div[@class="form_container"]/iframe')
    await frame2.locator('#email').fill(email)
    await page.waitForTimeout(3000)
})