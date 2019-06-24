const route = require('express').Router();

const authorization = require('../auth/auth.js');
const angularUsers = require('../controllers/angularUserController');


// unrestricted routes
route.post("/register",angularUsers.register);
route.post("/login",angularUsers.login);


// restricted routes
route.get("/all", authorization, angularUsers.getUsers);            // Get all users
route.get("/:id", authorization, angularUsers.getUser);             // Get specified user
route.put("/:id", authorization, angularUsers.updateUser);          // Update specified user
route.patch("/:id", authorization, angularUsers.updateUser);        // Update parts of specified user
route.delete("/:id", authorization, angularUsers.deleteUser);       // Remove specified user


module.exports = route;