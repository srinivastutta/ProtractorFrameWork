describe ('Printing all WebELements', function (){

    it('Verify all webelements are printing' , function(){
    
    
    browser.driver.get('https://www.google.com/');
    
    browser.waitForAngularEnabled(false);
    
    element.all(by.tagName('a')).getText().then(function (texts){

        for(let i=0; i<texts.length; i ++){
            console.log(texts[i]);

        }

    });
    
    });
    
    });