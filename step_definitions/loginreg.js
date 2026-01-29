const {Given, When, Then}= require("@cucumber/cucumber")
const {By ,Builder, until, Key}= require("selenium-webdriver")

const BasePage = require('../page/BasePage.js'); 
const RegisterPage = require('../page/RegisterPage.js'); 
const assert =require("assert")
let driver;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
Given('user opens the url', async function()
{
   driver = await new Builder().forBrowser('chrome').build();
    const basepage = new BasePage(driver)
    await basepage.goToUrl('https://demowebshop.tricentis.com/login')
})
When('user register to it', async function()
{
    const registration = new RegisterPage(driver)
    await registration.clickToRegister()
    const ele = await driver.findElement(By.css('div.page.registration-page'))
    await driver.executeScript("arguments[0].scrollIntoView(true);",ele)
    await driver.wait(until.elementLocated(By.css('input#gender-female')), 2000)
    await registration.femaleGender()
    await registration.FirstName('shraddha')
    await registration.LastName('sharma')
    await registration.EmailAddress('me.ssharma3@gmail.com')
    await registration.GivePassword('Automate@26')
    await registration.ConfPassword('Automate@26')
    await driver.wait(until.elementLocated(By.id('register-button')), 2000)
    await registration.RegisterButton()
})
Then('user is successfully registered', async function()
{
    const actual = await driver.findElement(By.css('div.result')).getText()
    const expected = "Your registration completed"
    try{
     assert.strictEqual(actual, expected)
  }catch(error){
     console.log(error)
  }
  await driver.findElement(By.css('input.button-1.register-continue-button')).click()
})