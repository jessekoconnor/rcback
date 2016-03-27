'use strict';
const cors = require('cors');
const express = require('express');

const router = require('./routes');

// Constants
const PORT = 80;

// App
const app = express();

// Add routes
router.addRoutes(app);

// use cors
app.use(cors());

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);