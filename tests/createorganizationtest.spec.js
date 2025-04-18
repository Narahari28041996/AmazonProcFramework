import {test,expect} from "@playwright/test"
import login from "../pageobjects/login.js"
test("Launch the URL",async({page})=>{
    let Login=new login(page)
    await Login.urll()


await Login.login("admin","admin","Achal Cashews")
})