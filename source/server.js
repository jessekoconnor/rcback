'use strict';
const cors = require('cors');
const express = require('express');

const router = require('./routes');

// Constants
const PORT = process.env.PORT || 5000;

// App
const app = express();

// Database trial
const pg = require('pg');
app.get('/db', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT * FROM test_table', function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
            else
            { response.render('pages/db', {results: result.rows} ); }
        });
    });
});

// Add routes
router.addRoutes(app);

// use cors
app.use(cors());

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);