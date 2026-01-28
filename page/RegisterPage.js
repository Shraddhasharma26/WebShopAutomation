const{By, until}=require('selenium-webdriver')
const BasePage= require('../page/BasePage.js');

class RegisterPage extends BasePage
{
   constructor(driver)
   {
    super(driver)
    this.driver =driver
   }
    async clickToRegister()
   {
    const register = await this.driver.findElement(By.css('a.ico-register'))
    await register.click()
   }
   async femaleGender()
   {
    const female = await this.driver.findElement(By.xpath("//input[@id='gender-female']"))
    await female.click()
   }
  /**  async maleGender()
   {
    await this.male.click()
   }**/
   async FirstName(name)
   {
    const firstname = await this.driver.findElement(By.id('FirstName'))
    await firstname.sendKeys(name)
   }
   async LastName(last)
   {
    const lastname = await this.driver.findElement(By.id('LastName'))
    await lastname.sendKeys(last)
   }
   async EmailAddress(mail)
   {
    const email = await this.driver.findElement(By.id('Email'))
    await email.sendKeys(mail)
   }
   async GivePassword(pass)
   {
    const password = await this.driver.findElement(By.id('Password'))
    await password.sendKeys(pass)
   }
   async ConfPassword(conf)
   {
    const confirmpassword = await this.driver.findElement(By.id('ConfirmPassword'))
    await confirmpassword.sendKeys(conf)
   }
   async RegisterButton()
   {
    const regbutton = await this.driver.findElement(By.id('register-button'))
    await regbutton.click()
   }
}
module.exports=RegisterPage