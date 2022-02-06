const {Builder} = require("selenium-webdriver");
exports.driver = new Builder()
    .forBrowser("chrome")
    .build();