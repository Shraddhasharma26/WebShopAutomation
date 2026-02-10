const {Given, When, Then,setDefaultTimeout}= require("@cucumber/cucumber")
const {By ,Builder, until, Key}= require("selenium-webdriver")

const BasePage = require('../page/BasePage.js');
const AddCart = require('../page/AddCart.js')
const LoginPage= require('../page/LoginPage.js')
const ShoppingCart = require('../page/ShoppingCart.js')

let driver
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const assert =require("assert")
Given('user login to website', async function()
{
this.driver = await new Builder().forBrowser('chrome').build();
 const base = new BasePage(this.driver)
 await base.goToUrl('https://demowebshop.tricentis.com/login');
 const logpage = new LoginPage(this.driver)

 await logpage.LoginClickButton()
 await logpage.EmailValue('shraddhasharma2603@gmail.com')
 await logpage.PasswordValue('Shraddha@26')
 await logpage.ClickOnLoginButton()
})
When('user selects the item', async function()
{
 const cartadded= new AddCart(driver)
 await cartadded.SelectItems()
 await cartadded.AddToCart()
})
Then('user navigate to add cart', async function()
{
 const cartcheck= new AddCart(this.driver)
 await cartcheck.MoveToShoppingCart()
})

When('user goes to shopping cart',async function()
{
 const cartcheck= new AddCart(this.driver)
 await cartcheck.MoveToShoppingCart()
 //const quantity = new ShoppingCart(this.driver)
 //console.log('Methods:', Object.getOwnPropertyNames(quantity));  // Lists prototype 
  //await quantity.SelectItemShop()
})
Then('user can change quantity', async function()
{
 const number= new ShoppingCart(this.driver)
 await this.number.ChangeQuantity(3)

})
