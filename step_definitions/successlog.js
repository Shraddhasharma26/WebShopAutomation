const {Given, When, Then,setDefaultTimeout}= require("@cucumber/cucumber")
const {By ,Builder, until, Key}= require("selenium-webdriver")

const BasePage = require('../page/BasePage.js');
const LoginPage = require('../page/LoginPage.js') 

const assert =require("assert")
//let driver;
setDefaultTimeout(15000);
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

Given('user goes to url', async function()
{
 this.driver = await new Builder().forBrowser('chrome').build();
 const base = new BasePage(this.driver)
 await base.goToUrl('https://demowebshop.tricentis.com/login')
})

When('user clicks on login',async function()
{
 const logpage = new LoginPage(this.driver)
 await logpage.LoginClickButton()
 await logpage.EmailValue('shraddhasharma2603@gmail.com')
 await logpage.PasswordValue('Shraddha@26')
 await logpage.ClickOnLoginButton()
    
})
Then('user is successfully login', async function()
{
 await this.driver.wait(until.elementLocated(By.css('a.account')), 10000)
 const actual = await this.driver.findElement(By.css('a.account')).getText()
 const expected ="shraddhasharma2603@gmail.com"
 try{
    assert.strictEqual(actual, expected,"Success Result")
 }catch (error)
 { console.log(error)}

})