import excel from "exceljs"
import {test} from "@playwright/test"

test("read data",async({page})=>{
    let book = new excel.Workbook();
    await book.xlsx.readFile('./TestData/ddt.xlsx')
    let sheet = book.getWorksheet('Sheet1')
    let data = sheet.getRow(2).getCell(1).toString()
    console.log(data);
})
test("write data",async()=>{
    let book2=new excel.Workbook()
    await book2.xlsx.readFile('./TestData/ddt.xlsx')
    //let sheett = book2.addWorksheet('Sheet2')
    let sheett = book2.getWorksheet('Sheet1')
    sheett.getRow(2).getCell(2).value="Cat"
    await book2.xlsx.writeFile('./TestData/ddt.xlsx')
})