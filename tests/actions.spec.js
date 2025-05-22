import { test, expect } from '@playwright/test';


 test('Verify all actions',async({page})=> {
    //clcik actions 
    await page.goto("https://demoqa.com/buttons")
    await page.locator('//button[@id="doubleClickBtn"]').dblclick();
    await page.locator('//button[@id="rightClickBtn"]').click({button:'right'})
    ////await page.locator('button[class="btn btn-primary"][id="nXh0l"]').click();
    //await browser.close();

}
)

test('Verify all textbox actions',async({page})=> {
    //check textbox actions
    await page.goto("https://demoqa.com/text-box")
    await page.locator('input[placeholder="Full Name"]').fill("sanjay")
    await page.locator('input[placeholder="Full Name"]').clear();
    await page.locator('input[placeholder="name@example.com"]').pressSequentially("sanjay@qs.com")
    await page.locator('input[placeholder="name@example.com"]').clear();
    //await browser.close();



 }
 )




 test('Verify clciking on the hidden elements',async({page})=> {
    await page.goto("http://playwright.dev/docs")

    await page.locator('a[href="/python/"]').click({force:true})

    await expect(page.expect('a[herf="/java/"]')).toBeAttached();



 }
)
 
