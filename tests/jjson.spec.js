let data=require("../TestData/data.json")
import {test} from "@playwright/test"

data.forEach((obj,i)=>{
    test(`multiple obj ${i}`,async()=>{
        console.log(obj.usn);
        console.log(obj.pwd);
        console.log(obj.url);        
    })
})