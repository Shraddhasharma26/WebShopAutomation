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
        this.option4=null
        this.select=null
        //this.displaySelectElement=null
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
   //await driver.executeScript('arguments[0].scrollIntoView(true);', displaySelectElement);
   await displaySelectElement.click()
   this.option4 = await driver.findElement(By.xpath("//select[@id='products-pagesize']//option[@value='4']"));
    const actions = driver.actions();
    await actions.move({origin: this.option4}).click().perform();
   //await displaySelectElement.getText();
   //const select = new Select(displaySelectElement);
   //await select.selectByIndex(0);  // This handles opening and selecting
   
   // Wait for page to update after selection
   //await this.driver.sleep(1000);  // Or use explicit wait for item-box elements
   
   //const selectedOption = await select.getFirstSelectedOption();
   //this.selectedValue = await selectedOption.getText();
   console.log("selected value:-", this.option4 );
}

 async assertNumberOfItem()
 {
    let count =0
    const countquantity = await this.driver.findElements(By.css('div.item-box'))
   
    for (let i=0; i<countquantity.length; i++)
    {
        count=count+1
    }
   //console.log("count qunatity :",countquantity)
   //count= countquantity.length
   console.log("The total count is ", count)
    try
    {
    assert.strictEqual(this.selectedText, count,"Test case passed")
    }
    catch (error) 
        {
            console.error("An error occurred:", error);
        }
 }
 async sortByFeature()
 {
    const sortbyoption = this.driver.wait(until.elementLocated(By.css('select#products-orderby')))
    this.select = new Select(sortbyoption);
    await this.select.selectByIndex(1);  
    await sleep(3000)
   //  console.log(sortbyoption)
 }
async compareSort()
{
   const selectedOption = this.select.getFirstSelectedOption();
   const actualText = await selectedOption.getText(); 
   const expected = "Name: A to Z";
 try {
        assert.strictEqual(actualText, expected);  // Fixed assertion
    } catch (error) {
      console.log(error)
    }
}
module.exports = DisplayFeature


//need to check why this feature page is not working