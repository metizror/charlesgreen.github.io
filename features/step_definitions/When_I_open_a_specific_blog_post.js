module.exports = function() {
    this.When(/^I open a specific blog post$/, function () {
        browser.waitForExist('//article[1]/div[1]/h2/a');
        browser.url(browser.getAttribute('//article[1]/div[1]/h2/a', 'href'));
    });
};