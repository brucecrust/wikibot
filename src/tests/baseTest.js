const {Builder} = require("selenium-webdriver");

const Driver = {
    init: async () => {
        try {
            return await new Builder()
                .forBrowser("chrome")
                .build();
        } catch (e) {
            console.log(e);
        }
    }

}

module.exports.Driver = Driver