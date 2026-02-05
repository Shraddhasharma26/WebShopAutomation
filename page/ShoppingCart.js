const{By, until}=require('selenium-webdriver')
const AddCart= require('../page/AddCart.js');

class ShoppingCart extends AddCart
{
     num;
      constructor(driver)
    {
        super(driver)
        this.driver=driver 
    }
    async SelectItemShop()
    {
        this.removeitem = this.driver.wait(until.elementLocated(By.xpath("//input[@value='6287895']")))
        await this.driver.wait(until.elementIsVisible(this.removeitem))
        await this.removeitem.click()
    }
    async ChangeQuantity(num)
    {
        this.quantity= this.driver.wait(until.elementLocated(By.xpath("//input[@name='itemquantity6287895']")))
        await this.driver.wait(until.elementIsVisible(this.quantity))
        await this.quantity.clear()
        this.num =num
        const value = num
        await this.quantity.sendKeys(value)
    }

    async CalculateChange()
    {
        const price = this.driver.wait(untilelementLocated(By.css('span.product-unit-price')))
        await this.driver.wait(until.elementIsVisisble(this.price))
        const value_price = await this.price.getText()
        console.log(value_price)
        const integer_value = driver.execute_script(
        "return parseInt(parseFloat(arguments[0]));", value_price)
         const total = this.num*integer_value
         console.log("The total" , total)
    }
}
module.exports= ShoppingCart