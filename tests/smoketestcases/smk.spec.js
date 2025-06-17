import { test,expect } from "@playwright/test";
test("First smoke test case",async({page})=>{
    console.log("Execute first smoke test case");
}),
test("Second smoke test case",async({page})=>{
    console.log("Execute second smoke test case");
}),
test("Third smoke test case",async({page})=>{
    console.log("Execute third smoke test case");
})