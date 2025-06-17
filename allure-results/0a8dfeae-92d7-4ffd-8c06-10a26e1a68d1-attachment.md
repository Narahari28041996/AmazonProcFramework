# Test info

- Name: Display and validate NYC Temperature
- Location: C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:2:5

# Error details

```
Error: expect(locator(':root')).toHaveURL(expected)

Locator: locator(':root')


Matcher error: expected value must be a string or regular expression

Expected has value: undefined
    at C:\Users\DELL\Desktop\Project One\tests\validateTemperature.spec.js:4:24
```

# Page snapshot

```yaml
- navigation:
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps":
    - img
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/%3Fauthuser%3D0&ec=futura_exp_og_so_72776762_e
- img
- search:
  - img
  - combobox "Search"
  - button "Search by voice":
    - img
  - button "Search by image":
    - img
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "🐙 Today's Googly:"
- link "What’s the colour of an octopus’ blood?"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_PlK6CPKgdDyd_E5eGjS5kvU91vs%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiFhdb4z8CNAxV1sFYBHdYZBFMQ2ZgBCBU
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_PlK6CPKgdDyd_E5eGjS5kvU91vs%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiFhdb4z8CNAxV1sFYBHdYZBFMQ2ZgBCBY
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_PlK6CPKgdDyd_E5eGjS5kvU91vs%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiFhdb4z8CNAxV1sFYBHdYZBFMQ2ZgBCBc
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_PlK6CPKgdDyd_E5eGjS5kvU91vs%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiFhdb4z8CNAxV1sFYBHdYZBFMQ2ZgBCBg
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_PlK6CPKgdDyd_E5eGjS5kvU91vs%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiFhdb4z8CNAxV1sFYBHdYZBFMQ2ZgBCBk
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_PlK6CPKgdDyd_E5eGjS5kvU91vs%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiFhdb4z8CNAxV1sFYBHdYZBFMQ2ZgBCBo
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_PlK6CPKgdDyd_E5eGjS5kvU91vs%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiFhdb4z8CNAxV1sFYBHdYZBFMQ2ZgBCBs
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_PlK6CPKgdDyd_E5eGjS5kvU91vs%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiFhdb4z8CNAxV1sFYBHdYZBFMQ2ZgBCBw
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_PlK6CPKgdDyd_E5eGjS5kvU91vs%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiFhdb4z8CNAxV1sFYBHdYZBFMQ2ZgBCB0
- contentinfo:
  - text: India
  - link "About":
    - /url: https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
```

# Test source

```ts
  1 | import { test,expect } from "@playwright/test";
  2 | test("Display and validate NYC Temperature",async ({page}) => {
  3 |     await page.goto("https://www.google.com/?authuser=0");
> 4 |     await expect(page).toHaveURL();
    |                        ^ Error: expect(locator(':root')).toHaveURL(expected)
  5 |     await page.getByRole("textbox",{name:'highest temperature in newyork'}).click();
  6 |     await expect(page).toBeEnabled();
  7 | })
```