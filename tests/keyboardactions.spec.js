import {test} from "@playwright/test"
test("Keyboard Actions",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.click("//input[@name='username']");
    // await page.keyboard.type("student");
    // await page.click('//input[@name="password"]');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('Shift+S')
    const time = new Date().getTime();
    await page.screenshot({path:`screenShots/page-${time}.png`});
    //await page.keyboard.down("Shift+Control");
    // await page.keyboard.press("a")
    // await page.keyboard.press("b")
    // await page.keyboard.press("c")
    // await page.keyboard.up('Shift')
})