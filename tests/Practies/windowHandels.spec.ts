import {test, expect } from "@playwright/test"

test("window handles", async ({page, context}) => 
    {
        await page.goto("https://demo.automationtesting.in/Windows.html");
        await page.locator("//a[normalize-space(text())='Open New Tabbed Windows']").click();
        //page.getByRole('button', {name: 'Click'}).click();
        const[newPage] = await Promise.all(
            [
                context.waitForEvent('page'),
                page.getByRole('button', {name: 'click'}).click()
            ]);

        await newPage.waitForLoadState();
        console.log(await newPage.title());
        await expect(newPage).toHaveTitle('Selenium');
            await newPage.close();
            await page.close();
    });


test("popup window handles", async ({page, context}) => 
    {
        await page.goto("https://demo.automationtesting.in/Windows.html");
        await page.pause();
        await page.locator("//a[normalize-space(text())='Open New Seperate Windows']").click();

        const[newPage] = await Promise.all(
            [
                context.waitForEvent('page'),
                page.getByRole('button', {name: 'click'}).click()
            ]);

        await newPage.waitForLoadState();
        console.log(await newPage.title());
        await expect(newPage).toHaveTitle('Selenium');
                    await newPage.close();
            await page.close();
    });