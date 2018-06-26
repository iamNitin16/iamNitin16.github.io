const express = require("express");

var app = express();

app.use(express.static("build"));

app.listen(8080, function() {
	console.log("Express Server is up and running on port 8080");
});
