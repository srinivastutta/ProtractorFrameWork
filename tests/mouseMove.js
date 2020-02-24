describe ('Mouse Moving', function(){

    it('Verify Mouse move and click action ', function(){
    
    browser.driver.get('http://demo.automationtesting.in/Register.html');

     browser.sleep(2000);

    let ChooseButton = element(by.xpath('//input[@id="imagesrc"]'));
    
    browser.actions().mouseMove(ChooseButton).click().perform();

    browser.sleep(5000);
    
    });
})