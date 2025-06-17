# Test info

- Name: Download a file and validate it
- Location: C:\Users\DELL\Desktop\Project One\tests\downloadFile.spec.js:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: getByPlaceholder('Enter text here')
Expected string: "Dowload my copy"
Received string: "Download my copy"
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for getByPlaceholder('Enter text here')
    9 × locator resolved to <textarea id="writeArea" name="textarea" placeholder="Enter text here" class="w-full h-40 p-2 border rounded-lg mb-4">Download my copy</textarea>
      - unexpected value "Download my copy"

    at C:\Users\DELL\Desktop\Project One\tests\downloadFile.spec.js:17:60
```

# Page snapshot

```yaml
- link:
  - /url: /
- button "Practice Session"
- combobox:
  - option "UI" [selected]
  - option "API"
  - option "DataBase"
  - option "UI Integrations"
- main:
  - article:
    - complementary:
      - complementary:
        - text: Write a script to handle download popup?
        - heading "Download" [level=1]
        - heading "Text File Downloader" [level=1]
        - paragraph: Enter some text on the provided field below and then click on download
        - textbox "Enter text here": Download my copy
        - textbox "Filename": mytextfile.txt
        - button "Download"
      - article:
        - paragraph: Scenarios
        - main:
          - complementary:
            - paragraph: Write a script to handle download popup?
            - img
  - paragraph: Actions
  - list:
    - listitem:
      - link "Default":
        - /url: /download?sublist=0
- complementary:
  - img "searchIcon"
  - textbox "Search..."
  - list:
    - listitem:
      - text: Web Elements
      - img
    - list:
      - listitem:
        - link "Text Field":
          - /url: /ui
      - listitem:
        - link "Button":
          - /url: /ui/button
      - listitem:
        - link "Link":
          - /url: /ui/link
      - listitem:
        - link "Check Box":
          - /url: /ui/checkbox
      - listitem:
        - link "Radio Button":
          - /url: /ui/radio
      - listitem:
        - link "Image":
          - /url: /ui/image
      - listitem:
        - link "Toggle":
          - /url: /ui/toggle
      - listitem:
        - link "Slider":
          - /url: /ui/slider
      - listitem:
        - link "Dropdown":
          - /url: /ui/dropdown
      - listitem:
        - link "Web Table":
          - /url: /ui/table
      - listitem:
        - link "FormValidation":
          - /url: /ui/formValidation
      - listitem:
        - link "Captcha":
          - /url: /ui/captcha
      - listitem:
        - link "Audio":
          - /url: /ui/audio
      - listitem:
        - link "Video":
          - /url: /ui/video
    - listitem:
      - text: X Path
      - img
    - listitem:
      - text: Popups
      - img
    - listitem:
      - text: Date & Time Picker
      - img
    - listitem:
      - text: Scroll
      - img
    - listitem:
      - text: Synchronization
      - img
    - listitem:
      - text: Frames
      - img
    - listitem:
      - text: Mouse Actions
      - img
    - listitem:
      - text: Keyboard Actions
      - img
    - listitem:
      - text: Shadow Root Elements
      - img
    - listitem:
      - text: Others
      - img
```

# Test source

```ts
   1 | import { test,expect } from "@playwright/test";
   2 | import fs from 'fs';
   3 | test("Download a file and validate it",async ({page}) => {
   4 |     //Go to demoapps.qspiders.com website
   5 |     await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
   6 |     //Validate the title of the URL
   7 |     await expect(page).toHaveTitle("DemoApps | Qspiders | Download");
   8 |     //Check whether the text box is empty or not
   9 |     await expect(page.getByPlaceholder("Enter text here")).toBeEmpty();
  10 |     //Check whether the text box is enabled or not
  11 |     await expect(page.getByPlaceholder("Enter text here")).toBeEnabled();
  12 |     //Check whether the text box is editable or not
  13 |     await expect(page.getByPlaceholder("Enter text here")).toBeEditable();
  14 |     //Enter the text
  15 |     await page.getByPlaceholder("Enter text here").fill("Download my copy");
  16 |     //Check whether the text entered is correct or not
> 17 |     await expect(page.getByPlaceholder("Enter text here")).toContainText("Dowload my copy");
     |                                                            ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  18 |     //Wait for the download to start after clicking the download link
  19 |     const [download]=await Promise.all([
  20 |         page.waitForEvent('download'),
  21 |         page.click("#downloadButton")
  22 |     ])
  23 |     //Save the download to a path
  24 |     const suggestedFilename=download.suggestedFilename();
  25 |     const downloadPath=await download.path();
  26 |
  27 |     //Validate download by checking whether the file exists
  28 |     expect(downloadPath).not.toBeNull();
  29 |     expect(fs.existsSync(downloadPath)).toBe(true);
  30 |
  31 |     console.log(`Downloaded file name: ${suggestedFilename}`);
  32 | });
```