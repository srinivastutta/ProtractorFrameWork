describe ('Get Text from Webpage', function(){

    it('Capture and print Text', function(){
    
    browser.driver.get('http://demo.automationtesting.in/Register.html');
    
    browser.sleep(2000);
    
    let headerName = element(by.tagName('h1')).getText();

    headerName.then(HeaderText =>{

    console.log('Header Name: ' +HeaderText);
    
    });
    
    browser.sleep(1000);
    
    });
})