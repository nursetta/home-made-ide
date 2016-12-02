'use strict'

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


// static assets
app.use(express.static('public'));

// home controller
app.get('/', function(req, res) {
  console.log("home controller hit");
  res.sendFile(__dirname + "/views/index.html");
});

// dummy data
const cars = [
  { name: "Toyota 4Runner" },
  { name: "Mitsubishi Eclipse" },
  { name: "Jeep Wrangler" }
];

app.get('/api/cars', function(req, res) {
	res.json(cars);
});

// start server
app.listen(port, function() {
	console.log("Server started on", port);
});