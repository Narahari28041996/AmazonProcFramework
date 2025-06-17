import { test,expect } from "@playwright/test";
test("Handle Shadow DOM",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/shadow?sublist=0")
    await page.getByPlaceholder("Enter your username").fill("Narahari")
})