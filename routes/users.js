const route = require('express').Router();

const authorization = require('../auth/auth.js');
const users = require('../controllers/userController.js');


// unrestricted routes
route.post("/register",users.register);
route.post("/login",users.login);


// restricted routes
route.get("/all", authorization, users.getUsers);   // Get all users
route.get("/:id",  authorization, users.getUser);    // Get specified user
route.put("/:id", authorization, users.updateUser);    // Update specified user
route.delete("/:id", authorization, users.deleteUser); // Remove specified user


module.exports = route;