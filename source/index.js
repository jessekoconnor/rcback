var express = require('express');
var cool = require('cool-ascii-faces');
var cors = require('cors');
var app = express();

var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.get('/cool', function(request, response) {
    console.log('/cool has been hit');
    response.send(cool());
});

app.post('/storeUser', upload.array(), function(req, res) {
    console.log('/storeUser has been hit');
    console.log(JSON.stringify(req.body));
    res.json(req.body);
});

app.listen(app.get('port'), 'rollcall.local', function() {
    console.log('Node app is running on port', app.get('port'));
});