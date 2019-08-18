var five = require("johnny-five");
var board = new five.Board();
var express = require('express');
var app = express();

app.use(express.static('public'));

board.on("ready", function () {
  
  var led = new five.Led(13);
  
  
  app.get('/', function (req, res) {
    res.send("./public/index.html");
  });

  app.get('/led', function (req, res) {
        
    switch (req.query.power) {
      case '1':
        led.on();
        break;
      case '0':
        led.off();
        break;
      default:
        led.on();
        break;
    }
    res.send(`Led ${req.query.power}`);
  });

  app.listen(3000, function () {
    console.log("Example app listening on port 3000");
  });
   
});