// server.js

// init project
var express = require('express');
var moment = require('moment');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/:time", function (request, response) {
  var timeParam = request.params['time'];
  
  var date = null;
  if (!isNaN(Number(timeParam))) {
    date = new Date(Number(timeParam));
  } else if (new Date(timeParam) != "Invalid Date") {
    date = new Date(timeParam);    
  } 
  
  response.type('json');
  response.send({unix: date ? date.getTime() : null, natural: date ? moment(date).format('MMMM D, YYYY') : null});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
