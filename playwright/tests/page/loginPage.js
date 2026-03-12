const { expect } = require('@playwright/test');
const basePage = require('./basePage.js');

class loginPage extends basePage {
  constructor(page) {
    super(page);
  }

  async loginFlow(username, password) {
    await this.page.locator("//a[@class='ico-login']").click();
    await this.page.locator('//input[@name="Email"]').fill(username);
    await this.page.locator('//input[@name="Password"]').fill(password);
    await this.page.locator('//input[@value="Log in"]').click();
  }

  async validSucess() {
    const actual = await this.page.locator("//a[normalize-space()='shraddhasharma2603@gmail.com']");
    await expect(actual).toHaveText('shraddhasharma2603@gmail.com');
  }
}
module.exports=loginPage