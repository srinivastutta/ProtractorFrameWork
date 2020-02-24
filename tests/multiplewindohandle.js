describe ('Handling multiple Windows', function(){

    it('Validate multiple windows ', function(){
    
    browser.driver.get('http://demo.automationtesting.in/Windows.html');

    browser.sleep(2000);

    element(by.xpath('//a[contains(text(),"Open New Tabbed Windows")]')).click();

    browser.sleep(2000);

    let tabbedbutton = element(by.xpath('//div[@id="Tabbed"]//button[@class="btn btn-info"][contains(text(),"click")]'));
    tabbedbutton.click();

    browser.sleep(2000);

    let WinHandle= browser.getAllWindowHandles();

    WinHandle.then(function (handles) {
    let ParentWindow = handles[0];
    let ChildWindow = handles[1];

    browser.waitForAngularEnabled(false);

    browser.switchTo().window(ChildWindow);

    browser.getTitle().then(title =>{
    console.log('Child Window Title :' +title)   
    browser.close(); 

    });
   
    browser.sleep(2000);
    browser.switchTo().window(ParentWindow);
    browser.sleep(2000);
    browser.getTitle().then(title =>{
    console.log('Parent Window Title :' +title)    

    });
});
});
});