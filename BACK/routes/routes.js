const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Generating the home page
const getHomePage = app.get('/', (req, res) => {
    const homePage = path.join(__dirname, '../../FRONT/views/' + 'home.html');
    res.sendFile(homePage);
});

module.exports = { 
    app,
    getHomePage 
}