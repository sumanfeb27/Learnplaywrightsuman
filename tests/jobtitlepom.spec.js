const {test, expect} = require('@playwright/test');

import { dashBoardPage } from "../tests/pageobjects/dashboard.po"
import { loginPage } from "../tests/pageobjects/login.po";


import { addjobtitlePage } from "./pageobjects/addjobtitle.po"; 
import logindata from "../testdata/login.json"
import jobtitle from "../testdata/jobtitle.json"
const fs=require('fs')
const path =require('path')

test("Verify Add Jobtitle", async ({ page }) => {

    const login = new loginPage(page)
    const dashborad = new dashBoardPage(page)
    const addjobs = new addjobtitlePage(page)

    await login.launchApplication()
    await login.loginwithCreds(logindata.username, logindata.password)
    await login.verifyLoginSuccess()
    await addjobs.addjob()
    await addjobs.addjob(jobtitle.jobt,jobtitle.jobdec)


})