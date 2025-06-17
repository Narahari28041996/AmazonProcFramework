class ProcurementProductData{
    constructor(page){
        this.page=page
        this.procurementUsername = page.locator("//input[@name='txtUsername']");
        this.procurementPassword = page.locator("//input[@name='txtPassword']");
        this.selectLoginType = page.locator("//select[@name='login_type']");
        this.loginBtn = page.locator("//input[@value='Login']");
        this.navigateToAddProductLink=page.locator("//a[text()='Add Products']");
        this.productNameEdit=page.getByPlaceholder("Product Name");
        this.productPriceEdit=page.getByPlaceholder("Price");
        this.selectProductUnitType=page.locator("#product\\:unit");
        this.selectProductCategoryType=page.locator("#product\\:category");
        this.productStockEngagementOption=page.getByLabel("Enable").check();
        this.productDescriptionEdit=page.locator("//textarea[@name='txtProductDescription']");
        this.addProductBtn=page.locator("//input[@value='Add Product']");
    }
}