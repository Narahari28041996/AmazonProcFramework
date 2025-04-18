import {test,expect} from "@playwright/test"
test("Launch the URL",async({page})=>{
    await page.goto("http://localhost:8888/")
    await page.screenshot({path:'screenShots/URL.png'})
   

    //if multiple screenshots
    const time = new Date().getTime();
    await page.screenshot({path:`screenShots/page-${time}.png`});
})