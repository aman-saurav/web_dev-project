var mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the db

// var george = new Cat({
// 	name: "Mrs. Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

// george.save(function(err, cat){
// 	if(err){
// 		console.log("something went wrong!");
// 	} else{
// 		console.log("we just saved a cat to the db");
// 		console.log(cat);
// 	}
// });

Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "bland"
}, function(err, cat){
	if(err){
		console.log("Error!");
		console.log(err);
	} else{
		console.log(cat);
	}
		
});

//retrieve all cats from the DB and console.log each one 

Cat.find({}, function(err, cats){
	if(err){
	    console.log("oh no! error!");
	    console.log(err);
	} else{
		console.log("All the cats:");
		console.log(cats);
	}
});