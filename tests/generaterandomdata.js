//install faker first --- use this code in terminal -- npm i faker
let faker = require('faker');

describe ('Genderate Random Data', function (){

it('create random data' , function(){
    console.log(faker.name.firstName());
    console.log(faker.name.lastName());
    console.log(faker.phone.phoneNumber());
    console.log(faker.internet.email());
    console.log(faker.address.city());
    console.log(faker.address.country());

});

});