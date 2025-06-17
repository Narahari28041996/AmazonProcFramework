# Test info

- Name: Add Area Code and Add Retailer Data
- Location: C:\Users\DELL\Desktop\Project One\tests\amazonprocurementtest.spec.js:4:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//a[text()=\'Manage Area\']')

    at ProcurementAreaAndRetailerDataSystemTest.addAreaAndRetailerDetails (C:\Users\DELL\Desktop\Project One\pageobjects\amazon.procurement.areaandretailersystemtest.js:33:29)
    at C:\Users\DELL\Desktop\Project One\tests\amazonprocurementtest.spec.js:7:5
```

# Test source

```ts
   1 | class ProcurementAreaAndRetailerDataSystemTest {
   2 |     constructor(page) {
   3 |         this.page = page;
   4 |         this.procurementUsername = page.locator("//input[@name='txtUsername']");
   5 |         this.procurementPassword = page.locator("//input[@name='txtPassword']");
   6 |         this.selectLoginType = page.locator("//select[@name='login_type']");
   7 |         this.loginBtn = page.locator("//input[@value='Login']");
   8 |         this.areaLink = page.locator("//a[text()='Manage Area']");
   9 |         this.addAreaBtn = page.locator("//input[@value='+ Add Area']");
  10 |         this.areanameEdit = page.locator('#areaName');
  11 |         this.areacodeEdit = page.locator('#areaCode');
  12 |         this.addareabtnClick = page.locator("//input[@value='Add Area']");
  13 |         this.navigateToAddRetailerLink = page.locator("//a[text()='Add Retailers']");
  14 |         this.retailUsn = page.getByPlaceholder("Username");
  15 |         this.retailPwd = page.getByPlaceholder("Password");
  16 |         this.selectAreaCode = page.locator("#retailer\\:areaCode");
  17 |         this.phoneEdit = page.getByPlaceholder("Phone");
  18 |         this.emailEdit = page.getByPlaceholder("Email");
  19 |         this.addressEdit = page.getByPlaceholder("Address");
  20 |         this.addRetailerBtn = page.locator("//input[@value='Add Retailer']");
  21 |         this.logoutBtn = page.locator("//input[@value='Log out']");
  22 |     }
  23 |
  24 |     async url(url) {
  25 |         await this.page.goto(url);
  26 |     }
  27 |
  28 |     async addAreaAndRetailerDetails(username, password, login_type, area_name, area_code, retailer_usn, retailer_pwd, select_area_code, phone, email, address) {
  29 |         await this.procurementUsername.fill(username);
  30 |         await this.procurementPassword.fill(password);
  31 |         await this.selectLoginType.selectOption(login_type);
  32 |         await this.loginBtn.click();
> 33 |         await this.areaLink.click();
     |                             ^ Error: locator.click: Target page, context or browser has been closed
  34 |         await this.addAreaBtn.click();
  35 |         await this.areanameEdit.fill(area_name);
  36 |         await this.areacodeEdit.fill(area_code);
  37 |         await this.addareabtnClick.click();
  38 |         await this.navigateToAddRetailerLink.click();
  39 |         await this.retailUsn.fill(retailer_usn);
  40 |         await this.retailPwd.fill(retailer_pwd);
  41 |         await this.selectAreaCode.selectOption(select_area_code);
  42 |         await this.phoneEdit.fill(phone);
  43 |         await this.emailEdit.fill(email);
  44 |         await this.addressEdit.fill(address);
  45 |         await this.addRetailerBtn.click();
  46 |         await this.logoutBtn.click();
  47 |     }
  48 | }
  49 | export default ProcurementAreaAndRetailerDataSystemTest;
```