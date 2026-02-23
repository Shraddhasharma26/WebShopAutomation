const {Given, When, Then,setDefaultTimeout}= require("@cucumber/cucumber")
const {By ,Builder, until, Key}= require("selenium-webdriver")

const BasePage = require('../page/BasePage.js');
const AddCart = require('../page/AddCart.js')
const LoginPage= require('../page/LoginPage.js')
const checkoutPage = require('../page/checkoutPage.js')
let driver


Given('user filled all the information and does checkout', async function()
{
this.driver = await new Builder().forBrowser('chrome').build();
const basepage = new BasePage(this.driver)
await basepage.goToUrl('https://demowebshop.tricentis.com/login')
 const checkout = new LoginPage(this.driver)
 await checkout.LoginClickButton()
 await checkout.EmailValue("shraddhasharma2603@gmail.com")
 await checkout.PasswordValue("Shraddha@26")
 await checkout.ClickOnLoginButton()
 const addcart = new AddCart(this.driver)
 await addcart.SelectItems()
 await addcart.AddToCart()
 await addcart.MoveToShoppingCart()
})

When('user fills all the forms',async function()
{
 const checkout_page = new checkoutPage(this.driver)
 await checkout_page.selectItemInShop()
 await checkout_page.checkoutForm()
})
Then('user must receive successfully processed message',async function()
{
 const sucess =  new checkoutPage(thia.driver)
 await sucess.successPlacedOrder()
})