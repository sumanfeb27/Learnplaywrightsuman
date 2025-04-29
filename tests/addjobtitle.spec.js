import { test, expect } from '@playwright/test';

import login from "../testdata/login.json"
 test('Verify job title of the employer',async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill("login.username")
    await page.locator("input[type='password']").fill("login.password");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("//ul[@role='menu']//li[1]").click();
    await page.locator("//button[contains(.,'Add')]").click();
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("QAEnginner1")
    await page.locator("//textarea[@placeholder='Add note']").fill("Testing team")
    await page.locator("//button[@type='submit']").click();
    // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
 }
)