// import declarations ============================================
const express = require('express');
const path = require('path');
const fs = require('fs');

const routes = require('./routes');

const app = express();




// middleware ======================================================
// UI
app.use(express.static('public'));

// body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// api routes
app.use(routes);


// PORT ============================================================
const PORT = 3001;

// server listener =================================================
app.listen(PORT, () => console.log(`Server successfully listening for request on PORT ${PORT}`));