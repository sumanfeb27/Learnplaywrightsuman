const{test,expect} =require('@playwright/test');
const creds={
    username:"Admin",
    password:"admin123"
}
const empname=[
    "employee1",
    "contracter1",
    "Vender1",
    "visitor1"
]

empname.forEach(Element=>{

    test(`Verify Add empstatus with mandatory fields - ${Element}`, async ({page})=>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        //enter username and password
        await page.locator("input[name='username']").fill(creds.username)
        console.log("entering username")
        await page.locator("input[type='password']").fill(creds.password)
        console.log("entering password")
        
        //click on the login button
        await page.locator("button[type='submit']").click()
        console.log("clicking on login button")
        //Assertions means Verification
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",{timeout:15000});
        
        //menu item
        await expect (page.locator('ul[class="oxd-main-menu"]')).toBeVisible();
        
        //click on admin module
        await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
        
        //click on the job
        await page.locator("//li[contains(.,'Job')]").click();
        
        //click on employmentstatus
        await page.locator("//a[normalize-space(text())='Employment Status']").click()
        
        //click on add button
        await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()
        
        //give the employment name
        
        await page.locator("//label[normalize-space(text())='Name']/following::input").fill(Element)
        
        //save button
        await page.locator("//button[@type='submit']").click()
        
        //assertion
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus")
        

}
)
}
)