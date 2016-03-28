/**
 * Use this object to hold routing logic
 */

/**
 * Imports required for
 */
const cool = require('cool-ascii-faces');
var database = require('./database');
//var multer = require('multer'); // v1.0.5
//var upload = multer(); // for parsing multipart/form-data
var bodyParser = require('body-parser');

/**
 * Takes a webserver and adds routes to it
 * @param webServer
 */
function addRoutes(webServer) {

    webServer.get('/', function (req, res) {
        res.send('Hello world\n');
    });

    webServer.get('/cool', function(request, response) {
        console.log('/ has been hit, returning a smiley face');
        response.send(cool());
    });

    webServer.get('/db', function (request, response) {
        database.query('SELECT * FROM test_table').then(function(res) {
            response.send(res.rows);
        }).catch(function(err) {
            response.send(err);
        });
    });

    webServer.get('/getAllUsers', function (request, response) {
        console.log('/getAllUsers has been hit');
        database.query('SELECT * FROM users').then(function(res) {
            response.send(res.rows);
        }).catch(function(err) {
            response.send(err);
        });
    });

    // create application/json parser to allow specific endpoints to decipher json
    var jsonParser = bodyParser.json();

    webServer.post('/saveUser', jsonParser, function(request, response) {
        var user = request.body;
        console.log('/saveUser has been hit: ', user);

        var queryString = "INSERT INTO users (name, email, password) VALUES (" + user.name + ", " + user.email + ", " + user.password + ");";

        console.log('queryString:', queryString);

        return database.query(queryString).then(function(res) {
            console.log('saveUser res: ', res);
            response.json(res);
        }).catch(function(err) {
            console.log('saveUser err: ', err);
            response.json(err);
        });
    });

    //////////////////////
    //// ENDPOINTS RETURNING MOCK DATA
    /////////////////////
    webServer.get('/mockFriends', function(request, response) {
        console.log('/friends ahs been hit');
        var mockFriends = [{
            id: '1',
            email: "Chris",
            email: "Busy",
            password: cool()
        }, {
            id:'2',
            name: "Nick",
            email: "Blue Mermaid for open mic",
            password: cool()
        }, {
            id:'3',
            name: "Ryan",
            email: "Craft beers at coat",
            password: cool()
        }];

        response.send(mockFriends);
    });

    ////////////////////
    // ENDPOINTS RETURNING DRUSY DEBUGGING
    ///////////////////
    webServer.get('/cool', function(request, response) {
        console.log('/cool has been hit, returning a smiley face');
        response.send(cool());
    });

    //webServer.get('/showTables', function(request, response) {
    //    console.log('/queries has been hit, returning all tables in the database \'rollcall\'');
    //    response.send(database.showTables().then(function(response) {
    //        response.send(response);
    //    }).catch(function(err) {
    //        console.log(err);
    //        response.send(err);
    //    }));
    //});
    //
    webServer.get('/showDatabases', function(request, response) {
        console.log('/showDatabases has been hit, returning all database');
        return database.showDatabases().then(function(response) {
            response.send(response);
        }).catch(function(err) {
            console.log(err);
            response.send(err);
        });
    });
}


/**
 * Nodes module loading system: https://nodejs.org/api/modules.html
 */
module.exports = {
    addRoutes: addRoutes
}