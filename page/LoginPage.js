const{By, until}=require('selenium-webdriver')
const BasePage= require('../page/BasePage.js');

class LoginPage extends BasePage
{
    constructor(driver)
    {
        super(driver)
        this.driver=driver  
    }
    async LoginClickButton()
    {
        this.loginclick = this.driver.wait(until.elementLocated(By.linkText('Log in')))
        await this.driver.wait(until.elementIsVisible(this.loginclick))
        await this.loginclick.click()
    }
    async EmailValue(mail)
    {
        this.email =this.driver.wait(until.elementLocated(By.id('Email')))
        await this.driver.wait(until.elementIsVisible(this.email))
        await this.email.sendKeys(mail)

    }
    async PasswordValue(pass)
    {
        this.password = this.driver.wait(until.elementLocated(By.id('Password')))
        await this.driver.wait(until.elementIsVisible(this.password))
        await this.password.sendKeys(pass)
    }
    async ClickOnLoginButton()
    {
        this.logbutton = this.driver.wait(until.elementLocated(By.xpath('//input[@value="Log in"]')))
        await this.driver.wait(until.elementIsVisible(this.logbutton))
        await this.logbutton.click()
    }    
}
module.exports=LoginPage