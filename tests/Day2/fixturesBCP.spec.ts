import {test, expect, Page, Browser, BrowserContext } from '@playwright/test';

test("Check browser Class properties", async ({browser}) => {  await SelectBrowserAndLogin(browser);});
test("Check Context Class properties", async ({context}) => {  await SelectContextAndLogin(context);});
test("Check Page Class properties", async ({page}) => {  await SelectPageAndLogin(page);});

async function SelectBrowserAndLogin(browser: Browser){
        const browserContext = await browser.newContext();
        const page = await browserContext.newPage();
        await CommonLoginSteps(page);
        await browserContext.close();
    }
async function SelectContextAndLogin(browserContext: BrowserContext){
        const page = await browserContext.newPage();
        await CommonLoginSteps(page);
        await browserContext.close();
    }
async function SelectPageAndLogin(page: Page){
        await CommonLoginSteps(page);
    }
async function CommonLoginSteps(page: Page)
    {
        await page.goto("https://practicetestautomation.com/practice-test-login/");
        await expect(page.getByText("Username:")).toBeVisible();
        await expect(page.getByText("Password:")).toBeVisible();
        const username = await page.locator("//section[@id='login']//br/following-sibling::text()[normalize-space()='Username:']/following-sibling::b[1]").innerText();
        const password = await page.locator("//section[@id='login']//br/following-sibling::text()[normalize-space()='Password:']/following-sibling::b[1]").textContent();
        const safePassword = password==null?"":password;
        const username_input = await page.locator("//div[@id='form']//label[@for='username']//following-sibling::input");
        const password_input = await page.locator("//div[@id='form']//label[@for='password']//following-sibling::input");
        await username_input.fill(username);
        await password_input.fill(safePassword);
        const submitbutton= await page.locator("//button[@id='submit']");
        await expect(submitbutton).toBeVisible();        
        await page.getByRole('button', {name:'Submit'}).click();
        await page.close();        
    }
