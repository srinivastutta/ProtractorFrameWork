describe ('Date Picker', function(){

it('Verify Sending keys to date picker', function(){

browser.driver.get('http://demo.automationtesting.in/Datepicker.html');

browser.sleep(3000);

element(by.id('datepicker2')).sendKeys('04/16/2020');

browser.sleep(3000);

browser.executeScript("document.getElementById('datepicker1').value='04/16/2020'");

browser.sleep(3000);

})


})