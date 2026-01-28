const { After, Before, setDefaultTimeout } = require("@cucumber/cucumber")
const {By ,Builder, until}= require("selenium-webdriver")
setDefaultTimeout(60 * 1000);

Before({ timeout: 60 * 1000 },async function()
{
   console.log('The code run starts')
})

After({ timeout: 60 * 1000 }, async function()
{
  if(this.driver) {
    await this.driver.quit()
  }
})