// ************ in package.json file ************
// **** under "test" inside "scripts" object ****
// ***** add "start": "node server/app.js" ******
// this allows us to turn on the server with the command 'npm start'
// on the command line as opposed to the command 'node server/app.js'
// this is both a convenience when running the server locally AND
// it's something many (most/all?) hosting platforms require

// import express
var express = require('express');
// unpack express (I think)
var app = express();
// import body-parser
var bodyParser = require('body-parser');
// specify a port that our server will listen on
var port = 5000;
// global variable cars[] to store user input
// data will be coming over from client side form
var cars = [{make: 'Kia', model: 'Seoul'}, {make: 'Geo', model: 'Tracker'}, {make: 'GMC', model: 'Delorean'}];

// specify a default file to serve up
// all static files are located in the public folder
app.use(express.static('server/public', {
  // a path to the defaul index file is then provided (again, I think)
  index: 'views/index.html'
}));

// further requirement to use bodyParser
// RABBIT HOLE (careful, Alice): http://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do
app.use(bodyParser.urlencoded({extended: true}));

// what to do for a 'GET' /cars request by the client?
app.get('/cars', function(req, res) {
  // log msg to the server console
  console.log('/cars get request by client - sending back: ', cars);
  // send cars[] array back to the client
  res.send(cars);
});
// add 'POST' request to handle reception of new car objects
// app.post()
// push our car object into the cars array
// cars.push(car);

// tell the server to listen on the port we specified (5000, in this case)
app.listen(port);
// add console.log below, then...
// !!!---!!!---!!!---TEST---!!!---!!!---!!!
// log to the server that we're totes listening
console.log('totes listening on port: ', port);
