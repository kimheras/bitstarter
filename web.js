var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);

var buffer = new Buffer("Hello World from index.html", 25);
 fs.readFileSync("index.html", "utf-8");
response.send(resultOfreadFileSync);

});
