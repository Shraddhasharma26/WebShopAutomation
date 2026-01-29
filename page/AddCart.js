const{By, until}=require('selenium-webdriver')
const BasePage= require('../page/BasePage.js');
//const LoginPage = require('../page/LoginPage.js') 

class AddCart extends BasePage
{
      constructor(driver)
    {
        super(driver)
        this.driver=driver  
    }
    async SelectItems()
    {
      this.book = this.driver.wait(until.elementLocated(By.xpath("(//a[@href='/books'])[1]")))
       await this.driver.wait(until.elementIsVisible(this.book))
       await this.book.click()
    }
    async AddToCart()
    {
      this.item=this.driver.wait(until.elementLocated(By.xpath("//input[@value='Add to cart']")))
      await this.driver.wait(until.elementIsVisible(this.item))
      await this.item.click()
    }
    async MoveToShoppingCart()
    {
      this.cart = this.driver.wait(until.elementLocated(By.css('span.cart-label')))
      await this.driver.wait(until.elementIsVisible(this.cart))
      await this.cart.click()
    }
}
module.exports= AddCart