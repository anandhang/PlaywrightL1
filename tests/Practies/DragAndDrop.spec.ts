import {test, expect} from "@playwright/test"

test("Drag and drop ststic", async ({page}) => 
    {
        await page.goto("https://demo.automationtesting.in/Static.html");

        await page.pause();
        const source = page.locator("#angular");
        const target = page.locator("#droparea");

        await source.dragTo(target);

        await expect(target.locator("#angular")).toBeVisible();
    });


test("Drag and drop mouse down and up", async ({page}) => 
    {
        await page.goto("https://demo.automationtesting.in/Static.html");

        await page.pause();
        const source = page.locator("#angular");
        const target = page.locator("#droparea");

        await source.hover();
        await page.mouse.down();
        await target.hover();
        await page.mouse.up();

        await expect(target.locator("#angular")).toBeVisible();
    });


test.only("Drag and drop mouse move, down and up in dynamic", async ({page}) => 
    {
        await page.goto("https://demo.automationtesting.in/Static.html");

        await page.pause();
        const source = page.locator("#angular");
        const target = page.locator("#droparea");

        const box = await source.boundingBox();
        const targetBox = await target.boundingBox();

        if(box && targetBox)
        {
            await page.mouse.move(box.x + box.width/2, box.y + box.height/2);
            await page.mouse.down();

            await page.mouse.move(targetBox.x + targetBox.width/6, targetBox.y + targetBox.height/6);
            await page.mouse.up();
        }

        //await expect(target.locator("#droparea")).toBeVisible();
    });