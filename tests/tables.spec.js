
import{test, expect} from '@playwright/test';

test('tables validation',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/tables")
    //how many tables are present 
    const tables=await page.$$('table');
    expect(tables.length).toBe(2)
    //how many rows are present
    const table=await page.$$('#table1 > tbody >tr');
    expect (rows.length).toBe(4)
    //or
    await expect(page.locator('#table1 > tbody >tr')).toHaveCount(4)

    

}
)