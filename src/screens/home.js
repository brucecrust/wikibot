const BaseScreen = require("./base/baseScreen");
const {Urls} = require("../resources/urls");

class Home extends BaseScreen {

    constructor() {
        super(Urls.home);
    }
}

module.exports = Home;