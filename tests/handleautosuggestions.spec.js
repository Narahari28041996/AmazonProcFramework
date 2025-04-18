import {test,expect} from "@playwright/test"
test("Handle Autosuggestions",async({page})=>{
    await page.goto("https://www.google.com/");
    let searchBox=page.locator("#APjFqb");
    await searchBox.fill('k2');
    await page.waitForSelector("//ul/li/div")
    const a=await page.locator("//ul/li/div/div[2]/div[1]").allTextContents();
    //console.log(a.length);
    //console.log(a[0]);    
    // await page.waitForTimeout(5000)
    for (let ele of a) {
       await console.log(ele);                
    }
})