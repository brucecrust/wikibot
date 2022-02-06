const {Urls} = require("../resources/urls")

class Url {

    constructor(driver) {
        this.driver = driver;
        this.url = Urls.ARTICLE_BASE;
    }

    asArticle = () => {
        return this;
    }

    asString = () => {
        return this.url;
    }

    buildArticle = (articleTitle) => {
        this.url += articleTitle;
        return this;
    }

    load = () => {
        this.driver.get(this.url);
        return this;
    }
}

module.exports = Url;