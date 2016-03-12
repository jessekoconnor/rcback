var cool = require('cool-ascii-faces');
var database = require('./database');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var bodyParser = require('body-parser');


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

    webServer.get('/friends', function(request, response) {
        console.log('/friends ahs been hit');
        var mockFriends = [{
            id: '1',
            name: "Chris",
            plansTonight: "Busy",
            mood: cool()
        }, {
            id:'2',
            name: "Nick",
            plansTonight: "Blue Mermaid for open mic",
            mood: cool()
        }, {
            id:'3',
            name: "Ryan",
            plansTonight: "Craft beers at coat",
            mood: cool()
        }];

        response.send(mockFriends);
    });

    // create application/json parser
    var jsonParser = bodyParser.json()

    webServer.post('/saveUser', jsonParser, function(request, response) {
        var user = request.body;
        console.log('/saveUser has been hit: ', user);
        return database.storeUser(user).then(function(res) {
            console.log('saveUser res: ', res);
            response.json(res);
        }).catch(function(err) {
            console.log('saveUser err: ', err);
            response.json(err);
        });
    });

    webServer.post('/printUser', upload.array(), function(request, response) {
        console.log('/printUser has been hit:');
        console.log(JSON.stringify(request.body));

        response.json(request.body);
    });
}

module.exports = {
    addRoutes: addRoutes
}