let homepage = require('../Pages/homepage')


describe("Calculator Test", function () {

    it("addition test1", function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('4');

        homepage.clickGo();

        homepage.verifyResults('8')

        browser.sleep(2000)
    });

    it("addition test2", function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('4');

        homepage.clickGo1();

        homepage.verifyResults('8')

        browser.sleep(3000)
    });

});
