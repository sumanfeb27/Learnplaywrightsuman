const {test, expect} = require('@playwright/test');

import { dashBoardPage } from "../tests/pageobjects/dashboard.po"
import { loginPage } from "../tests/pageobjects/login.po";
import { addEmployeePage } from "../tests/pageobjects/addemp.po"

import logindata from "../testdata/login.json"
import addemployeedata from "../testdata/addemp.json"


test("Verify Add Employee", async ({ page }) => {

    const login = new loginPage(page)
    const dashborad = new dashBoardPage(page)
    const addemp = new addEmployeePage(page)

    await login.launchApplication()
    await login.loginwithCreds(logindata.username, logindata.password)
    await login.verifyLoginSuccess()
    await dashborad.clickonPIM()
    await addemp.addEmployee(addemployeedata.firstname, addemployeedata.lastname)
    await addemp.verifyEmployeecreated()

})