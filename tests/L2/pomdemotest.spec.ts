import { test, expect } from "@playwright/test";
import { BaseTestContext } from '../../Pages/BaseTestContext';

let UIObject : BaseTestContext;

test.beforeEach(async ({ page }) => {
  // Create fresh context before each test
  UIObject = new BaseTestContext(page);
});

test.afterEach(async () => {
  UIObject = null as any; 
});

test("Test demo pom page", async ({page}) => 
    {
        await UIObject.loginPage.goto(page);
        await UIObject.loginPage.login("rahulshettyacademy","Learning@830$3mK2");
        await page.pause();
        const productName = "iphone X";
        await UIObject.productPage.addProduct(productName);
        await UIObject.productPage.addToCard();
;    });