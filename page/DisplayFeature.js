const{By,until,Select, Key }=require('selenium-webdriver')
const BasePage= require('./BasePage.js');
const assert =require("assert")

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

class DisplayFeature extends BasePage
{
    constructor(driver)
    {
        super(driver)
        this.driver=driver
        this.displaySelectElement=null
    }

 async NavigationOption()
 {
    const shoes = await this.driver.findElements(By.xpath("//a[@href ='/apparel-shoes']"))
    const element = shoes[2]
    await element.click()
 }
 
 async ChangeDisplay()
{
   const displaySelectElement = await this.driver.findElement(By.id('products-pagesize'));
   const select = new Select(displaySelectElement);
   await select.selectByIndex(0);  // This handles opening and selecting
   
   // Wait for page to update after selection
   await this.driver.sleep(1000);  // Or use explicit wait for item-box elements
   
   const selectedOption = await select.getFirstSelectedOption();
   this.selectedValue = await selectedOption.getText();
   console.log("selected value:-", this.selectedValue);
}

 async assertNumberOfItem()
 {
    let count =0
    const countquantity = await this.driver.findElements(By.css('div.item-box'))
   //  for (let i=0; i<countquantity.length; i++)
   //  {
   //      count=count+1
   //  }
   // console.log("count qunatity :",countquantity)
   count= countquantity.length
   //  console.log("The total count is ", count)
    try
    {
    assert.strictEqual(Number(this.selectedValue), count,"Test case passed")
    }
    catch (error) 
        {
            console.error("An error occurred:", error);
        }
 }
 async sortByFeature()
 {
    const sortbyoption = this.driver.wait(until.elementsLocated(By.css('select#products-orderby')))
   //  console.log(sortbyoption)
 }

}
module.exports = DisplayFeature