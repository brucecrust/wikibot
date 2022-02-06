const BaseScreen = require("./base/baseScreen");
const {Urls} = require("../resources/urls");
const {By} = require("selenium-webdriver");

class Home extends BaseScreen {

    constructor(driver) {
        super(driver, Urls.home);
        this.searchMatcher = By.name("search");
        this.title = "Wikipedia";
    }

    async clickSearchInput() {
        await this.click(this.searchMatcher)
    }

    async searchForArticle(title) {
        await this.submitText(this.searchMatcher, title)
    }

    async waitForDisplay() {
        await this.waitForTitle(this.title)
    }
}

module.exports = Home;