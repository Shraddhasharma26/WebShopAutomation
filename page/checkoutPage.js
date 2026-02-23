const{By,until,Select, Key }=require('selenium-webdriver')
const BasePage= require('./BasePage.js');
const AddCart=require('./AddCart.js')
const assert =require("assert")

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
class checkoutPage extends BasePage
{
      constructor(driver)
    {
        super(driver)
        this.driver=driver  
    }
 async selectItemInShop()
 {
    const tick = await this.driver.wait(until.elementLocated(By.xpath("//input[@type='checkbox']")))
    await this.driver.wait(until.elementIsVisible(tick))
    await tick.click()
    const scrolltoitem=await this.driver.findElement(By.xpath("//div[@class='shipping']"))
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", scrolltoitem);
    const country = await this.driver.wait(until.elementLocated(By.css('select#CountryId.country-input.valid')))
    await this.driver.wait(until.elementIsVisible(country))
    await country.click()
    const select = new select(country)
    await select.selectByIndex(5);
    const state = await this.driver.wait(until.elementLocated(By.css('select#StateProvinceId.state-input.valid')))
    await this.driver.wait(until.elementIsVisible(state))
    const stateselect = new select(state)
    await stateselect.selectByIndex(8)
    const scrolltotick = await this.driver.wait(until.elementLocated(By.css("div.terms-of-service")))
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", scrolltotick);
    const terms = await this.driver.wait(until.elementLocated(By.css('input#termsofservice')))
    await terms.click()
    const checkout = await this.driver.wait(until.elementLocated(By.xpath("//button[@id='checkout']")))
    await this.driver.wait(until.elementIsVisible(checkout))
    await checkout.click()
    await sleep(2000)
 }
 async checkoutForm()
 {
  const billaddress = await this.driver.wait(until.elementLocated(By.css('input.button-1.new-address-next-step-button')))
  await this.driver.wait(until.elementIsVisible(billaddress))
  await billaddress.click()
  const shipaddress = await this.driver.wait(until.elementLocated(By.id("PickUpInStore")))
  await this.driver.wait(until.elementIsVisible(shipaddress))
  await shipaddress.click()
  const clickonship = await this.driver.findElement(By.css("input.button-1.new-address-next-step-button"))
  await clickonship.click()
  const shipmethod = await this.driver.findElement(By.css("input.button-1.shipping-method-next-step-button"))
  await shipmethod.click()
  const paymethod = await this.driver.findElement(By.css("div.payment-details"))
  await paymethod.click()
  const selectpay = await this.driver.findElement(By.css("input.button-1.payment-method-next-step-button"))
  await selectpay.click()
  const payinfo = await this.driver.findElement(By.css("input.button-1.payment-info-next-step-button"))
  await payinfo.click()
  const confirmorder = await this.driver.findElement(By.css("input.button-1.confirm-order-next-step-button"))
   await this.driver.executeScript("arguments[0].scrollIntoView(true);", confirmorder);
   await confirmorder.click()
 }
 async successPlacedOrder()
 {
   const actualmsg = await this.driver.findElement(By.css("div.title")).getText()
   const expectedmsg = "Your order has been successfully processed!"
   try {
       assert.strictEqual(actualmsg, expectedmsg);
     } catch (error) {
       console.log("Assertion failed:", error.message);
     }
 }
}
module.exports = checkoutPage