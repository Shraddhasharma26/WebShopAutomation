const{By, until,Key}=require('selenium-webdriver')
const BasePage= require('./BasePage.js');


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const assert =require("assert")
class SearchFunctionality extends BasePage
{
    constructor(driver)
    {
        super(driver)
        this.driver=driver
        this.search = null
    }
async searchBar()
{
    this.search = this.driver.wait(until.elementLocated(By.xpath("//input[@id='small-searchterms']")))
   // const utility = new Utility(this.driver)
    //const search= this.driver.wait(until.elementLocated(By.xpath("//input[@class='search-box-text ui-autocomplete-input']")))
    //await this.driver.wait(until.elementIsVisible(search))
    //const search = utility.searchFunction()
    await this.driver.wait(until.elementIsVisible(this.search))
    await this.search.click()
}
async JewelryFunction()
{
    await this.search.sendKeys("jewelry")
    await this.search.sendKeys(Key.ENTER);
    
}

async searchItem()
{
  const element = await this.driver.findElement(By.xpath("//*[contains(text(), 'Create Your Own Jewelry')]"));
  await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
  const add = await this.driver.wait(until.elementLocated(By.xpath("//input[@class='button-2 product-box-add-to-cart-button']")))
  await this.driver.wait(until.elementIsVisible(add))
  await add.click()
}
async searchAddWishlist() 
{
    const material = await this.driver.wait(until.elementLocated(By.xpath('//select[@id="product_attribute_71_9_15"]')), 10000);
    await this.driver.wait(until.elementIsVisible(material), 10000);
    await material.click();

    const length = await this.driver.findElement(By.css('input#product_attribute_71_10_16.textbox'));
    await length.sendKeys('10');
    await sleep(3000)

    const scroll_pend = await this.driver.findElement(By.css('ul.option-list'))
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", scroll_pend);
     // Use findElements for array
     const pendent = await this.driver.findElement(By.xpath("//input[@id='product_attribute_71_11_17_49']"))
    await pendent.click();
    
    const wishlist = await this.driver.wait(until.elementLocated(By.xpath('//input[starts-with(@id, "add-to-wishlist-button")]')),5000);
    console.log("wishlist")
    await this.driver.wait(until.elementIsVisible(wishlist),5000);
    await wishlist.click();
   
}
async InvalidSearch()
{
    await this.search.sendKeys("movies")
    await this.search.sendKeys(Key.ENTER);
}
 async MessageDisplay()
 {
    const actual = this.driver.wait(until.elementLocated(By.css('strong.result')))
    await this.driver.wait(until.elementIsVisible(actual))
    const actualText = await actual.getText();
    const expected = "No products were found that matched your criteria."
      try
      {
      if (assert.strictEqual(actualText, expected))
        {
        console.log('The searched item is not available')
        }
    }
        catch (error) 
        {
            console.error("An error occurred:", error);
        }
 }
 async ProvideTitle()
 {
    //await this.driver.wait(until.elementIsVisible(search))
    //await this.search.click()
    await this.search.sendKeys("blue")
    await this.search.sendKeys(Key.ENTER);
 }
 async FoundCheck()
 {
    const items = await this.driver.wait(until.elementsLocated(By.css('div.item-box')), 10000);
    await this.driver.wait(async () => {
        for (const item of items) {
            const visible = await item.isDisplayed();
            if (visible) return true;
        }
        return false;
    }, 10000);
    
    const element = items[1];  // Your target (second item)
    console.log('Target element:', element);
    
    for (let i = 0; i < items.length; i++) 
    {
         if (items[i]===element)
        {
            console.log("element found")
        }
        else
        {
            console.log("Item is not available")
        }

        //const isMatch = items[i] === element;
        //console.log(isMatch ? "element found" : "Item is not available");
    }
 }
}
module.exports = SearchFunctionality