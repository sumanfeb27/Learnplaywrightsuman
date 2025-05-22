import { test, expect } from '@playwright/test';


 test('Verify the checkbox',async({page})=> {

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")
    //select the check box 
    await page.locator('input[name^="chk_altemail"]').check();
    //Verify check box is selected or not
   const ischecked = await page.locator('input[name^="chk_altemail"]').isChecked()
   console.log(ischecked)
    //verifiy the check box is selected 
    await expect(page.locator('input[name^="chk_altemail"]')).toBeChecked();
    await page.waitForTimeout(2000)
    //unselect the check box
    await page.locator('input[name^="chk_altemail"]').uncheck();
    //verify the check box is unselected 
    await expect(page.locator('input[name^="chk_altemail"]')).not.toBeChecked();

 }
)

test('select multiple checkboxes',async({page})=> {
    await page.goto('https://www.ironspider.ca/forms/checkradio.htm')
    
    const checkboxes=["//input[@value='red']"] ["//input[@value='blue']"] 
    for (let checkbox of checkboxes){
        const isChecked = await page.locator(checkbox).isChecked()

        //check the check box if the checkbox already checked 
        if(!isChecked){
            await page.locator(checkbox).check({force:true})
        }
    }

}
)