import excel from "exceljs"
import {test} from "@playwright/test"

test("Read Multiple Data",async({page})=>{
    let book = new excel.Workbook();
    await book.xlsx.readFile('./TestData/ddtOne.xlsx')
    let nameSheet = book.getWorksheet('Sheet1')
    let lastRow=nameSheet.rowCount;
    let lastCol=nameSheet.columnCount;

    //Using normal for loop
    for (let i = 2; i <=lastRow; i++) {
        for (let j = 1; j <= lastCol; j++) {
            console.log(await nameSheet.getRow(i).getCell(j).toString());            
        }
    }
})