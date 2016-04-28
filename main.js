var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var gpio = require("rpi-gpio");

app.use(bodyParser.json())

gpio.setup(16, gpio.DIR_OUT)

app.get('/greet', function (req, res) {
  res.send({msg: 'Hello World!'});
});

app.post('/turn', function(req, res){
   gpio.write(16, req.body.on, function(err){
     if(err) throw err;
     console.log('turnning ', req.body.on ? 'on' : 'off');
   }) 
   res.send({result: 'ok'})
});


app.listen(3000, function () {
  console.log('IQuarium listening on port 3000!');
});
