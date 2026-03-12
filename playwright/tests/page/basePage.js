class basePage {
  constructor(page) {
    this.page = page;
  }

  async goToUrl(url) {
    await this.page.goto(url);
  }
}

module.exports = basePage;