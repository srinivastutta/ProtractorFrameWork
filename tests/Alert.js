describe ('Double Click Action', function(){

    it('Verify double click action ', function(){
    
    browser.driver.get('http://demo.automationtesting.in/Alerts.html');

    browser.sleep(2000);

    element(by.xpath('//a[contains(text(),"Alert with OK & Cancel")]')).click();

    browser.sleep(2000);

    element(by.buttonText('click the button to display a confirm box')).click();

    browser.sleep(2000);

    browser.switchTo().alert().accept();

    browser.sleep(2000);

    element(by.buttonText('click the button to display a confirm box')).click();

    browser.switchTo().alert().dismiss();

    browser.sleep(2000);

    element(by.buttonText('click the button to display a confirm box')).click();
    
    browser.switchTo().alert().getText().then(Message =>{

    console.log('Alert Message is :' +Message)    

    })
    
    });
})