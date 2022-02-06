const BaseScreen = require("./base/baseScreen")

class Article extends BaseScreen {

    constructor(driver, url, title) {
        super(driver, url);
        this.title = title
    }

    async verifyUrl() {
        return this.confirmUrl(this.url);
    }

    async waitForDisplay() {
        await this.waitForTitle(this.title)
    }
}

module.exports = Article;