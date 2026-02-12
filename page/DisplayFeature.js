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
    }

 async 
}