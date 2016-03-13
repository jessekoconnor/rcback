var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'treestump',
    database : 'rollcall'
});
var Q = require('q');

/**
 * Executes a query into the database
 * @param query - this is a string query
 * @returns a promise, resolves on the matching rows
 */
function makeQuery(query, post) {
    return Q.Promise(function(resolve, reject) {
        connection.query(query, post, function(err, rows, fields) {
            if (err) reject(err);

            resolve(rows);
        });
    });
}

/**
 * Function to return all tables in the database
 */
function showTables() {
    return makeQuery('SHOW TABLES;');
}

/**
 * Get all the users returned
 */
function getAllUsers() {
    return makeQuery('SELECT * FROM users');
}

/**
 * Store a user in the user database
 */
function storeUser(user) {
    var queryString = "INSERT INTO users (`name`, `schedule`, `mood`) VALUES ('" + user.name + "', '" + user.schedule + "', '" + user.mood + "');";

    return makeQuery(queryString);
}

module.exports = {
    showTables: showTables,
    getAllUsers: getAllUsers,
    makeQuery: makeQuery,
    storeUser: storeUser
};

