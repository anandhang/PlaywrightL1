// BaseTestContext.ts
import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { ProductPage } from './searchproduct';

export class BaseTestContext {
  readonly loginPage: LoginPage;
  readonly productPage: ProductPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.productPage = new ProductPage(page);
  }
}
