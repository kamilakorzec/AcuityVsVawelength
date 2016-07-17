var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fs = require("fs");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('frontend'));

var port = process.env.PORT || 80;        // set our port

// ROUTES FOR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {

});

// more routes for our API will happen here

app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started on ' + port);