import {test, expect, Dialog, Page} from "@playwright/test"

test("Check switch to alert OK", async function switchToAlertOK({page})  
    {
        await launchApplication(page);
        await page.locator("//a[normalize-space(text())='Alert with OK']").click();
        await page.locator("//button[contains(text(),'click the button to display an  alert box:')]").hover();
        await page.locator("//button[contains(text(),'click the button to display an  alert box:')]").click();
        await page.locator("//button[contains(text(),'click the button to display an  alert box:')]").click();
        page.on("dialog", async dialog => {
            console.log(dialog.message());
            await dialog.accept();
            console.log("Click on OK button");
        });
    });

test("Check Switch to alert ok and cancel", async function switchToAlertCancel({page})
    {
        await launchApplication(page);
        await page.locator("//a[normalize-space(text())='Alert with OK & Cancel']").click();
        await page.locator("//button[contains(text(),'click the button to display a confirm box')]").hover();
        await page.locator("//button[contains(text(),'click the button to display a confirm box')]").click();        
        page.on("dialog", async dialog => {
            const diaMessge:string = dialog.message();
            await expect(diaMessge).toBe("Press a Button !");
            await dialog.accept();
            console.log("Click on OK button");
        });
    });

test.only("Check Switch to alert with tectbox", async function switchToAlertWithTextbox({page})
    {
        await launchApplication(page);
        await page.locator("//a[normalize-space(text())='Alert with Textbox']").click();
        await page.locator("//button[contains(text(),'click the button to demonstrate the prompt box')]").dblclick();        
        page.on("dialog", AcceptCancel);
    });

    async function launchApplication(page:Page)
    {
        await page.goto("https://demo.automationtesting.in/Alerts.html");
        await page.waitForLoadState('load');
        await page.waitForLoadState('domcontentloaded');
    }
    async function AcceptOK(dialog:Dialog)
    {
        console.log(dialog.message());
        await dialog.accept();
    }

    async function AcceptCancel(dialog:Dialog)
    {
        console.log(dialog.message());
        await dialog.dismiss();
    }

    async function AcceptTextbox(dialog:Dialog)
    {
        console.log(dialog.message());
        await dialog.accept("Anandhan");
    }