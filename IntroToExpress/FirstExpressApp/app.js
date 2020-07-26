var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi There!");
});

app.get("/bye", function(req, res){
	res.send("Goodbye!");
});

app.get("/dog", function(req, res){
	res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("Welcome to " + subreddit + " subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
	res.send("Welcome to the comments page!");
});

app.get("*", function(req, res){
	res.send("Error 404");
});

app.listen(3000, function(){
	console.log("server listening on port 3000");
});