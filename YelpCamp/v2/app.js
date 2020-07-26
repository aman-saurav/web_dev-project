var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/yelp_camp_v2");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//schema setup
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 	 name: "granie hill",
// 	 image: "https://typewriter.imgix.net/u/234af096-141a-4b8e-b9d0-94bd20d4b54e/p/37553/camping-at-keystone-camp-for-girls.jpg?ixlib=rails-2.1.4&auto=format%2Ccompress&crop=faces&fit=crop&h=675&w=900",
// 	description: "This is a huge granite hill"
// 	}
// , function(err, campground){
// 	if(err){
// 		console.log(err);
// 	} else{
// 		console.log("Newly created campground: ");
// 		console.log(campground);
// 	}
// });


app.get("/", function(req, res){
	res.render("landing");
});
// INDEX - show all campgrounds
app.get("/campgrounds",  function(req, res){
	//get all campgrounds from DB
	Campground.find({}, function(err, allcampgrounds){
		if(err){
			console.log(err);
		} else{
			res.render("index", {campgrounds: allcampgrounds});
		}
	});
	
});
// CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
	//get data from form and add it to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc}
	// create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else{
			//redirect back to campgrounds page
	        res.redirect("/campgrounds");
		}
	});
	
})
//NEW - show form to create a new campground 
app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});
// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
	//find campground with the provided ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else{
			//render show template with that campground
	        res.render("show", {campground: foundCampground});
		}
	});

});

app.listen(3000, function(){
	console.log("The YelpCamp Server has started!");
});