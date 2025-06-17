# Test info

- Name: Test Drag and Drop@Narahari
- Location: C:\Users\DELL\Desktop\Project One\tests\draganddrop.spec.js:2:5

# Error details

```
Error: page.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#select1')

    at C:\Users\DELL\Desktop\Project One\tests\draganddrop.spec.js:4:16
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
      - heading "Something went wrong." [level=2]
      - paragraph: Please try again later
  - article:
    - paragraph: Scenarios
    - main:
      - complementary:
        - paragraph: How to select the value from the single select dropdown ?
        - img
      - complementary:
        - paragraph: How to select the values from the Multi select dropdown ?
        - img
      - complementary:
        - paragraph: Select all the valid options from all drop down and click on continue button.
        - img
      - complementary:
        - paragraph: How to select the values from the country drop-down by using the visibletext method.
        - img
      - complementary:
        - paragraph: How to select the values from the state drop-down by using the selectByvalue method.
        - img
      - complementary:
        - paragraph: How to select the values from the city drop-down by using the selectByIndex method.
        - img
  - paragraph: Actions
  - list:
    - listitem:
      - link "Single Select":
        - /url: /ui/dropdown?sublist=0
    - listitem:
      - link "Multi Select":
        - /url: /ui/dropdown/multiSelect?sublist=1
    - listitem:
      - link "Search With Select":
        - /url: /ui/dropdown/search?sublist=2
    - listitem:
      - link "Disabled":
        - /url: /ui/dropdown/disabled?sublist=3
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
  1 | import {test,expect} from "@playwright/test"
  2 | test("Test Drag and Drop@Narahari",async({page})=>{
  3 |     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
> 4 |     await page.selectOption("#select1","+91");
    |                ^ Error: page.selectOption: Test timeout of 30000ms exceeded.
  5 |     await page.waitForTimeout(4000);
  6 | })
```