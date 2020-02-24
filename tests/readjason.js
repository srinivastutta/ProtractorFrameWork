let data = require ('../JSON/data.json');
describe('Reading Json Data', function(){

it('Read values from json file', function (){

    console.log(data.url);
    console.log(data.credentials.username);
    console.log(data.credentials.password);


});

});