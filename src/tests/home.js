const Home = require("../screens/home");

exports.TestHome = {
    test: async(driver) => {
        let home = new Home(driver);

        try {
            await home.loadPage();
            await home.waitForDisplay()
            await home.searchForArticle()
        } finally {
            await driver.quit();
        }
    }
}