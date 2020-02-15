let homepage = function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'))
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo)
    };

    this.clickGo = function(){
        goButton.click();

    };

    this.verifyResults = function(results){
        let outPut = element(by.cssContainingText('.ng-binding', results));
        expect(outPut.getText()).toEqual(results);

    };

};

module.exports = new homepage();