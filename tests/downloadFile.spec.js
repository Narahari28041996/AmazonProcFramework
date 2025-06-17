import { test,expect } from "@playwright/test";
import fs from 'fs';
test("Download a file and validate it",async ({page}) => {
    //Go to demoapps.qspiders.com website
    await page.goto("https://commitquality.com/practice-file-download");
    //Validate the title of the URL
    await expect(page).toHaveTitle("CommitQuality - Test Automation Demo");
    //Wait for the download to start after clicking the download link
    const [download]=await Promise.all([
        page.waitForEvent('download'),
        page.click("#downloadButton")
    ])
    //Save the download to a path
    const suggestedFilename=download.suggestedFilename();
    const downloadPath=await download.path();

    //Validate download by checking whether the file exists
    expect(downloadPath).not.toBeNull();
    expect(fs.existsSync(downloadPath)).toBe(true);

    console.log(`Downloaded file name: ${suggestedFilename}`);
});