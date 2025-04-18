import {test} from "@playwright/test";
import ProcurementAreaAndRetailerDataSystemTest from "../pageobjects/amazon.procurement.areaandretailersystemtest";
let data=require("../TestData/amazonprocurement.json");
test("Add Area Code and Add Retailer Data", async ({ page }) => {
    let AreaWithRetailerDataSystemTest = new ProcurementAreaAndRetailerDataSystemTest(page);
    await AreaWithRetailerDataSystemTest.url(data.url);
    await AreaWithRetailerDataSystemTest.addAreaAndRetailerDetails(
        data.username,
        data.password,
        data.login_type,
        data.area_name,
        data.area_code,
        data.retailer_usn,
        data.retailer_pwd,
        data.select_area_code,
        data.retail_phone,
        data.retail_email,
        data.retail_address
    );
});