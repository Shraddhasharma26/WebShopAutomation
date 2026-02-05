const{By, until,Key}=require('selenium-webdriver')
const AddCart= require('../page/AddCart.js');
const assert =require("assert")

class ShoppingCart extends AddCart
{
     
      constructor(driver)
    {
        super(driver)
        this.driver=driver 
        this.num=null
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
        this.quantity= this.driver.wait(until.elementLocated(By.xpath("//input[starts-with(@name, 'itemquantity')]")))
        await this.driver.wait(until.elementIsVisible(this.quantity))
        await this.quantity.clear()
        this.num =num
        const value = num
        await this.quantity.sendKeys(value)
        await this.quantity.sendKeys(Key.ENTER);
    }

    async CalculateChange()
    {
        console.log('starting of calculate change')
        const price = this.driver.wait(until.elementLocated(By.css('span.product-unit-price')))
        await this.driver.wait(until.elementIsVisible(price))
        const value_price = await price.getText()
        console.log("value:",value_price)
         const total = this.num*value_price
         console.log("The total" , total)
         console.log('end of calculate change')
         const subtot = this.driver.wait(until.elementLocated(By.css('span.product-subtotal')))
         await this.driver.wait(until.elementIsVisible(subtot))
         const subtotal = await subtot.getText()
         const subtotal_num = parseInt(parseFloat(subtotal));  // 30
         const subtotal_str = subtotal_num.toString();   
         console.log("subtotal_str:", subtotal_str)
         try{
             assert.strictEqual(Number(total), Number(subtotal_str),"Success Result")
          }catch (error)
          { console.log(error)}
          console.log('ending of calculate change')

    }
}
module.exports= ShoppingCart