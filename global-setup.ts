import {chromium, expect, FullConfig} from "@playwright/test"

async function globalsetp(config:FullConfig)
{    
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page= await browserContext.newPage();    
    await page.pause();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');    
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await page.getByRole("textbox", {name : 'username'}).fill("rahulshettyacademy");
    await page.getByRole('textbox', {name: 'password'}).fill("Learning@830$3mK2");
    await page.getByRole('radio', {name: 'User'}).click();
    await page.getByRole('button', {name: 'Okay'}).click();
    await page.locator('//div[@class="form-group"]//select').selectOption({label: 'Student'});
    await page.locator('#terms').check();
    await page.getByRole('button', {name:'Sign In'}).click();
    await page.waitForLoadState('networkidle');
    await page.context().storageState({path: 'state.json'});
    await browser.close();
}

export default globalsetp;