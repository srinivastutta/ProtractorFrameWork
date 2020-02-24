describe ('Drag and Drop', function (){

it('Verify drag and drop action' , function(){


browser.get('https://codef0rmer.github.io/angular-dragdrop/#!/');

browser.sleep(3000);

let source = element(by.xpath('/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]'));

let destination = element(by.xpath('/html[1]/body[1]/div[2]/div[1]/div[2]/div[3]/div[1]'));

browser.actions().dragAndDrop(source, destination).perform();

browser.sleep(3000);
    
});

});