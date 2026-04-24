import {Page} from "@playwright/test"

export class LoginPage
{
    page;
    username;
    password;
    loginBtn;

    //it accespts the page object as a parameter and intializa the group page property of the class
    constructor(page : Page)
    {
        this.page = page
        this.username = this.page.locator("#username");
        this.password=this.page.locator("#password");
        this.loginBtn = this.page.locator("#signInBtn");

    }

    async goto(page:Page)
    {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }

    async login(username:string, password:string)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}