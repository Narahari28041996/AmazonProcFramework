import { test,expect,chromium } from "@playwright/test";
test("Test Spicejet conditions",async () => {
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext({
        permissions:[]
    });
    const page=await context.newPage();
    await page.goto("https://www.spicejet.com/");
    await expect(page).toHaveTitle("SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets");
    
    //Choose Bengaluru in the From Dropdown
    const fromInput=await page.locator("//div[text()='From']/..//input[@class='css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu']");
    await fromInput.click();
    await fromInput.fill("Mumbai");

    //Check whether Mumbai is displayed or not
    await expect(page.locator("//input[@value='Mumbai (BOM)']")).toBeVisible();

    //Choose Mangaluru in the To dropdown    
    const toInput=await page.locator("//div[text()='To']/..//input[@class='css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu']");
    await toInput.click();
    await toInput.fill("Delhi");

    //Check whether Delhi is displayed or not
    await expect(page.locator("//input[@value='Delhi (DEL)']")).toBeVisible();

    //Select 24th June 2025 from the Departure Date calendar
    //await page.getByTestId("departure-date-dropdown-label-test-id").click();
    
    //Navigate to the next months
    //await page.click("//div[@class='css-1dbjc4n r-1loqt21 r-u8s1d r-11xbo3g r-1v2oles r-1otgn73 r-16zfatd r-eafdt9 r-1i6wzkk r-lrvibr r-184en5c']");
    
    //Select July 27th 2025
    await page.click("//div[text()='July ']/../..//div[@data-testid='undefined-calendar-day-27']");

    //Check whether 24th June 2025 selected is visible or not
    await expect(page.locator("//div[text()='Sun, 27 Jul 2025']")).toContainText("Sun, 27 Jul 2025");

    //Select 2 adults under Passengers dropdown
    await page.locator("//div[text()='Passengers']/..").click();
    await page.getByTestId("Adult-testID-plus-one-cta").click();

    //Check whether 2 adults text is displayed or not
    await expect(page.locator("//div[text()='2 Adults']")).toContainText("2 Adults");

    //Check whether the Search Flight button is enabled or not
    await expect(page.locator("//div[text()='Search Flight']/..")).toBeEnabled();

    //Click on Search Flight button
    await page.locator("//div[text()='Search Flight']/..").click();
});