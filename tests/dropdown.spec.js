import {test,exports } from '@playwright/test'

test('verify drop down',async({page})=>{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    //select by name 
    await page.locator('select[id="country"]').selectOption("Australia")
    //seelct by value
    await page.locator('select[id="country"]').selectOption("17")
    //seelct by imdex
    await page.locator('select[id="country"]').selectOption({index: 15 })

}
)
