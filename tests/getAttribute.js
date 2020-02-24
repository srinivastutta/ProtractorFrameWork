describe ('Get Title', function(){

    it('Capture Title', function(){
    
    browser.driver.get('http://demo.automationtesting.in/Register.html');

     browser.sleep(2000);

    let Value = element(by.id('submitbtn')).getAttribute('class');
    
    Value.then(classname => {

    console.log('Attribute Name is :' +classname)    
   

    });
  
    browser.sleep(1000);
    
    });
})