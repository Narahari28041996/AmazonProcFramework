import {test,expect} from "@playwright/test";
test("tabs",async({page})=>{
    await page.goto("https://www.amazon.in/s?k=iphone+16pro+max&crid=11XPSERA5QQK8&sprefix=iphone+16pro+max%2Caps%2C258&ref=nb_sb_noss_1");
    await page.locator("//span[text()='iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Black Titanium']");
    let u=await page.url()
    console.log(u);
})
test.only("",async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.amazon.in/s?k=iphone+16pro+max&crid=11XPSERA5QQK8&sprefix=iphone+16pro+max%2Caps%2C258&ref=nb_sb_noss_1");
    let p1=await page.url();
    let product=await page.locator("//span[text()='iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Black Titanium']");
    let [newPage]=await Promise.all([
        context.waitForEvent('page'),
        product.click()])
    await expect(newPage).not.toHaveURL(p1)
    console.log(await page.title());
    console.log(await newPage.url());  
})