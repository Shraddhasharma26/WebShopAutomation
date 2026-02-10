const{By, until,Key}=require('selenium-webdriver')
const BasePage= require('./BasePage.js');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
class SearchFunctionality extends BasePage
{
    constructor(driver)
    {
        super(driver)
        this.driver=driver
    }
async searchBar()
{
    const search= this.driver.wait(until.elementLocated(By.xpath("//input[@class='search-box-text ui-autocomplete-input']")))
    await this.driver.wait(until.elementIsVisible(search))
    await search.click()
    await search.sendKeys("jewelry")
    await search.sendKeys(Key.ENTER);

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
    console.log('run 1')
    const material = await this.driver.wait(until.elementLocated(By.xpath('//select[@id="product_attribute_71_9_15"]')), 10000);
    await this.driver.wait(until.elementIsVisible(material), 10000);
    await material.click();
    console.log('run 2')
    const length = await this.driver.findElement(By.css('input#product_attribute_71_10_16.textbox'));
    await length.sendKeys('10');
    await sleep(3000)
    console.log('run 3')
    const scroll_pend = await this.driver.findElement(By.css('ul.option-list'))
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", scroll_pend);
     // Use findElements for array
     const pendent = await this.driver.findElement(By.xpath("//input[@id='product_attribute_71_11_17_49']"))
    await pendent.click();
    // console.log('run 4')
    const wishlist = await this.driver.wait(until.elementLocated(By.xpath('//input[starts-with(@id, "add-to-wishlist-button")]')),5000);
    console.log("wishlist")
    await this.driver.wait(until.elementIsVisible(wishlist),5000);
    await wishlist.click();
    console.log('run 5')
}
}
module.exports = SearchFunctionality