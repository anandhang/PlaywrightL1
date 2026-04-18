import {test, expect} from "@playwright/test"

test("Register Form", async ({browser: Browser})=> 
{
    const browserContext = await Browser.newContext();
    const page = await browserContext.newPage();
    await page.goto('https://demo.automationtesting.in/Index.html');
    await page.locator(getlocator.emailid).fill("anantsmail@gmail.com");
    await page.locator(getlocator.submitbtn).click();
    await page.getByPlaceholder('First Name').fill("Anandhan");
    await page.getByPlaceholder('Last Name').fill("G");
    await page.locator(getlocator.address).click();
    await page.locator(getlocator.address).fill("Kulamangalam Sount");
    await page.locator("//input[@ng-model='EmailAdress']").click();
    await page.locator("//input[@ng-model='EmailAdress']").fill("anantsmail@gmail.com");
    await page.locator("//input[@ng-model='Phone']").fill("8754413454");
    await page.locator("//input[@value='Male']").click();
    await page.locator("//input[@type='checkbox' and @value='Cricket']").check();
    //await page.locator('select#Skills').selectOption({label:'XHTML'});C:\Users\anang\Downloads\photo.jpg
    await page.locator('select#country').selectOption({label:'United States of America'});
    await page.locator("//b[@role='presentation']");
    await page.locator("//ul[@id='select2-country-results']//li[text()='United States of America']");
    await page.locator("select#yearbox").selectOption({label:'2015'});
    await page.getByPlaceholder('Month').selectOption({label:'December'});
    await page.locator("select#daybox").selectOption({label:'30'});
    await page.locator("#firstpassword").fill("Image@123");
    await page.locator("#secondpassword").fill("Image@123");
    await page.locator("#submitbtn").click();
    await page.pause();
});

const getlocator = 
{
    emailid : "//input[@id='email']",
    submitbtn : "//img[@id='enterimg']",
    address : "//textarea[@ng-model='Adress']"
};
