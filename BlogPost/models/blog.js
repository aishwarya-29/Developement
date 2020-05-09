var mongoose = require("mongoose");

var blogSchema = mongoose.Schema({
	name: String,
	image: String,
	desc: String
});

module.exports = mongoose.model("Blog",blogSchema);