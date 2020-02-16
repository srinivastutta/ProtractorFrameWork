let homepage = require('../Pages/homepage')


describe("Calculator Test", function () {
    //beforEach function will be executed every 'it' block
    beforeEach(function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
    });

    it("addition test1", function () {

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('4');

        homepage.clickGo();

        homepage.verifyResults('8')

        browser.sleep(2000)
    });

    it("addition test2", function () {

        homepage.enterFirstNumber('4');

        homepage.selectdropDown('[value="MULTIPLICATION"]');

        homepage.enterSecondNumber('4');

        homepage.clickGo();

        homepage.verifyResults('16')

        browser.sleep(3000)
    });
});
