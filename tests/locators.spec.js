import {test,expect} from "@playwright/test"
test("Launch the URL",async({page})=>{
    await page.goto("http://localhost:8888/")
    await page.fill("//input[@name='user_name']","admin")
    await page.fill("//input[@name='user_password']","admin")
    await page.locator("//input[@id='submitButton']").click()
    await page.locator("//img[@src='themes/softed/images/user.PNG']").hover()
    await page.getByRole('link',{name:'Sign Out'}).click()
})