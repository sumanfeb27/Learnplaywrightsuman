import{test, expect } from '@playwright/test';

test('verify radio button',async ({page})=>{

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    await page.locator('input[value="m"]').isChecked()
   // await page.locator('input[value="f"]')
    //check the femail option
    await page.locator('input[value="f"]').check()
    //await page.locator('input[value="f"]').toBeChecked();
    //await page.locator('input[value="m"]').not.toBeChecked()
    const isChecked = await page.locator('input[value="f"]').isChecked();
    console.log(isChecked);




}
)