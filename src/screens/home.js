const BaseScreen = require("./base/baseScreen");
const {Urls} = require("../resources/urls");
const {By} = require("selenium-webdriver");

class Home extends BaseScreen {

    constructor(driver) {
        super(driver, Urls.home);
        this.searchMatcher = By.name("search");
        this.title = "Wikipedia, the free encyclopedia";
    }

    searchForArticle() {
        this.submitText(this.searchMatcher, "")
    }

    waitForDisplay() {
        this.waitForTitle(this.title)
    }
}

module.exports = Home;