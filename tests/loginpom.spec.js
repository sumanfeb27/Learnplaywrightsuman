const {test, expect} = require('@playwright/test');


import{ loginpage } from '../tests/pageobjects/login.po'

import logindata from "../testdata/login.json"

let page;
let login;

test.beforeEach (async({browser})=>{

     page = await browser.newPage()

     login = new loginpage(page)

    await login.launchappliication()
    await login.verifylogovisibility()



}
)

test("Verify login with valid credentials", async ()=>{
     await login.loginwithCreds(logindata.username,logindata.password)
     await login.verifyloginsucess()

}
)
test("Verify login with valid usename and invalid password",async()=>{
     await login.loginwithCreds(logindata.username,logindata.wrongpassword)
     await login.verifyErrorMessage()
})

test ("Verified login with invalid username and valid password",async()=>{
     await login.loginwithCreds(logindata.wrongusername,logindata.password)
     await login.verifyErrorMessage()
}

)

test("Verified with invalid username and invalid password",async()=>{
     await login.loginwithCreds(logindata.wrongusername,logindata.wrongpassword)
     await login.verifyErrorMessage()

}
)