module.exports = function() {
    this.Then(/^I see one or more blog posts$/, function () {
        browser.waitForExist('.post');
    });
};