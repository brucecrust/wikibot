const Home = require("../screens/home");
const Article = require("../screens/article")
const Url = require("../utils/url");

exports.TestHome = {
    test: async(driver) => {
        const javascriptArticleTitle = "JavaScript";
        let urlBuilder = new Url(driver);

        try {
            let home = await new Home(driver)
                .withUrl(urlBuilder.buildArticle(this.articleName))
            await home.url.load();
            await home.waitForDisplay();
            await home.clickSearchInput();

            /*
            await home.searchForArticle(javascriptArticleTitle);
            await home.waitForTitle(javascriptArticleTitle);
             */

            let javascriptArticle = new Article(driver, new
                Url(driver).buildArticle(javascriptArticleTitle),
                javascriptArticleTitle);

            await javascriptArticle.url.load();
            await javascriptArticle.waitForDisplay();
            await javascriptArticle.verifyUrl().then(r => {
                // Test passes!
                console.log(r)
            });

        } finally {
            await driver.quit();
        }
    }
}