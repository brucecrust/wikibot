const {driver} = require("../../tests/baseTest");

class BaseScreen {

    // region | Constructor --------------------------------------------------------------------------------------------

    constructor(url) {
        this.url = url;
    }

    // endregion

    // region | Action Methods -----------------------------------------------------------------------------------------

    async loadPage() {
        await driver.get(this.url);
    }

    async typeText(matcher, text) {
        driver.findElement(matcher).sendKeys(text);
    }

    async submitText(matcher, text) {
        driver.findElement(matcher).sendKeys(text);
    }

    // endregion

    //region | Assertion Methods ---------------------------------------------------------------------------------------

    // endregion

    // region | Wait Methods -------------------------------------------------------------------------------------------

    //endregion
}

module.exports = BaseScreen;