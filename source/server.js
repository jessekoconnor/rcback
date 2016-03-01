var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/**
 * Starts the express server
 */
function start(webserver) {
    app.set('port', (process.env.PORT || 5000));

    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use(cors());

    app.listen(app.get('port'), 'localhost', function() {
        console.log('Node app is running on port', app.get('port'));
    });
}

module.exports = {
    server: express(),
    start: start
};