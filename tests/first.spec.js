import {test,expect} from "@playwright/test"
test("Launch the URL",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
await page.locator('#domain1').check();
await expect(page.locator('#domain1')).toBeChecked();

//     await page.fill("//input[@name='username']","student")
//     await page.fill("//input[@name='password']","Password123")
//    await page.locator("//input[@id='submitButton']").click()

   //expect usage
   //await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")

   //handle radio button
   //await page.locator('#attended').check();

//    await expect(page).toHaveTitle("Test Login | Practice Test Automation")
//    let uuu=await page.url()
//    await expect(uuu).toContain("login")
//    let tt=await page.title()
//    await expect(tt).toBe('Test Login | Practice Test Automation')

//    await expect(page.locator("//input[@name='password']")).toBeVisible();

//    await expect(page.locator("//button[@id='submit']")).toHaveText('Submit');
// })

// test("Launch the URL again",async({browser})=>{
//     let context=await browser.newContext()
//     let page=await context.newPage()
//     await page.goto('https://practicetestautomation.com/practice-test-login/')
// })
//     await page.goto("http://49.249.28.218:8081/AppServer/Sales_And_Inventory_System/pages/login.php");
//     await page.locator("//input[@name='user']").fill("unguardable")
//     await page.locator("//input[@name='password']").fill("admin")
//     await page.locator("//button[text()='Login']").click()
//     page.on('dialog', dialog => dialog.accept());
//     await page.getByRole('button').click();
 })