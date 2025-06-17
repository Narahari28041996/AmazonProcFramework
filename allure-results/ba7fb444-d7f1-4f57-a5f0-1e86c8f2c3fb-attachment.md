# Test info

- Name: Display and validate NYC Temperature
- Location: C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:2:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('//textarea[@id=\'APjFqb\']')
    - locator resolved to <textarea value="" name="q" rows="1" id="APjFqb" autofocus="" class="gLFyf" title="Search" placeholder="" role="combobox" maxlength="2048" autocorrect="off" aria-owns="Alh6id" autocomplete="off" spellcheck="false" aria-label="Search" autocapitalize="off" aria-expanded="false" aria-haspopup="false" aria-controls="Alh6id" jsaction="paste:puy29d" aria-autocomplete="both" data-ved="0ahUKEwjXt_aa0cCNAxVncvUHHZhhDe8Q39UDCAU"></textarea>
    - fill("highest temperature in new york")
  - attempting fill action

    at C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:6:15
```

# Test source

```ts
  1 | import { test,expect } from "@playwright/test";
  2 | test("Display and validate NYC Temperature",async ({page}) => {
  3 |     await page.goto("https://www.google.com/?authuser=0");
  4 |     await expect(page).toHaveTitle("Google");
  5 |     let searchTab=await page.locator("//textarea[@id='APjFqb']");
> 6 |     searchTab.fill("highest temperature in new york");
    |               ^ Error: locator.fill: Test ended.
  7 |     
  8 | })
```