import {test, expect} from "@playwright/test"

test('Login Page Practies', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await page.getByRole("textbox", {name : 'username'}).fill("rahulshettyacademy");
    await page.getByRole('textbox', {name: 'password'}).fill("Learning@830$3mK2");
    await page.getByRole('radio', {name: 'User'}).click();
    await page.getByRole('button', {name: 'Okay'}).click();
    await page.locator('//div[@class="form-group"]//select').selectOption({label: 'Student'});
    await page.locator('#terms').check();
    await page.getByRole('button', {name:'Sign In'}).click();
    await page.locator("//a[text()='iphone X']//ancestor::div[@class='card h-100']//button[text()='Add ']").click();
    const checkoutstr = await page.locator("//a[@class='nav-link btn btn-primary']").innerText();
    expect(checkoutstr.includes('Checkout ( 1 )')).toBeTruthy();
    await page.locator("//a[@class='nav-link btn btn-primary']").click();
    await page.getByRole('button', {name: 'Checkout'}).click();
    await page.waitForLoadState('load');
    await page.waitForLoadState('domcontentloaded');
    await page.locator('#country').fill("India");
    await page.keyboard.press('Tab');
    await page.waitForLoadState('load');
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('button', {name: 'Purchase'}).click();    
    await page.waitForLoadState('load');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('//div[@class="alert alert-success alert-dismissible"]'))
  .toHaveText('× Success! Thank you! Your order will be delivered in next few weeks :-).');
    await page.pause();
});