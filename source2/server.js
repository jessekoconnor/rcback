//var cors = require('cors');
//var express = require('express');
//var bodyParser = require('body-parser');
//var app = express();
//
//// Constants
//var DEFAULT_PORT = 8080;
//var PORT = process.env.PORT || DEFAULT_PORT;
//
///**
// * Starts the express server
// */
//function start(webserver) {
//    app.use(cors());
//
//    app.listen(PORT, 'localhost', function(err) {
//        if(err) console.log(err);
//        console.log('Node app is running on port', PORT);
//    });
//}
//
//module.exports = {
//    server: app,
//    start: start
//};