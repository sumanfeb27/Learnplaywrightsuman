import{test, expect} from '@playwright/test';

test('flipkart using fortabs',async({page})=>{

    await page.goto("https://www.flipkart.com/")
    await page.locator('input[name="q"]').fill("Iphone")
    await page.locator('input[name="q"]').press('Enter')
    //for new window created the promise 
    const [newtab] = await Promise.all([
        page.waitForEvent('popup'),

        await page.locator("//div[text()='Apple iPhone 16 (Black, 128 GB)']").click()
    ]);
   await expect(newtab).toHaveURL(/apple-iphone-16-black-128-gb/)
    //print the value of the phone 
   const nameofthephone= await newtab.locator("._6EBuvT>span").textContent();
   console.log(nameofthephone)

}
)
