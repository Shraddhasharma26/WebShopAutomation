const{By, until}=require('selenium-webdriver')
const AddCart= require('../page/AddCart.js');

class ShoppingCart extends AddCart
{
      constructor(driver)
    {
        super(driver)
        this.driver=driver  
        this.num = null;    
    }
    async SelectItemShop()
    {
        this.removeitem = this.driver.wait(until.elementLocated(By.xpath("//input[@name='removefromcart']")))
        await this.driver.wait(until.elementIsVisible(this.removeitem))
        await this.removeitem.click()
    }
    async ChangeQuantity(num)
    {
        this.num=num
        this.quantity= this.driver.wait(until.elementLocated(By.xpath("//input[@name='removefromcart']")))
        await this.driver.wait(until.elementIsVisible(this.quantity))
        await this.quantity.clear()
        const value = this.num
        await this.quantity.sendKeys(value)
        const total = this.num*10
    }
}
module.exports= ShoppingCart