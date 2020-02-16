let homepage = require('../Pages/homepage')

describe('Verifying history count', function () {

    it('check the history count', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.add(2, 3);
        homepage.add(2, 3);
        homepage.add(2, 3);

        let historyCount = element.all(by.repeater('result in memory'));
        //to validate row count
        expect(historyCount.count()).toEqual(3);

        });
    });

    describe('VerifyPageTitle', function () {

        it('PageTitleTest', function () {
            homepage.get('http://juliemr.github.io/protractor-demo/');
            expect(browser.getTitle()).toEqual('Super Calculator');

        });
    });