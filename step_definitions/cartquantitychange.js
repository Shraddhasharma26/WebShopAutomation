const {Given, When, Then,setDefaultTimeout}= require("@cucumber/cucumber")
const {By ,Builder, until, Key}= require("selenium-webdriver")

const BasePage = require('../page/BasePage.js');
// const cartquantitychange = require('../page/cartquantitychange.js')

const assert =require("assert")
When('user goes to shopping cart',async function()
{
 const quantity = new cartquantitychange(driver)
  await quantity.SelectItem()
})
Then('user can change quantity',async function()
{
 const number= new cartquantitychange(driver)
 await number.ChangeQuantity(3)

})
module.exports=