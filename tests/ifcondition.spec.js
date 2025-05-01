import { test, expect } from '@playwright/test';


 
test('different browsers',async({page,browserName})=> {
    if (browserName=="chromium") {
        await page.goto("https://www.flipkart.com/");
            await page.close();
    }

    else if(browserName=="chromiuwebkit"){
        await page.goto("https://www.youtube.com/")
        await page.close();


    }
    
}
)