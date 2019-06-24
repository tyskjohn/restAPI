const db = require("mongoose");
const encrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const DemoUser = require("../models/user");


exports.register = function (req, res) {
    
    DemoUser
        .find({ email: req.body.email })
        .exec()
        .then(function (user) {
            if (user.length > 0) {
                return res.status(400).json({
                    message: `A user with email address ${req.body.email} already exists.`,
                    statuscode: 400
                })
            }
            else {
                encrypt.hash(req.body.password, 10, function (error, hash) {
                    if (error) {
                        return res.status(500).json({
                            error: error,
                        });
                    }
                    else {

                        let user = new DemoUser(
                            {

                                _id: new db.Types.ObjectId,
                                firstname: req.body.firstname,
                                lastname: req.body.lastname,
                                dateofbirth: req.body.dateofbirth,
                                addressline: req.body.addressline,
                                zipcode: req.body.zipcode,
                                city: req.body.city,
                                country: req.body.country,
                                email: req.body.email,
                                password: hash

                            }
                        );

                        user
                            .save()
                            .then(function () {
                                res.status(201).json({
                                    message: `The user ${req.body.firstname} ${req.body.lastname} was created successfully.`,
                                    statuscode: 201,
                                    success: true
                                })
                            })
                            .catch(function (error) {
                                res.status(500).json({
                                    message: `Failed to create user ${req.body.firstname} ${req.body.lastname}.`,
                                    statuscode: 500,
                                    success: false
                                })
                            })
                    }
                })
            }
        })
}
exports.login = function (req, res) {
    DemoUser
        .find({ email: req.body.email })
        .then(function (user) {
            if (user.length === 0) {
                return res.status(401).json({
                    message: "Email address or password is incorrect",
                    statuscode: 401,
                    success: false
                });

            } else {
                encrypt.compare(req.body.password, user[0].password, function (error, result) {
                    if (error) {
                        return res.status(401).json({
                            message: "Email address or password is incorrect",
                            statuscode: 401,
                            success: false
                        })

                    } if (result) {
                        const token = jwt.sign({ id: user[0]._id, email: user[0].email },
                            process.env.PRIVATE_SECRET_KEY,
                            { expiresIn: "1h" }
                        )
                        return res.status(200).json({
                            message: "Authentication was successful",
                            success: true,
                            token: token,
                            id: user[0]._id,
                            email: user[0].email
                        })
                    }
                    return res.status(401).json({
                        message: "Email address or password is incorrect",
                        statuscode: 401,
                        success: false
                    })
                })
            }
        })
}
exports.getUsers = function (req, res) {
    DemoUser.find().then(data => res.status(200).json(data));
 }
exports.getUser = function (req, res) {
    
    DemoUser
        .findOne({_id: req.params.id})
        .then((data) => {
            return res.status(200).json(data)
        })

}
exports.updateUser = function (req, res) { 
    DemoUser
        .update({ _id: req.params.id }, req.body)
        .then((data) => {
            if(!data) { return res.status(404).end() }
            return res.status(200).json({
                message: 'User updated successfully',
                data: data
            })
        })
        .catch(function(error) {
            res.status(500).json({
                message: 'server CRASH BOOM BANG', 
                error: error
            })
        })
}
exports.deleteUser = function (req, res) { 
    DemoUser
        .deleteOne({_id: req.params.id})
        .then((data) => {
            res.status(200).json({
                message: 'User was deleted'
            })
        })
        .catch(function(error) {
            res.status(500).json({
                message: 'server CRASH BOOM BANG', 
                error: error
            })
        })
}