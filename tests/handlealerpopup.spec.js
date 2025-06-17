import { test,expect } from "@playwright/test";
test("Handle alert popup window",async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await expect(page).toHaveURL("https://demo.automationtesting.in/Alerts.html");
    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        await dialog.accept()
    })
     await page.locator("//button[@class='btn btn-danger']").click();
})