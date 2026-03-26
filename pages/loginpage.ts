import { Page, Locator } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submitBtn: Locator;
  readonly googleBtn: Locator;
  readonly facebookBtn: Locator;
  readonly forgotPasswordLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('input[placeholder="Enter Username"]');
    this.password = page.locator('input[placeholder="Enter Password"]');
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.googleBtn = page.getByRole('button',{name:'Sign In With Google'});
    this.facebookBtn = page.getByRole('button',{name:'Sign In With Facebook'});
    this.forgotPasswordLink = page.getByRole('link',{name:'Sign In With Facebook'});
  }

  async gotoLoginPage() {
    await this.page.goto('https://ecomdukes.in/login');
  }

  async validlogin(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    
    await this.submitBtn.click();
  }
}
