import { test, expect } from "@playwright/test";
import { BaseTestContext } from '../../Pages/BaseTestContext';
let UIObject : BaseTestContext;

test.beforeEach(async ({page}) => {
    console.log("beforeEach - Runs before each test");
    UIObject = new BaseTestContext(page);
});

test.afterEach(async () => {
    console.log("afterEach - Runs after each test");
    UIObject = null as any;
});

test("Test demo pom page Global setup", async ({page}) => 
    {
        const productName = "iphone X";
        await UIObject.productPage.addProduct(productName);
        await UIObject.productPage.addToCard();
    });

test("Test demo pom page second Testcase", async ({page}) => 
    {
        const productName = "iphone X";
        await UIObject.productPage.addProduct(productName);
        await UIObject.productPage.addToCard();
    });