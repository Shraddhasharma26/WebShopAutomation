const {Given, When, Then,setDefaultTimeout}= require("@cucumber/cucumber")
const {By ,Builder, until, Key}= require("selenium-webdriver")

const BasePage = require('../page/BasePage.js');
const AddCart = require('../page/AddCart.js')

const assert =require("assert")
Given('user login to website', async function()
{
this.driver = await new Builder().forBrowser('chrome').build();
 const base = new BasePage(this.driver)
 await base.goToUrl('https://demowebshop.tricentis.com/login')

})
When('user selects the item', async function()
{
 const cartadded= new AddCart(this.driver)
 await cartadded.SelectItems()
 await cartadded.AddToCart()
})
Then('user navigate to add cart', async function()
{
 const cartcheck= new AddCart(this.driver)
 await cartcheck.MoveToShoppingCart()
})