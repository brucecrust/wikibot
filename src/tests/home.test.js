const HomeTest = require("../screens/home");
const Article = require("../screens/article")
const Url = require("../utils/url");
const {Driver} = require("./baseTest");

test("test", async () => {
    let driver = await Driver.init();
    const javascriptArticleTitle = "JavaScript";
    let urlBuilder = new Url(driver);

    try {
        let home = await new HomeTest(driver)
            .withUrl(urlBuilder.buildArticle(this.articleName))
        await home.url.load();
        await home.waitForDisplay();
        await home.clickSearchInput();

        let javascriptArticle = new Article(driver, new
        Url(driver).buildArticle(javascriptArticleTitle));

        await javascriptArticle.url.load();
        await javascriptArticle.waitForDisplay();
        const correctUrl = await javascriptArticle.verifyUrl();

        expect(correctUrl).toBeTruthy();

    } finally {
        await driver.quit();
    }
});