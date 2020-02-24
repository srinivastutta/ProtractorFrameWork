describe ('Keyboard Actions', function(){

    it('Verify key Enter action ', function(){
    
    browser.driver.get('http://demo.automationtesting.in/Register.html');

     browser.sleep(2000);

    element(by.model('FirstName')).sendKeys('Srinivas');

    element(by.model('FirstName')).sendKeys(protractor.Key.ENTER);

    browser.sleep(5000);
    
    });
})