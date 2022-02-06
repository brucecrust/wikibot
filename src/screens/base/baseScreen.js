const {Integers} = require("../../resources/integers");
const {until} = require("selenium-webdriver")

class BaseScreen {

    // region | Constructor --------------------------------------------------------------------------------------------

    constructor(driver, url) {
        this.driver = driver;
        this.url = url;
    }

    // endregion

    // region | Action Methods -----------------------------------------------------------------------------------------

    async loadPage() {
        await this.driver.get(this.url);
    }

    async typeText(matcher, text) {
        this.driver.findElement(matcher).sendKeys(text);
    }

    async submitText(matcher, text) {
        this.driver.findElement(matcher).sendKeys(text);
    }

    // endregion

    //region | Assertion Methods ---------------------------------------------------------------------------------------

    // endregion

    // region | Wait Methods -------------------------------------------------------------------------------------------

    async waitForTitle(title) {
        this.driver.wait(until.titleIs(title), Integers.WAIT)
    }

    //endregion
}

module.exports = BaseScreen;