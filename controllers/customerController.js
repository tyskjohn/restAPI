const db = require('mongoose');
const Customer = require('../models/customer');

//unres
exports.getCustomers = (req, res) => {
    Customer.find().then(data => res.status(200).json(data));
}

//restricted
exports.getCustomerById = (req, res) => {
    Customer.findOne({ _id: req.params.id }).then(data => res.status(200).json(data));
}

exports.getCustomerByEmail = ( req, res ) => {
    Customer.findOne({ email: req.params.email }).then(data => res.status(200).json(data));
}
// exports.getCustomerByFirstname = (req, res) => {
//     Customer.find({ firstname: req.params.firstname }).then(data => res.status(200).json(data));
// }

// exports.getCustomerByLastname = (req, res) => {
//     Customer.find({ lastname: req.params.lastname }).then(data => res.status(200).json(data));
// }

// exports.getCustomerByAddress = (req, res) => {
//     Customer.find({ address: req.params.address }).then(data => res.status(200).json(data));
// }

exports.createCustomer = (req, res) => {

    Customer
        .find({ email: req.body.email })
        .exec()
        .then(function (customer) {
            if (customer.length > 0) {
                return res.status(400).json({
                    message: `A customer with email address ${req.body.email} already exists.`,
                    statuscode: 400
                })
            } else {

                const customer = new Customer(
                    {
                        _id: new db.Types.ObjectId,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        companyname: req.body.companyname,
                        addressline: req.body.addressline,
                        zipcode: req.body.zipcode,
                        city: req.body.city,
                        country: req.body.country,
                        email: req.body.email,
                        phonenumber: req.body.phonenumber
                    }
                )

                customer.save()

                .then(() => {
                    res.status(201).json({
                        payload: customer,
                        message: 'Customer created successfully'
                    })
                })
        
                .catch((error) => {
                    res.status(500).json({
                        message: 'Unable to create new customer',
                        error: error
                    })
                })

            }
        })
}

exports.deleteCustomerById = (req, res) => {
    Customer.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: 'Customer was deleted'
            })
        })

}