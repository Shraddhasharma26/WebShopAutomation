const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const basePage = require('../page/basePage.js');
const loginPage = require('../page/loginPage.js');
const { chromium } = require('playwright');

setDefaultTimeout(60 * 1000);

Given('user goes to url', async function() {
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();
  const urlLink = new basePage(this.page);
  await urlLink.goToUrl('http://demowebshop.tricentis.com/');
});
When('user clicks on login', async function() {
  const login = new loginPage(this.page);
  await login.loginFlow('shraddhasharma2603@gmail.com', 'Shraddha@26');
});

Then('user is successfully login', async function() {
  const login = new loginPage(this.page);
  await login.validSucess();
});