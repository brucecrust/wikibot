const Home = require("../screens/home");
const {By, until, Key} = require("selenium-webdriver")

exports.TestHome = {
    test: async(driver) => {
        let home = new Home(driver);

        try {
            await home.loadPage();
            await home.waitForDisplay();
            await home.clickSearchInput();
            await home.searchForArticle();
            await home.waitForTitle("JavaScript");
            await home.fetchArticleUrl().then(r => console.log(`URL: ${r}`))

        } catch (e) {
            console.log(`Oh no! Exception: ${e}`);
            await driver.quit();
        }
    }
}