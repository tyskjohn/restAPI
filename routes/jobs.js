const route = require('express').Router();
const jobs = require('../controllers/jobController.js');


// GET ALL JOBS
route.get("/", jobs.getJobs);

module.exports = route;