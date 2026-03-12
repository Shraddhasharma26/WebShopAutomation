const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://demowebshop.tricentis.com/');

  // Login
  await page.click('text=Log in');
  await page.fill('#Email', 'shraddhasharma2603@gmail.com');
  await page.fill('#Password', 'Shraddha@26');
  await page.click('input[value="Log in"]');

  // Add item
  await page.click("(//a[@href='/books'])[1]");
  await page.locator("//input[@value ='Add to cart']").first().click();

  // Go to cart
  await page.click("(//a[@href='/cart'])[1]");

  // Check the XPath
  const xpathLocator = page.locator("//td[@class='qty nobr']//input[starts-with(@name,'itemquantity')]");
  console.log('Elements found with corrected XPath:', await xpathLocator.count());
  if (await xpathLocator.count() > 0) {
    const outerHTML = await xpathLocator.first().evaluate(el => el.outerHTML);
    console.log('HTML:', outerHTML);
  }

  // Also check the original (typo)
  try {
    const typoLocator = page.locator("//td[@class='qty nobr']//input[start-with(@name='itemquantity')]");
    console.log('Elements with typo XPath:', await typoLocator.count());
  } catch (e) {
    console.log('Typo XPath error:', e.message);
  }

  await browser.close();
})();