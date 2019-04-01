var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/first', function (req, res) {
  res.sendFile(__dirname + '/first.html');
});

app.listen(3000);
