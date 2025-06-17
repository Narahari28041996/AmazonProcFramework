# Test info

- Name: Handle Shadow DOM
- Location: C:\Users\DELL\OneDrive\Desktop\Project One\tests\handleshadowrootelements.spec.js:2:5

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//label[text()=\'Username\']')

    at C:\Users\DELL\OneDrive\Desktop\Project One\tests\handleshadowrootelements.spec.js:4:54
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
        - text: Write a script to interact with elements which are in shadow root?
        - complementary:
          - figure:
            - img "signin"
          - heading "Login" [level=1]
          - text: Username
          - textbox "Enter your username"
          - text: Password
          - textbox "Enter your password"
          - button "Login"
      - article:
        - paragraph: Scenarios
        - main:
          - complementary:
            - paragraph: Write a script to interact with element which are in shadow root ?
            - img
          - complementary:
            - paragraph: Write a script to interact with elements which are in closed shadow root?
            - img
  - paragraph: Actions
  - list:
    - listitem:
      - link "Open Shadow Root":
        - /url: /ui/shadow?sublist=0
    - listitem:
      - link "Close Shadow Root":
        - /url: /ui/shadow/closed?sublist=1
    - listitem:
      - link "Nested Shadow Root":
        - /url: /ui/shadow/nested?sublist=2
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
  2 | test("Handle Shadow DOM",async ({page}) => {
  3 |     await page.goto("https://demoapps.qspiders.com/ui/shadow?sublist=0")
> 4 |     await page.locator("//label[text()='Username']").fill("Narahari")
    |                                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  5 |     await page.waitForTimeout(4000)
  6 | })
```