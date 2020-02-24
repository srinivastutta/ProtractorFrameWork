describe ('Get Current URL', function(){

    it('Capture Curent URL', function(){
    
    browser.driver.get('http://demo.automationtesting.in/Register.html');
    
    browser.sleep(2000);
    
    browser.getCurrentUrl().then(url => {

    console.log('Current is URL is :' +url)    

    });

    browser.sleep(1000);
    
    });
})