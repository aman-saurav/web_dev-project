var mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
// 	email: "hermoine@hogwarts.edu",
// 	name: "Hermoine Granger"
// });

// newUser.posts.push({
// 	title: "Where is Ron?",
// 	content: "Fuck Him! I don't care"
// })
// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	} else{
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: "Reflections on apples",
// 	content: "They are delicious!"
// });

// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	} else{
// 		console.log(post);
// 	}
// });

User.findOne({name: "Hermoine Granger"}, function(err, user){
	if(err){
		// console.log(err);
	} else{
		user.posts.push({
			title: "3 things i really hate: ",
			content: "1.Voldemort 2.His stupid horcruxes 3.Ron"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			} else{
				console.log(user);
			}
		});
	}
});