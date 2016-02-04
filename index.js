var express = require('express');
var cors = require('cors');
var app = express();

// app.use(cors);
var cool = require('cool-ascii-faces');

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.set('port', (process.env.PORT || 5000));

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), 'rollcall.local', function() {
  console.log('Node app is running on port', app.get('port'));
});