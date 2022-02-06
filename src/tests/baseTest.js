const {Builder} = require("selenium-webdriver");

const Driver = {
    init: async () => {
        const driver = await new Builder()
            .forBrowser("chrome")
            .build();

        return driver;
    }
}

module.exports.Driver = Driver