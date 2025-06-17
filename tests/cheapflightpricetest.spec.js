import { test,expect } from "@playwright/test";
test("Select cheap ticket flight",async ({page}) => {
    await page.goto("https://www.goibibo.com/");
    await page.locator("//span[@class='logSprite icClose']").click();
    await page.locator("//span[text()='From']/..").click();
    await page.locator("//span[text()='From']/..//input").fill("Bengaluru");
    let li1=await page.locator("//li[@role='presentation']//span[@class='autoCompleteTitle ']");
    let from=li1.filter({
        hasText:"Bengaluru, India"
    })
    await from.click();

    await page.locator("//span[text()='To']/..//input").fill("Chennai");
    let li2=await page.locator("//li[@role='presentation']//span[@class='autoCompleteTitle ']");
    let to=li2.filter({
        hasText:"Chennai, India"
    })
    await to.click();
    await page.locator("//span[text()='Departure']/..").click();
    let li3=await page.locator("(//div[@class='DayPicker-Month'])[1]//div[@class='DayPicker-Body']//div[@class='DayPicker-Day']//p");
    let departureDate=li3.filter({
        hasText:"20"
    })
    await departureDate.click();
    await page.locator("//span[text()='SEARCH FLIGHTS']").click();
    await page.locator("//span[text()='GOT IT']").click();
    let price=await page.locator("//div[@class='moveUp5 textRight flexOne']//span[@class=' fontSize18 blackFont']").all();
    let prices=[];
    for(let a of price)
    {
        let p=await a.textContent()
        let p1=await p.slice(1,p.length);
        prices.push(p1);
    }
    let p2=prices.sort((a,b)=>{return a-b});
    console.log(p2);
    console.log(`Least flight price is ${p2[0]}`);
            
    await page.waitForTimeout(3000);
});