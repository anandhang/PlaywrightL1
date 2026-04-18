import {test, expect} from "@playwright/test"


test("upload Test file", async ({page}) => 
    {
        await page.goto("https://demo.automationtesting.in/Register.html");
        await page.waitForLoadState('load');
        await page.waitForLoadState('domcontentloaded');
        /*
        await page.locator("//input[@id='imagesrc']").setInputFiles('C:\\Users\\anang\\Downloads\\screenshot.png');
        page.pause();
        const fileChooseBtn = await page.locator("//input[@id='imagesrc']").boundingBox();
        if(fileChooseBtn)
        {
            await page.mouse.click(fileChooseBtn.x + fileChooseBtn.width/2,  fileChooseBtn.y+ fileChooseBtn.height/2);
        }        
        else 
        {
            throw new Error("Element not found or not visible");
        }
        */
       await page.locator("//input[@id='imagesrc']");
        const [filechooser] = await Promise.all([
            page.waitForEvent('filechooser'),
            page.click("#imagesrc")
        ]);
        await filechooser.setFiles('C:\\Users\\anang\\Downloads\\screenshot.png');
        page.pause();
    });