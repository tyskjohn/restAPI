const route = require('express').Router();

const authorization = require('../auth/auth.js');
const issues = require('../controllers/issueController.js');

route.post("/register", issues.createIssue);

route.get("/all",authorization, issues.getIssues);
route.get("/:id", authorization, issues.getIssueById);
route.delete('/:id', authorization, issues.deleteIssuesById);

module.exports = route;