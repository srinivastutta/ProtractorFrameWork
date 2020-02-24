let homepage = require('../Pages/homepage')


describe("Calculator Tests", function () {
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

    it("multiplication test2", function () {

        homepage.enterFirstNumber('5');
        //way 1
        //homepage.selectdropDown('[value="MULTIPLICATION"]');
        //way 2
        homepage.selectByIndex(4);

        homepage.enterSecondNumber('4');

        homepage.clickGo();

        homepage.verifyResults('1');

        browser.sleep(3000)
    });

    it("addition test3", function () {

        homepage.add('4','5')
        homepage.verifyResults('9');
        browser.sleep(3000);
    });

});
