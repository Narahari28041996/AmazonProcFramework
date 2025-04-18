import {test} from "@playwright/test"
test("Copy and Paste Action",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator("//input[@id='name']").click()
    await page.keyboard.type("Narahari")
    await page.keyboard.press('Control+A')
   // await page.keyboard.down('Control')
    await page.keyboard.press('Control+c')
    await page.keyboard.press("Tab")
    //await page.keyboard.up('Control')
   // await page.keyboard.press('Backspace')
    //await page.keyboard.down('Control')
    await page.keyboard.press('Control+v')
    //await page.keyboard.up('Control')
})