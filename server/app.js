// import express
var express = require('express');
// unpack express (I think)
var app = express();
// specify a port that our server will listen on
var port = 5000;

// specify a default file to serve up
// all static files are located in the public folder
app.use(express.static('server/public', {
  // a path to the defaul index file is then provided (again, I think)
  index: 'views/index.html'
}));

// tell the server to listen on the port we specified (5000, in this case)
app.listen(port);
// ************ in package.json file ************
// **** under "test" inside "scripts" object ****
// ***** add "start": "node server/app.js" ******
// add console.log below, then...
// !!!---!!!---!!!---TEST---!!!---!!!---!!!
// log to the server that we're totes listening
console.log('totes listening on port: ', port);
