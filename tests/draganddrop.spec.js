import {test,expect} from "@playwright/test"
test("Test Drag and Drop",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
    await page.selectOption("#select1","+91");
    await page.waitForTimeout(4000);
})