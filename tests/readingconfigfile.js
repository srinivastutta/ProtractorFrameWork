describe ('Reading config file', function(){

it('how to read config file properties', function(){

    browser.driver.get(browser.params.url);

    browser.waitForAngularEnabled(false);

    element(by.name('q')).sendKeys(browser.params.sendkeyvalue);

    browser.sleep(3000);

});

});