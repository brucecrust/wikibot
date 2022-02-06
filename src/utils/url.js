const {Urls} = require("../resources/urls")

const Url = (driver, url) => {
    this.driver = driver
    this.url = url

    return {
        asString: () => {
            return this.url;
        },

        asUrl: () => {
            return this;
        },

        go: () => {
            this.driver.get(this.url);
        }
    }
}

exports.Url = () => {
    let driver = null;
    let url = Urls.ARTICLE_BASE;

    return {
        withDriver: (driver) => {
            this.driver = driver
            return this;
        },

        buildArticle: (articleTitle) => {
            this.url += articleTitle;
            return new Url(driver, url);
        }
    }
}
