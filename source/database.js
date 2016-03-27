const Q = require('q');
const pg = require('pg');

/**
 * Executes a query into the database
 * @param query - this is a string query
 * @returns a promise, resolves on the matching rows
 */
function makeQuery(query) {
    return Q.Promise(function(resolve, reject) {
        pg.connect(process.env.DATABASE_URL, function(err, client, done) {
            if(err) {
                console.error('database connection error: ', err);
                reject(err);
            } else {
                client.query(query, function(err, result) {
                    done();
                    if (err) {
                        console.error('database query error: ', err);
                        reject("Error " + err);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    });
};

module.exports = {
    query: makeQuery
};

