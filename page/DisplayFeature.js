const{By,until,Key}=require('selenium-webdriver')
const BasePage= require('./BasePage.js');
const assert =require("assert")

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

class DisplayFeature extends BasePage
{
    constructor(driver)
    {
        super(driver)
        this.driver=driver
        this.DisplayNumber=null
    }

 async NavigationOption()
 {
    const shoes = await this.driver.findElements(By.xpath("//a[@href ='/apparel-shoes']"))
    const element = shoes[3]
    await this.driver.element.click()
 }
 async ChangeDisplay()
 {
    const display = await this.driver.findElement(By.id('products-pagesize'))
    await this.driver.display.click()
    this.DisplayNumber = this.driver.wait(until.elementLocated(By.xpath("//select//option[@value='https://demowebshop.tricentis.com/apparel-shoes?pagesize=4']")))
    await this.driver.wait(until.elementIsVisible(this.DisplayNumber))
    await this.driver.DisplayNumber.click()
    //const actions = driver.actions({ async: true });
    //await actions.move({ origin: actions }).perform()
 }
 async assertNumberOfItem()
 {
    let count =0
    const countquantity = this.driver.findElements(By.css('div.item-box'))
    for (let i=0; i<countquantity.length; i++)
    {
        count=count+1
    }
    console.log("The total count is ", count)
    try
    {
    assert.strictEqual(this.DisplayNumber, count,"Test case passed")
    }
    catch (error) 
        {
            console.error("An error occurred:", error);
        }
 }
 async sortByFeature()
 {
    const sortbyoption = this.driver.wait(until.elementsLocated(By.css('select#products-orderby')))
    console.log(sortbyoption)
 }

}