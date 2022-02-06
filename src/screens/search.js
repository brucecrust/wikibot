const BaseScreen = require("./base/baseScreen");

class Search extends BaseScreen {

    constructor(driver, url, title) {
        super(driver, url, title);
    }

    async waitForDisplay() {
       await this.waitForTitle(this.title);
    }

}