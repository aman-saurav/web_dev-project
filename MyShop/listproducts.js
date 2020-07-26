var faker = require('faker');

var productName = faker.commerce.productName(); 
var price = faker.commerce.price(); 

console.log("=================");
console.log("Welcome To My Shop");
console.log("=================");
for(var i=0; i<10; i++){
	console.log(faker.fake("{{commerce.productName}}"+"- $"+ "{{commerce.price}}"));
}


