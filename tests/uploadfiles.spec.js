const {browser , test, expect}=require('@playwright/test')
const fs=require('fs')
const path =require('path')
test('uploadfiles',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles('./testdata/files/Playwright.jpg')
    await page.locator('#file-submit').click();

    await page.waitForTimeout(5000)

}
)
