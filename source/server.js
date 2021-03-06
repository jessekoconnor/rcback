'use strict';
const cors = require('cors');
const express = require('express');

const router = require('./routes');

// Constants
const PORT = process.env.PORT || 5000;

// App
const app = express();

// Add routes
router.addRoutes(app);

// use cors
app.use(cors());

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);