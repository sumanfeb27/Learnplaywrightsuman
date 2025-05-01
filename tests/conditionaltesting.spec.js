import { test, expect } from '@playwright/test';


 test('click on of the element',async({page})=> {
    await page.goto("https://the-internet.herokuapp.com/disappearing_elements")
    const contactus=page.getByRole("link",{name: "Contact Us"});
    const portfolio=page.getByRole("link",{name:"Portfolio"});
    const gallery=page.getByRole("link",{name:"Gallery"});

    if(await gallery.isVisible ()){
        await gallery.click();
        console.log("clicked on Gallery")
    }else if(await portfolio.isVisible()){
            await portfolio.click();
            console.log("Clicked on portfolio ")

        }

        for (i=0;i<10;i++){
            await expect(page).toHaveURL(/.*gallery|.*portfolio/);
        }


    })