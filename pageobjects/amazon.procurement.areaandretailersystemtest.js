class ProcurementAreaAndRetailerDataSystemTest {
    constructor(page) {
        this.page = page;
        this.procurementUsername = page.locator("//input[@name='txtUsername']");
        this.procurementPassword = page.locator("//input[@name='txtPassword']");
        this.selectLoginType = page.locator("//select[@name='login_type']");
        this.loginBtn = page.locator("//input[@value='Login']");
        this.areaLink = page.locator("//a[text()='Manage Area']");
        this.addAreaBtn = page.locator("//input[@value='+ Add Area']");
        this.areanameEdit = page.locator('#areaName');
        this.areacodeEdit = page.locator('#areaCode');
        this.addareabtnClick = page.locator("//input[@value='Add Area']");
        this.navigateToAddRetailerLink = page.locator("//a[text()='Add Retailers']");
        this.retailUsn = page.getByPlaceholder("Username");
        this.retailPwd = page.getByPlaceholder("Password");
        this.selectAreaCode = page.locator("#retailer\\:areaCode");
        this.phoneEdit = page.getByPlaceholder("Phone");
        this.emailEdit = page.getByPlaceholder("Email");
        this.addressEdit = page.getByPlaceholder("Address");
        this.addRetailerBtn = page.locator("//input[@value='Add Retailer']");
        this.logoutBtn = page.locator("//input[@value='Log out']");
    }

    async url(url) {
        await this.page.goto(url);
    }

    async addAreaAndRetailerDetails(username, password, login_type, area_name, area_code, retailer_usn, retailer_pwd, select_area_code, phone, email, address) {
        await this.procurementUsername.fill(username);
        await this.procurementPassword.fill(password);
        await this.selectLoginType.selectOption(login_type);
        await this.loginBtn.click();
        await this.areaLink.click();
        await this.addAreaBtn.click();
        await this.areanameEdit.fill(area_name);
        await this.areacodeEdit.fill(area_code);
        await this.addareabtnClick.click();
        await this.navigateToAddRetailerLink.click();
        await this.retailUsn.fill(retailer_usn);
        await this.retailPwd.fill(retailer_pwd);
        await this.selectAreaCode.selectOption(select_area_code);
        await this.phoneEdit.fill(phone);
        await this.emailEdit.fill(email);
        await this.addressEdit.fill(address);
        await this.addRetailerBtn.click();
        await this.logoutBtn.click();
    }
}
export default ProcurementAreaAndRetailerDataSystemTest;