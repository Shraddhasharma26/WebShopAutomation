const {Given, When, Then,setDefaultTimeout}= require("@cucumber/cucumber")
const {By ,Builder, until, Key}= require("selenium-webdriver")

const BasePage = require('../page/BasePage.js');
const LoginPage= require('../page/LoginPage.js')
const DisplayFeature = require('../page/DisplayFeature.js')

Given('user launch the website and login to the page',async function()
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

Given('user selects any naviagtion option', async function()
{
  const choiceoption= new DisplayFeature(this.driver)
  await choiceoption.NavigationOption()
})

When('user changes the quantity per page', async function()
{
 const changedisplay = new DisplayFeature(this.driver)
 await changedisplay.ChangeDisplay()
})

Then('number of item displayed on that page is equal to the number of quantity selected',async function()
{
 const compare =new DisplayFeature(this.driver)
 await compare.assertNumberOfItem()
})

When('user changes the sortBy option',async function()
{
  const sorting= new DisplayFeature(this.driver)
  await sorting.sortByFeature()
})

Then('user must get the outcome as expected',async function()
{
  pass
})
When('user changed the grid option', async function()
{

})