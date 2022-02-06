const BaseScreen = require("./base/baseScreen")

class Article extends BaseScreen {

    constructor(driver, url) {
        super(driver, url);
    }

    async verifyUrl() {
        return this.confirmUrl(this.url.asString());
    }

    async waitForDisplay() {
        await this.waitForTitle(this.articleName)
    }
}

module.exports = Article;