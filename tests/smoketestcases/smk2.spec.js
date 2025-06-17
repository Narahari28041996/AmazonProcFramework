import {test,expect} from "@playwright/test"

test("Test multiple scripts - 1",async ({page}) => {
    await page.goto('https://www.google.com/?authuser=0')
    console.log("test-1");
    
})
test("Test multiple scripts - 2",async ({page}) => {
    await page.goto('https://www.hoogle.com')
    console.log("test-2");
})
test("Test multiple scripts - 3",async ({page}) => {
    await page.goto('https://www.google345')
    console.log("test-3");
})
test("Test multiple scripts - 4",async ({page}) => {
    await page.goto('https://www.google.com/?authuser=0')
    console.log("test-4");
})