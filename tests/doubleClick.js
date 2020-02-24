describe ('Double Click Action', function(){

    it('Verify double click action ', function(){
    
    browser.driver.get('http://demo.automationtesting.in/WebTable.html');

    browser.sleep(2000);

    let dcButton = element(by.xpath('/html[1]/body[1]/section[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[6]/user-click-select[1]/div[1]/button[1]/i[1]'));
    
    browser.actions().mouseMove(dcButton).doubleClick().perform();
    
    browser.sleep(5000);
    
    });
})