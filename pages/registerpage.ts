import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly phone: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;
  readonly continueBtn: Locator;

  //readonly welcomeText: Locator;
  readonly successMsg: Locator;
  readonly invalidEmailMsg: Locator;
  readonly phoneError: Locator;

  readonly alreadyAccountLink: Locator;

  constructor(page: Page) {
    this.page = page;

    
    this.firstName = page.locator('#firstName-signup');
    this.lastName = page.locator('#lastName-signup');
    this.phone = page.locator('#phoneNumber-signup');
    this.email = page.locator('#email-signup');
    this.password = page.locator('input[name="password"]');
    this.confirmPassword = page.locator('input[name="confirmPassword"]');
    this.checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
 
    //this.welcomeText = page.locator('text=Welcome');
    //await expect(page).toHaveURL('https://ecomdukes.in/login');
    this.successMsg = page.getByText('Thank You For Registering');
    this.invalidEmailMsg = page.getByText('Invalid email');
    this.phoneError = page.getByText('Please enter a valid phone number');

    this.alreadyAccountLink = page.getByRole('link', { name: 'Already have an account?' });
  }

  async navigate() {
    await this.page.goto('https://ecomdukes.in/register');
  }

  async fillForm(first: string, last: string, phone: string, email: string, pass: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.phone.fill(phone);
    await this.email.fill(email);
    await this.password.fill(pass);
    await this.confirmPassword.fill(pass);
  }

  async clickCheckboxes() {
    await this.checkbox1.click();
    await this.checkbox2.click();
  }

  async submit() {
    await this.continueBtn.click();
  }
}

