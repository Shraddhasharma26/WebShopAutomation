const {Given, When, Then,setDefaultTimeout}= require("@cucumber/cucumber")
const {By ,Builder, until, Key}= require("selenium-webdriver")

const BasePage = require('../page/BasePage.js');
const AddCart = require('../page/AddCart.js')
const LoginPage= require('../page/LoginPage.js')
const ShoppingCart = require('../page/ShoppingCart.js')

let driver
const assert =require("assert")
Given('user login to website', async function()
{
this.driver = await new Builder().forBrowser('chrome').build();
 const base = new BasePage(this.driver)
 await base.goToUrl('https://demowebshop.tricentis.com/login');
})
When('user selects the item', async function()
{
 const cartadded= new AddCart(driver)
 await this.cartadded.SelectItemShop()
 await this.cartadded.AddToCart()
})
Then('user navigate to add cart', async function()
{
 const cartcheck= new AddCart(this.driver)
 await this.cartcheck.MoveToShoppingCart()
})

When('user goes to shopping cart',async function()
{
 const quantity = new ShoppingCart(this.driver)
  await this.quantity.SelectItemShop()
})
Then('user can change quantity', async function()
{
 const number= new ShoppingCart(this.driver)
 await this.number.ChangeQuantity(7)

})
