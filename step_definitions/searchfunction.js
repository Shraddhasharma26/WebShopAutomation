const {Given, When, Then,setDefaultTimeout}= require("@cucumber/cucumber")
const {By ,Builder, until, Key}= require("selenium-webdriver")

const BasePage = require('../page/BasePage.js');
const AddCart = require('../page/AddCart.js')
const LoginPage= require('../page/LoginPage.js')
const ShoppingCart = require('../page/ShoppingCart.js')
const SearchFunctionality= require('../page/SearchFunctionality.js')

let driver
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const assert =require("assert")

Given('user visit website and login to it', async function()
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

Given('user selects the search bar',async function()
{
 const searchfun = new SearchFunctionality(this.driver)
 await searchfun.searchBar()
})

When('user finds the item', async function()
{
 const finditem = new SearchFunctionality(this.driver)
 await finditem.searchItem()
})

Then('user adds to wishlist', async function()
{
 const addtowishlist = new SearchFunctionality(this.driver)
 await addtowishlist.searchAddWishlist()
 await sleep(3000)
})