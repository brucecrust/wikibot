const BaseScreen = require("./base/baseScreen");
const {Urls} = require("../resources/urls");

class Home extends BaseScreen {

    constructor(driver) {
        super(driver, Urls.home);
    }
}

module.exports = Home;