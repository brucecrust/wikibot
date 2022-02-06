const Home = require("./screens/home.js")
const {driver} = require("./tests/baseTest");

// TODO: Create home page, create article page
// TODO: Create components: Search bar, title, side bar, infobox

(async function example() {
    let home = new Home();

    try {
        await home.loadPage();
    } finally {
        await driver.quit();
    }
})();