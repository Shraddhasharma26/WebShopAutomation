 const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const basePage = require('../page/basePage.js');
const loginPage = require('../page/loginPage.js');
const addCart = require('../page/addCart.js');

const { chromium } = require('playwright');

Given('user login to website', async function()
{
 this.browser = await chromium.launch({ headless: false });
 this.page = await this.browser.newPage();
 const urlLink = new basePage(this.page);
 await urlLink.goToUrl('http://demowebshop.tricentis.com/');
 const login = new loginPage(this.page);
 await login.loginFlow('shraddhasharma2603@gmail.com', 'Shraddha@26');
})
When('user selects the item', async function()
{
 const addtocart = new addCart(this.page)
 await addtocart.selectItem()
})
Then('user navigate to add cart' ,async function()
{
 const navigate = new addCart(this.page)
 await navigate.goToShoppingCart()
})
When('user goes to shopping cart' , async function()
{
    const shop = new addCart(this.page)
    await shop.navigateToShoppingCart()
}) 
Then ('user can change quantity', async function()
{
 const change = new addCart(this.page)
 await change.changePrice(6)
})