describe ('Double Click Action', function(){

    it('Verify double click action ', function(){
    
    browser.driver.get('http://demo.automationtesting.in/Frames.html');

    browser.sleep(2000);

    browser.switchTo().frame(0);

    element(by.xpath('/html[1]/body[1]/section[1]/div[1]/div[1]/div[1]/input[1]')).sendKeys('Vedik');

  
    browser.sleep(2000);
})
    
});