const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const app = express();


// for parsing form data
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>



// for parsing json data
app.use(bodyParser.json()); // application/json 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    // second arg is origin or front ends that we want to access our data
    // * allows access to all the origins
    // http://127.0.0.1:5500 or https://cdpn.io will allow access to specified origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
    // every response that we send will now have these headers
});
app.use('/feed', feedRoutes);
app.listen(8080);