const{By, until}=require('selenium-webdriver')
const BasePage= require('./BasePage.js');

class SearchFunctionality extends BasePage
{
    constructor(driver)
    {
        super(driver)
        this.driver=driver
    }
async searchBar()
{
    const search= this.driver.wait(until.elementLocated(By.xpath("//input[@id='small-searchterms']")))
    await this.driver.wait(until.elementIsVisible(search))
    await this.search.click()
    await this.search.sendKeys("jewelry")
    await this.search.sendKeys(Key.ENTER);

}
async searchItem()
{
  const element = await this.driver.findElement(By.xpath("//*[contains(text(), 'Create Your Own Jewelry')]"));
  await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
  const add = await this.driver.wait(until.elementLocated(By.xpath("//input[@class='button-2 product-box-add-to-cart-button']")))
  await this.driver.wait(until.elementIsVisible(add))
  await this.add.click()
}
async searchAddWishlist()
{
    const material = await this.driver.wait(until.elementLocated(By.css('select#product_attribute_71_9_15.valid')))
    await this.driver.wait(until.elementIsVisible(material))
    await this.material[1].click()
    const length = await this.driver.findElement(By.css('input#product_attribute_71_10_16.textbox'))
    await this.length.senKeys('10')
    const pendents = await this.driver.findElement(By.css('ul.option-list'))
    await this.pendents[1].click()
    const wishlist = await this.driver.wait(until.elementLocated(By.xpath('input[@id="add-to-wishlist-button-71"]')))
    await this.driver.wait(until.elementIsVisible(wishlist))
    await this.wishlist.click()
}
}