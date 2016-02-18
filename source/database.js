var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
});
var Q = require('q');

/**
 * Executes a query into the database
 * @param query - this is a string query
 * @returns a promise, resolves on the matching rows
 */
function makeQuery(query) {
    return Q.Promise(function(resolve, reject) {
        connection.connect();
        connection.query(query, function(err, rows, fields) {
            if (err) reject(err);

            resolve(rows);
        });
        connection.end();
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

module.exports = {
    showTables: showTables,
    getAllUsers: getAllUsers,
    makeQuery: makeQuery
};

