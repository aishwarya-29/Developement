var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	request = require("request"),
	mongoose = require("mongoose"),
	methodOverride = require("method-override"),
	Blog = require("./models/blog"),
	User = require("./models/user"),
	passport              = require("passport"),
	LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")

mongoose.connect("mongodb://localhost:27017/blogpost2");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(methodOverride("_method"));

app.use(require("express-session")({
    secret: "Aisha is awesome",
    resave: false,
    saveUninitialized: false
}));

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.get("/",function(req,res){
	res.render("home",{currentUser:req.user});
});
app.get("/blogs",function(req,res){
	Blog.find({},function(err,blogs){
		if(err){
			console.log("Oops!Error!");
		} else {
			res.render("blogs",{blogs:blogs,currentUser: req.user});
		}
	})	
});

app.get("/blogs/new",isLoggedIn, function(req,res){
	res.render("new",{currentUser: req.user});
});

app.post("/blogs", function(req,res){
	Blog.create(req.body.blog,function(err,blog){
		if(err){
			console.log("Error!");
		} else {
			console.log(blog);
		}
	});
	res.redirect("/blogs");
});

app.get("/blogs/:id", function(req,res){
	Blog.findById(req.params.id,function(err,blog){
		if(err) {
			console.log("Error!");
		} else {
			res.render("blog",{blog: blog,currentUser: req.user});
		}
	});
});

app.get("/blogs/:id/edit",isLoggedIn,function(req,res){
	Blog.findById(req.params.id,function(err,blog){
		if(err) {
			console.log("Error!");
		} else {
			res.render("edit",{blog:blog,currentUser: req.user});
		}
	});
});

app.put("/blogs/:id",isLoggedIn, function(req,res){
	Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedBlog){
		if(err){
			console.log("Error!");
		}	else {
			res.redirect("/blogs/" + req.params.id);
		}
	});
});

app.delete("/blogs/:id",isLoggedIn,function(req,res){
	Blog.findByIdAndRemove(req.params.id,function(err,deletedBlog){
		if(err){
			console.log("Error!");
		}
		else {
			res.redirect("/blogs");
		}
	});
});

app.get("/login",function(req,res){
	res.render("login",{currentUser: req.user});
})

app.post("/login",passport.authenticate("local", {
	successRedirect: "/blogs",
	failureRedirect: "/signup"
}), function(req,res){
});

app.get("/signup",function(req,res){
	res.render("signup",{currentUser: req.user});
});

app.post("/signup",function(req,res){
	User.register(new User({username: req.body.username}), req.body.password, function(err,user){
		if(err) {
			console.log(err);
			return res.render("signup",{user: req.user});
		} 
		passport.authenticate("local")(req,res,function(err,user,info){
			console.log("authenticate");
			res.redirect("/blogs");
		});
	})
});

app.get("/logout", function(req, res){
   req.logout();
   res.redirect("/blogs");
});


app.listen(3000,() => {
	console.log("server listening to port");
});