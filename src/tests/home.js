const Home = require("../screens/home");
const Article = require("../screens/article")
const {Url} = require("../utils/url");

exports.TestHome = {
    test: async(driver) => {
        const javascriptArticleTitle = "JavaScript";

        try {
            let home = await new Home(driver).url.go();
            await home.waitForDisplay();
            await home.clickSearchInput();
            await home.searchForArticle(javascriptArticleTitle);
            await home.waitForTitle(javascriptArticleTitle);

            let javascriptArticle = new Article(driver,
                Url().withDriver(driver).buildArticle(javascriptArticleTitle),
                javascriptArticleTitle);

            await javascriptArticle.waitForDisplay()
            await javascriptArticle.verifyUrl().then(r => {
                console.log(r)
            });

        } finally {
            await driver.quit();
        }
    }
}