const { expect } = require('@playwright/test');
const basePage = require('./basePage.js');

class addCart extends basePage
{
    constructor(page)
    {
        super(page)
        this.page=page
    }
    async selectItem()
    {
        await this.page.locator("(//a[@href='/books'])[1]").click();
        await this.page.locator('div.product-grid').scrollIntoViewIfNeeded();
        await this.page.locator("//input[@value ='Add to cart']").first().click()
        //await this.page.locator('//input[value="Add to cart"]').click()
    }
    async goToShoppingCart()
    {
        await this.page.locator("(//a[@href='/cart'])[1]").scrollIntoViewIfNeeded();
        await this.page.locator("(//a[@href='/cart'])[1]").click()
        // get the link text for the product and trim whitespace
        const actual = await this.page
            .locator("//td[@class='product']//a[@href='/computing-and-internet']")
            .textContent();
        console.log("the actual :", actual);

        // example assertion using Playwright expect
        await expect(actual.trim()).toBe("Computing and Internet");
    }
}
module.exports=addCart;