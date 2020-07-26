var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "salmon creek", image: "https://invinciblengo.org/photos/event/slider/manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg"},
		{name: "granie hill", image: "https://typewriter.imgix.net/u/234af096-141a-4b8e-b9d0-94bd20d4b54e/p/37553/camping-at-keystone-camp-for-girls.jpg?ixlib=rails-2.1.4&auto=format%2Ccompress&crop=faces&fit=crop&h=675&w=900"},
		{name: "daniel radcliff", image: "https://images.squarespace-cdn.com/content/v1/5c5f23fb8dfc8c706cca1e13/1562439146903-6PJ5HZYNZN187ZUD5DEZ/ke17ZwdGBToddI8pDm48kO1uxkAqNfCOi3ff9HZIb4V7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p4Wyba38KfG317vYluk45_d3BrsprBZirK3y33G-hmOASODiGlg9EuCO7-LhFK0BA/IMG_7683+copy.JPG?format=2500w"},
			{name: "salmon creek", image: "https://invinciblengo.org/photos/event/slider/manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg"},
		{name: "granie hill", image: "https://typewriter.imgix.net/u/234af096-141a-4b8e-b9d0-94bd20d4b54e/p/37553/camping-at-keystone-camp-for-girls.jpg?ixlib=rails-2.1.4&auto=format%2Ccompress&crop=faces&fit=crop&h=675&w=900"},
		{name: "daniel radcliff", image: "https://images.squarespace-cdn.com/content/v1/5c5f23fb8dfc8c706cca1e13/1562439146903-6PJ5HZYNZN187ZUD5DEZ/ke17ZwdGBToddI8pDm48kO1uxkAqNfCOi3ff9HZIb4V7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p4Wyba38KfG317vYluk45_d3BrsprBZirK3y33G-hmOASODiGlg9EuCO7-LhFK0BA/IMG_7683+copy.JPG?format=2500w"},
			{name: "salmon creek", image: "https://invinciblengo.org/photos/event/slider/manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg"},
		{name: "granie hill", image: "https://typewriter.imgix.net/u/234af096-141a-4b8e-b9d0-94bd20d4b54e/p/37553/camping-at-keystone-camp-for-girls.jpg?ixlib=rails-2.1.4&auto=format%2Ccompress&crop=faces&fit=crop&h=675&w=900"},
		{name: "daniel radcliff", image: "https://images.squarespace-cdn.com/content/v1/5c5f23fb8dfc8c706cca1e13/1562439146903-6PJ5HZYNZN187ZUD5DEZ/ke17ZwdGBToddI8pDm48kO1uxkAqNfCOi3ff9HZIb4V7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p4Wyba38KfG317vYluk45_d3BrsprBZirK3y33G-hmOASODiGlg9EuCO7-LhFK0BA/IMG_7683+copy.JPG?format=2500w"},
			{name: "salmon creek", image: "https://invinciblengo.org/photos/event/slider/manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg"},
		{name: "granie hill", image: "https://typewriter.imgix.net/u/234af096-141a-4b8e-b9d0-94bd20d4b54e/p/37553/camping-at-keystone-camp-for-girls.jpg?ixlib=rails-2.1.4&auto=format%2Ccompress&crop=faces&fit=crop&h=675&w=900"},
		{name: "daniel radcliff", image: "https://images.squarespace-cdn.com/content/v1/5c5f23fb8dfc8c706cca1e13/1562439146903-6PJ5HZYNZN187ZUD5DEZ/ke17ZwdGBToddI8pDm48kO1uxkAqNfCOi3ff9HZIb4V7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p4Wyba38KfG317vYluk45_d3BrsprBZirK3y33G-hmOASODiGlg9EuCO7-LhFK0BA/IMG_7683+copy.JPG?format=2500w"}
];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds",  function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	//get data from form and add it to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.listen(3000, function(){
	console.log("The YelpCamp Server has started!");
});