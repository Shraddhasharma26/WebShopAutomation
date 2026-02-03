const{By, until}=require('selenium-webdriver')
const AddCart= require('../page/AddCart.js');

class ShoppingCart extends AddCart
{
      constructor(driver)
    {
        super(driver)
        this.driver=driver  
    }
    async SelectItem()
    {
        this.removeitem = this.driver.wait(until.elementLocated(By.xpath("//input[@name='removefromcart']")))
        await this.driver.wait(until.elementIsVisible(this.removeitem))
        await this.removeitem.click()
    }
    async ChangeQuantity(num)
    {
        this.quantity= this.driver.wait(until.elementLocated(By.xpath("//input[@name='itemquantity6277434']")))
        await this.driver.wait(until.elementIsVisible(this.quantity))
        await this.quantity.clear()
        const value = num
        await this.quantity.sendkeys(value)
        const total = num*10
    }
}
module.exports=ShoppingCart