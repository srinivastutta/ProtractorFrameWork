let homepage = function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'))
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    var select = element(by.css('[ng-model="operator"]'));
    var selectall = element.all(by.options('value for (key, value) in operators'));
    let history = element.all(by.repeater('result in memory'));

    this.get = function(url){
        browser.get(url);
    };
    this.selectByIndex = function(index){
        selectall.get(index).click();

    };

    this.selectdropDown = function(value){
        select.$(value).click();
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

    this.add = function (a,b){
        firstNumber_input.sendKeys(a);
        secondNumber_input.sendKeys(b);
        goButton.click();
        
    };

};

module.exports = new homepage();