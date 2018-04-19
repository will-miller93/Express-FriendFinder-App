// requiring packages that are needed.
/////////////////////////////////////////////////////////////////////////////
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// set up the express app
/////////////////////////////////////////////////////////////////////////////
var app = express();
var PORT = process.env.PORT || 8080;

// sets up the express app to handle data parsing
/////////////////////////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes 
////////////////////////////////////////////////////////////////////////////

require(__dirname + "/app/routing/htmlRoutes.js");
require(__dirname + "/app/routing/apiRoutes.js");

// var root = __dirname;
// require("./app/routing/htmlRoutes.js")(app,root);
// require("./app/routing/apiRoutes.js")(app,root);

// sets up the listener
////////////////////////////////////////////////////////////////////////////
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});