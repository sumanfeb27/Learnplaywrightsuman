import { test, expect } from '@playwright/test';

import login from "../testdata/login.json"
const username="admin"
const password="admin123"
 test('Verify Employee information',async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill(username);
    await page.locator("input[type='password']").fill(password);
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator("//span[text()='PIM']").click();
    await page.locator("//button[contains(.,'Add')]").click();
    await page.locator("//input[@placeholder='First Name']").fill("sanjays");
    await page.locator("//input[@placeholder='Middle Name']").fill("rs");
    await page.locator("//input[@placeholder='Last Name']").fill("rams");
    await page.locator("//button[contains(.,'Save')]").click();
    await page.locator("(//div[@class='oxd-form-actions']//button)[1]").click();
    await page.locator("(//button[@class='oxd-icon-button']//i)[2]").click();
    await page.locator("(//input[@placeholder='Type for hints...'])[1]").fill("sanjays");
    await page.locator("//button[contains(.,'Search')]").click();


 }
)

