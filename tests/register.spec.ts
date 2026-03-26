import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/registerpage';

test.describe('Register Tests', () => {

  test('Valid Register Test', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.navigate();
    await register.fillForm('Anju', 'C A', '9895869623', 'user05@gmail.com', 'Qwerty@02');
    await register.clickCheckboxes();
    await register.submit();

    await expect(page).toHaveURL(/welcome/);

  });

  test('Invalid Register Test', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.navigate();
    await register.fillForm('abc', 'cs', '0000000000', 'user@gmail.com', 'Qwerty@12');
    await register.clickCheckboxes();
    await register.submit();

     await expect(page).toHaveURL(/welcome/);
  });

  test('Invalid email id', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.navigate();
    await register.fillForm('abc', 'cs', '0000000000', 'abc-_^@dr', 'Qwerty@12');
    await register.clickCheckboxes();
    await register.submit();

      await expect(page).toHaveURL(/welcome/);
  });

  test('Invalid phone number', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.navigate();
    await register.fillForm('abc', 'cs', '9898xx', 'user@gmail.com', 'Qwerty@12');

    await expect(page).toHaveURL(/welcome/);

    await register.clickCheckboxes();
    await register.submit();
  });

  test('Verify Already have an account link', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.navigate();
    await register.alreadyAccountLink.click();

    await expect(page).toHaveURL('https://ecomdukes.in/login');
  });

});