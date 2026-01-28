class BasePage
{
    constructor(driver)  //why constructor for driver ?
    {
        this.driver = driver
    }


async goToUrl(url)
{
    await this.driver.get(url)
    await this.driver.manage().window().maximize()
}
}
module.exports=BasePage