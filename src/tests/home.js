const Home = require("../screens/home");

exports.TestHome = {
    test: async(driver) => {
        let home = new Home(driver);

        try {
            await home.loadPage();
        } finally {
            await driver.quit();
        }
    }
}