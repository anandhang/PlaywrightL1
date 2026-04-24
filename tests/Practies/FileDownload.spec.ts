import {test} from "@playwright/test"

test("File Download testcase", async ({page}) => 
{
    await page.goto("https://demo.automationtesting.in/FileDownload.html");
    

    const [download] = await Promise.all(
        [
            page.waitForEvent('download'),
            page.getByRole('link', {name:'Download'}).click()
        ]);

    const suggestedFileName = download.suggestedFilename();   
    console.log("Suggested File NAme"+ suggestedFileName);

    //const filename = path.join(__dirName, "dowload", suggestedFileName);
    download.saveAs("C:\Users\anang\Downloads");
});


test.only("File download from hidden link", async ({page}) => 
    {
        await page.goto("https://demo.automationtesting.in/FileDownload.html");
        page.locator('#textbox').type("By default Download link will be hidden");
        page.locator('#textbox').press("By default Download link will be hidden");
        page.keyboard.press("Tab");
        page.click('#createTxt');
        const [download] = await Promise.all(
            [
                page.waitForEvent('download'),
                //expect('#link-to-download').toBeVisisble(),
                page.locator('#link-to-download').click()
            ]);
            const suggestedFileName = download.suggestedFilename();  
            console.log("Suggested File NAme"+ suggestedFileName);
            download.saveAs("C:\Users\anang\Downloads");
    });

function expect(arg0: string) {
    throw new Error("Function not implemented.");
}
