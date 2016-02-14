module.exports = function() {
    this.Then(/^I see the full blog post$/, function () {
        browser.waitForVisible('.container');
    });
};