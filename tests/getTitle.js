describe ('Get Title', function(){

    it('Capture Title', function(){
    
    browser.driver.get('http://demo.automationtesting.in/Register.html');
    
    browser.sleep(2000);
    
    browser.getTitle().then(title => {

    console.log('Title is :' +title)    

    });

    browser.sleep(1000);
    
    });
})