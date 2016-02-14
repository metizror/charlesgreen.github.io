module.exports = function() {
    this.Given(/^I have visited "([^"]*)"$/, function (link) {
        browser.url(link);
    });
};