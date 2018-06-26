const express = require("express");
const path = require("path");

var app = express();

app.use(express.static(__dirname));

app.listen(8080, function() {
	console.log("Express Server is up and running on port 8080");
});
