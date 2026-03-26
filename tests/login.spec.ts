
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Valid Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.validlogin('anjuananthan82x@gmail.com', 'Qwerty@01');
   await expect(page).toHaveURL(/home/);
});


