var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000));

app.get('/cool', function(request, response) {
  response.send(cool());
  console.log('jah live');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});