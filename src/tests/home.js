const Home = require("../screens/home");
const Article = require("../screens/article")

exports.TestHome = {
    test: async(driver) => {
        const javascriptArticleTitle = "JavaScript";
        let home = new Home(driver);

        try {
            await home.loadPage();
            await home.waitForDisplay();
            await home.clickSearchInput();
            await home.searchForArticle(javascriptArticleTitle);
            await home.waitForTitle(javascriptArticleTitle);
            const url = home.fetchArticleUrl().then(r => console.log(`URL: ${r}`));

            let javascriptArticle = new Article(driver, url, javascriptArticleTitle);
            await javascriptArticle.waitForDisplay()

        } catch (e) {
            console.log(`Oh no! Exception: ${e}`);
            await driver.quit();
        }
    }
}