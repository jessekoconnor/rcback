var cool = require('cool-ascii-faces');
var database = require('./database');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

function addRoutes(webServer) {
    webServer.get('/cool', function(request, response) {
        console.log('/cool has been hit');
        response.send(cool());
    });

    webServer.get('/query', function(request, response) {
        console.log('/query has been hit');
        database.showTables().then(function(res) {
            response.send(res);
        });

    });

    webServer.get('/firends', function(request, response) {
        console.log('/friends ahs been hit');
        var mockFriends = [{
            id: '1',
            name: "Chris",
            plansTonight: "Busy",
        }, {
            id:'2',
            name: "Nick",
            plansTonight: "Blue Mermaid for open mic"
        }, {
            id:'3',
            name: "Ryan",
            plansTonight: "Craft beers at coat"
        }];

    });

    webServer.post('/storeUser', upload.array(), function(req, res) {
        console.log('/storeUser has been hit');
        console.log(JSON.stringify(req.body));
        res.json(req.body);
    });
}

module.exports = {
    addRoutes: addRoutes
}