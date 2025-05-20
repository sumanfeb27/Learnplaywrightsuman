import { test, expect } from '@playwright/test';
test('xpathtesting',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //page.getbyaltext()used for images 
    expect(page.getByAltText('"company-branding"')).toBeVisible();
    await page.locator('//input[@name="username"]').fill("admin");
    //with and we can write the xpath
   //wait page.locator('//input[@class="oxd-input oxd-input--active" and @placeholder="Username"]')
    await page.locator('//input[@placeholder="Password"]').fill("admin123");
    await page.locator('//button[@type="submit"]').click();

    //get by placeholder
   //wait page.getByPlaceholder('Username').fill("Sanjay");

    //contaions xpath 
    await page.locator ('//p[contains(.,"Time at ")]').isVisible();
    //ancestor chaild to parent 
   //wait page.locator('//input[@name="username"]/ancestor::div').isVisible();


}

)

test('rediffemail',async({page})=>{
   await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
    //tagname[starts-with(@attrname, "prefixvalue")]
    await page.locator('//input[starts-with(@name,"name")]').fill("sanjay");
    await page.locator('//span[contains(.,"Click if you don")]').isEnabled();
    test.setTimeout(4000);
    await page.locator('//input [@name="gender2b1cb117"][@value="m"]').uncheck();
   //using the css we can write the xpath
    await page.locator('input[placeholder="Enter Rediffmail ID"]').fill("sriram");
    //css with#id value 
    await page.locator('#newpasswd').fill("Suman");
    await page.locator('#toggle-retype-password').fill("suman");
    //css multiple attributes with add (or attribute option is not avilable) 
    await page.locator('input[type="email"][placeholder="Enter recovery email"]').fill("sanjay@test.com");
    //css prefeix start with ^
    await page.locator('input[name^="mobno"]').fill("9990099900");
    //css with contains *
    await page.locator('input[class*="captcha"]').fill("BHED");
    //css indexing is not possible 
    //page.getbytitle() for page title we can use this keyword
    await page.getByTitle("Rediff.com").isVisible();
    //page.getbytestid() used for angalur systems (datatest-id) is the attribute 
    //await page.getByTestId("username").fill("suman")


    





}
)

test('internet',async({page})=>{
    page.goto('https://the-internet.herokuapp.com/tables');
    //writing xpath using parent to child traversing 
    await page.locator('//table[@id="table1"]/tbody/tr[2]/td[5]').isEnabled();
    await page.locator('//table[@id="table2"]/tbody/tr[3]/td[4]').isVisible();
      //child to parent using css
      await page.locator('#table1 > tbody > tr:nth-child(3)>td:nth-child(4)').isVisible();




    
}
)