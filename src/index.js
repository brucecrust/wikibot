const {TestHome} = require("./tests/home");
const {Driver} = require("./tests/baseTest");

// TODO: Create home page, create article page
// TODO: Create components: Search bar, title, side bar, infobox

(async function example() {
    await Driver.init().then(r => {
        TestHome.test(r);
    });
})();