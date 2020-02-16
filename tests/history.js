let homepage = require('../Pages/homepage')

describe('Verifying history count', function () {

    it('check the history count', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.add(2, 3);
        homepage.add(2, 3);
        homepage.add(2, 3);

        let history = element.all(by.repeater('result in memory'));
        //to validate row count
        expect(history.count()).toEqual(3);


    });




});