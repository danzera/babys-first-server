// import express
var express = require('express');
// unpack express (I think)
var app = express();
// specify a port that our server will listen on
var port = 5000;
// global variable cars[] to store user input
// data will be coming over from client side form
var cars = [{make: 'Kia', model: 'Seoul'}];

// specify a default file to serve up
// all static files are located in the public folder
app.use(express.static('server/public', {
  // a path to the defaul index file is then provided (again, I think)
  index: 'views/index.html'
}));

// what to do for a 'GET' /cars request by the client?
app.get('/cars', function(req, res) {
  // log msg to the server console
  console.log('/cars get request by client - sending back: ', cars);
  // send cars[] array back to the client
  res.send(cars);
});
// add 'POST' request to handle reception of new car objects
// app.post()

// tell the server to listen on the port we specified (5000, in this case)
app.listen(port);
// ************ in package.json file ************
// **** under "test" inside "scripts" object ****
// ***** add "start": "node server/app.js" ******
// add console.log below, then...
// !!!---!!!---!!!---TEST---!!!---!!!---!!!
// log to the server that we're totes listening
console.log('totes listening on port: ', port);
