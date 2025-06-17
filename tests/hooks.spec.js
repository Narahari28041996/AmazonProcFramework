import { test } from "@playwright/test";

test.beforeAll("Hook-1",()=>{
    console.log("Rise");
}),
test.afterAll("Hook-2",()=>{
    console.log("Set");
}),
test.beforeEach("Prepare hook",()=>{
    console.log("Preparing");
    console.log("Completed");
}),
test.afterEach("Finish hook",()=>{
    console.log("Ready");
    console.log("Utilized it");

}),
test('',()=>{
    console.log("Print hooks");
    
})