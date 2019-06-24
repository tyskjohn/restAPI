const route = require('express').Router();

const authorization = require('../auth/auth.js');
const customers = require('../controllers/customerController.js');

route.post("/register", customers.createCustomer);


route.get("/all",authorization, customers.getCustomers);
route.get("/:id", authorization, customers.getCustomerById);
route.post("/:email", authorization, customers.getCustomerByEmail);
// route.get("/:lastname", customers.getCustomerByLastname);
// route.get("/:address", customers.getCustomerByAddress);
route.delete('/:id', authorization, customers.deleteCustomerById);

module.exports = route;