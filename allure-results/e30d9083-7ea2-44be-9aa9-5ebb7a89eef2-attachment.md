# Test info

- Name: Add to Cart and verify whether the product is displayed
- Location: C:\Users\DELL\Desktop\Project One\tests\addtocartamazon.spec.js:3:5

# Error details

```
Error: expect.toBeChecked: Error: Not a checkbox or radio button
Call log:
  - expect.toBeChecked with timeout 5000ms
  - waiting for locator('//span[@class=\'a-size-medium sc-number-of-items\' and contains(.,\'Subtotal (1 item):\')]/parent::div[@class=\'a-row a-spacing-mini sc-subtotal sc-subtotal-activecart sc-java-remote-feature\']/descendant::span[@class=\'a-size-medium a-color-base sc-price sc-white-space-nowrap\']')

    at C:\Users\DELL\Desktop\Project One\tests\addtocartamazon.spec.js:16:28
```

# Page snapshot

```yaml
- button "Shortcuts menu"
- banner:
  - navigation "Primary":
    - link "Amazon.in":
      - /url: /ref=nav_logo
      - text: .in
    - button "Delivering to Bengaluru 562130 Update location"
    - search:
      - text: All
      - combobox "Select the department you want to search in":
        - option "All Categories" [selected]
        - option "Alexa Skills"
        - option "Amazon Devices"
        - option "Amazon Fashion"
        - option "Amazon Fresh"
        - option "Amazon Pharmacy"
        - option "Appliances"
        - option "Apps & Games"
        - option "Audible Audiobooks"
        - option "Baby"
        - option "Beauty"
        - option "Books"
        - option "Car & Motorbike"
        - option "Clothing & Accessories"
        - option "Collectibles"
        - option "Computers & Accessories"
        - option "Deals"
        - option "Electronics"
        - option "Furniture"
        - option "Garden & Outdoors"
        - option "Gift Cards"
        - option "Grocery & Gourmet Foods"
        - option "Health & Personal Care"
        - option "Home & Kitchen"
        - option "Industrial & Scientific"
        - option "Jewellery"
        - option "Kindle Store"
        - option "Luggage & Bags"
        - option "Luxury Beauty"
        - option "Movies & TV Shows"
        - option "MP3 Music"
        - option "Music"
        - option "Musical Instruments"
        - option "Office Products"
        - option "Pet Supplies"
        - option "Prime Video"
        - option "Shoes & Handbags"
        - option "Software"
        - option "Sports, Fitness & Outdoors"
        - option "Subscribe & Save"
        - option "Tools & Home Improvement"
        - option "Toys & Games"
        - option "Under ₹500"
        - option "Video Games"
        - option "Watches"
      - searchbox "Search Amazon.in"
      - button "Go"
    - link "Choose a language for shopping in Amazon India. The current selection is English (EN).":
      - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
      - img "India"
      - text: EN
    - link "Hello, sign in Account & Lists":
      - /url: https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fcart%2Fview.html%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
    - button "Expand Account and Lists"
    - link "Returns & Orders":
      - /url: /gp/css/order-history?ref_=nav_orders_first
    - link "1 item in cart":
      - /url: /gp/cart/view.html?ref_=nav_cart
    - button "Open All Categories Menu": All
    - list:
      - listitem:
        - link "Fresh":
          - /url: /fresh?ref_=nav_cs_fresh
      - listitem:
        - link "MX Player":
          - /url: /minitv?ref_=nav_avod_desktop_topnav
      - listitem:
        - link "Sell":
          - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
      - listitem:
        - link "Bestsellers":
          - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
      - listitem:
        - link "Today's Deals":
          - /url: /deals?ref_=nav_cs_gb
      - listitem:
        - link "Mobiles":
          - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
      - listitem:
        - link "Fashion":
          - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
      - listitem:
        - link "Customer Service":
          - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
      - listitem:
        - link "Prime":
          - /url: /prime?ref_=nav_cs_primelink_nonmember
        - button "Prime Details"
      - listitem:
        - link "New Releases":
          - /url: /gp/new-releases/?ref_=nav_cs_newreleases
      - listitem:
        - link "Electronics":
          - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
      - listitem:
        - link "Home & Kitchen":
          - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
      - listitem:
        - link "Amazon Pay":
          - /url: /gp/sva/dashboard?ref_=nav_cs_apay
      - listitem:
        - link "Car & Motorbike":
          - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
      - listitem:
        - link "Computers":
          - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
      - listitem:
        - link "Books":
          - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
      - listitem:
        - link "Toys & Games":
          - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
      - listitem:
        - link "Beauty & Personal Care":
          - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
      - listitem:
        - link "Home Improvement":
          - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
      - listitem:
        - link "Gift Cards":
          - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
      - listitem:
        - link "Health, Household & Personal Care":
          - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
      - listitem:
        - link "Sports, Fitness & Outdoors":
          - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
      - listitem:
        - link "Grocery & Gourmet Foods":
          - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
      - listitem:
        - link "Baby":
          - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
      - listitem:
        - link "Custom Products":
          - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
      - listitem:
        - link "Video Games":
          - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
      - listitem:
        - link "Pet Supplies":
          - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
      - listitem:
        - link "Gift Ideas":
          - /url: /gcx/-/gfhz/?ref_=nav_cs_giftfinder
      - listitem:
        - link "AmazonBasics":
          - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
      - listitem:
        - link "Audible":
          - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
      - listitem:
        - link "Subscribe & Save":
          - /url: /auto-deliveries/landing?ref_=nav_cs_sns
- main:
  - heading "All Carts" [level=1]
  - progressbar
  - text: ₹499 Your order is eligible for FREE Delivery. Choose
  - link "FREE Delivery":
    - /url: /gp/help/customer/display.html?nodeId=200904360&pop-up=1
  - text: option at checkout.
  - 'heading "Amazon Subtotal (1 item): ₹3,299.00" [level=3]'
  - checkbox "This order contains a gift"
  - text: This order contains a gift
  - button "Proceed to Buy Buy Amazon items": Proceed to checkout
  - button "EMI Available":
    - heading "EMI Available" [level=5]
  - heading "Shopping Cart" [level=2]
  - list "Shopping Cart":
    - listitem:
      - link "Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43\" AMOLED, 466*466 Pixel Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes & Smartwatch Faces, Upto 5 Day Battery, IP68 (Black)":
        - /url: /gp/product/B0D6YJGGW2/ref=ox_sc_act_title_1?smid=A1JFLV2BUSJ5AK&psc=1
        - heading "Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43\" AMOLED, 466*466 Pixel Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes & Smartwatch Faces, Upto 5 Day Battery, IP68 (Black)" [level=4]
      - text: ₹3,299.00 In stock Eligible for FREE Shipping
      - paragraph
      - checkbox "This will be a gift This is a gift Learn more"
      - text: This will be a gift
      - link "This is a gift Learn more":
        - /url: /gp/help/customer/display.html/ref=ord_cart_shr?pop-up=1&nodeId=200507630
      - text: "Style Name: Dezire FX1 PRO Colour: Carbon Black"
      - button "Delete Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43&quot; AMOLED, 466*466 Pixel Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes &amp; Smartwatch Faces, Upto 5 Day Battery, IP68 (Black)"
      - spinbutton "Quantity is 1": "1"
      - button "Increase quantity by one"
      - button "Delete Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43&quot; AMOLED, 466*466 Pixel Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes &amp; Smartwatch Faces, Upto 5 Day Battery, IP68 (Black)": Delete
      - button "Save for later Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43&quot; AMOLED, 466*466 Pixel Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes &amp; Smartwatch Faces, Upto 5 Day Battery, IP68 (Black)": Save for later
      - button "See more like this Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43&quot; AMOLED, 466*466 Pixel Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes &amp; Smartwatch Faces, Upto 5 Day Battery, IP68 (Black)": See more like this
      - link "Share Fastrack Dezire FX1 PRO Fashion Smart Watch, 1.43&amp;quot; AMOLED, 466*466 Pixel Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes &amp;amp; Smartwatch Faces, Upto 5 Day Battery, IP68 (Black)":
        - /url: "#"
        - text: Share
  - text: "Subtotal (1 item): ₹3,299.00"
  - paragraph: The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
  - paragraph: Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
```

# Test source

```ts
   1 | import { test,expect } from "@playwright/test";
   2 |
   3 | test("Add to Cart and verify whether the product is displayed",async ({browser}) => {
   4 |     const context = await browser.newContext();
   5 |     const page = await context.newPage();
   6 |     await page.goto("https://www.amazon.in/");
   7 |     const title=await page.title();
   8 |     await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
   9 |     await page.getByPlaceholder("Search Amazon.in").fill("fastrack watches for man");
  10 |     await page.keyboard.press("Enter");
  11 |     let price=await page.locator("//div[@class='a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro' and contains(.,'Fastrack Dezire FX1 PRO Fashion Smart Watch')]/descendant::span[@class='a-price-whole']").textContent();
  12 |     console.log(price);
  13 |     await page.click("//div[@class='a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro' and contains(.,'Fastrack Dezire FX1 PRO Fashion Smart Watch')]/descendant::button");
  14 |     await page.locator("//div[@class=' nav-progressive-attribute']/parent::a[@class='nav-a nav-a-2 nav-progressive-attribute']").click();
  15 |     const subtotal=await page.locator("//span[@class='a-size-medium sc-number-of-items' and contains(.,'Subtotal (1 item):')]/parent::div[@class='a-row a-spacing-mini sc-subtotal sc-subtotal-activecart sc-java-remote-feature']/descendant::span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap']"); 
> 16 |     await expect(subtotal).toBeChecked();
     |                            ^ Error: expect.toBeChecked: Error: Not a checkbox or radio button
  17 |     await page.waitForTimeout(3000);
  18 | })
```