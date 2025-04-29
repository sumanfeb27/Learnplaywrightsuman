import { test, expect } from '@playwright/test';
test('valid usename and password',async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
}
)

test('valid usename and invalidpassword',async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin1234");
    await page.locator("button[type='submit']").click();
    await expect (page.locator("//p[text()='Invalid credentials']")).toBeVisible
})

test('invalid usename and validpassword',async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill("Admin1")
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect (page.locator("//p[text()='Invalid credentials']")).toBeVisible
})

test('invalid usename and invalidpassword',async({page})=> {
    const logincrds=["admin1","admin123"]
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill(logincrds[0])
    await page.waitForTimeout(5000)
    await page.locator("input[type='password']").fill(logincrds[1]);
    await page.locator("button[type='submit']").click();
    await expect (page.locator("//p[text()='Invalid credentials']")).toBeVisible
    await page.waitForTimeout(5000)
    await page.close()
})