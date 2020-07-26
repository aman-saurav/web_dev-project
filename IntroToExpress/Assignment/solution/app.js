var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi There, Welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "oink",
		cow: "moo",
		dog: "woof woof!",
		cat: "meow!"
	};
	var animal = req.params.animal;
	var sound = sounds[animal];
	res.send("The "+ animal +" says "+  sound);
});

app.get("/repeat/:message/:times", function(req, res){
	var message = req.params.message;
	var times = Number(req.params.times);
	var result = "";
	for(var i=0; i<times; i++){
		result+= message+" ";
	}
	res.send(result);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
	console.log("server listening on 3000!");
});