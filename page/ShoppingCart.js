const{By, until,Key}=require('selenium-webdriver')
const AddCart= require('../page/AddCart.js');
const assert =require("assert")

class ShoppingCart extends AddCart
{
     
      constructor(driver)
    {
        super(driver)
        this.driver=driver  
    }
    async SelectItemShop()
    {
        console.log("Inside SelectItemShop")
        this.removeitem = this.driver.wait(until.elementLocated(By.xpath("//input[@name='removefromcart']")))
        await this.driver.wait(until.elementIsVisible(this.removeitem))
        await this.removeitem.click()
        console.log("Moving out SelectItemShop")
    }
    async ChangeQuantity(num)
    {
        this.quantity= this.driver.wait(until.elementLocated(By.xpath("//input[@name='removefromcart']")))
        await this.driver.wait(until.elementIsVisible(this.quantity))
        await this.quantity.clear()
        const value = num
        await this.quantity.sendKeys(value)
        const total = num*10
    }
}
module.exports= ShoppingCart