const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// API CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }

    next();
})

// BODY PARSER 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ROUTES

// http:localhost:3001/api/jobs
const jobRoute = require('./routes/jobs.js');
app.use("/api/jobs", jobRoute);

// http:localhost:3001/api/users
const userRoute = require('./routes/users.js');
app.use("/api/users", userRoute);

// http:localhost:3001/api/customers
const customerRoute = require('./routes/customers.js');
app.use("/api/customers", customerRoute);

// http:localhost:3001/api/issues
const issueRoute = require('./routes/customerIssues.js');
app.use("/api/issues", issueRoute);

// http:localhost:3001/api/cards
const cardRoute = require('./routes/cards.js');
app.use("/api/cards", cardRoute);

// http:localhost:3001/api/angularUsers
const angularUserRoute = require('./routes/angularUsers.js');
app.use("/api/angularUsers", angularUserRoute);

module.exports = app;