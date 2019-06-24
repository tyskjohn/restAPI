// const db = require("mongoose");
// const encrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const User = require("../models/angularUser");

// // unrestricted
// exports.register = function (req, res) {

//     User
//         .find({ email: req.body.email })
//         .exec()
//         .then(function (user) {
//             if (user.length > 0) {
//                 return res.status(400).json({
//                     message: `A user with email address ${req.body.email} already exists.`,
//                     statuscode: 400
//                 })
//             }
//             else {
//                 encrypt.hash(req.body.password, 10, function (error, hash) {
//                     if (error) {
//                         return res.status(500).json({
//                             error: error,
//                         });
//                     }
//                     else {

//                         let user = new User(
//                             {

//                                 _id: new db.Types.ObjectId,
//                                 firstname: req.body.firstname,
//                                 lastname: req.body.lastname,
//                                 middlename: req.body.middlename,
//                                 dateofbirth: req.body.dateofbirth,
//                                 addressline: req.body.addressline,
//                                 zipcode: req.body.zipcode,
//                                 city: req.body.city,
//                                 country: req.body.country,
//                                 addressline2: req.body.addressline2,
//                                 zipcode2: req.body.zipcode2,
//                                 city2: req.body.city2,
//                                 country2: req.body.country2,
//                                 email: req.body.email,
//                                 password: hash

//                             }
//                         );

//                         user
//                             .save()
//                             .then(function () {
//                                 res.status(201).json({
//                                     message: `The user ${req.body.firstname} ${req.body.lastname} was created successfully.`,
//                                     statuscode: 201,
//                                     success: true
//                                 })
//                             })
//                             .catch(function (error) {
//                                 res.status(500).json({
//                                     message: `Failed to create user ${req.body.firstname} ${req.body.lastname}.`,
//                                     statuscode: 500,
//                                     success: false
//                                 })
//                             })
//                     }
//                 })
//             }
//         })
// }

// exports.login = function (req, res) {
//     User
//         .find({ email: req.body.email })
//         .then(function (user) {
//             if (user.length === 0) {
//                 return res.status(401).json({
//                     message: "Email address or password is incorrect",
//                     statuscode: 401,
//                     success: false
//                 });

//             } else {
//                 encrypt.compare(req.body.password, user[0].password, function (error, result) {
//                     if (error) {
//                         return res.status(401).json({
//                             message: "Email address or password is incorrect",
//                             statuscode: 401,
//                             success: false
//                         })

//                     } if (result) {
//                         const token = jwt.sign({ id: user[0]._id, email: user[0].email },
//                             process.env.PRIVATE_SECRET_KEY,
//                             { expiresIn: "1h" }
//                         )
//                         return res.status(200).json({
//                             message: "Authentication was successful",
//                             success: true,
//                             token: token,
//                             id: user[0]._id,
//                             email: user[0].email
//                         })
//                     }
//                     return res.status(401).json({
//                         message: "Email address or password is incorrect",
//                         statuscode: 401,
//                         success: false
//                     })
//                 })
//             }
//         })
// }

// //restricted 
// exports.getUsers = function (req, res) { }

// exports.getUser = function (req, res) {

//     User
//         .findOne({ _id: req.params.id })
//         .then((data) => res.status(200).json(data))
//         .catch((error) => res.status(500).json(error))
// }

// exports.updateUser = function (req, res) {

//     User.updateOne({ _id: req.params.id }, req.body)

//         .then((data) => {
//             if (!data) {
//                 return res.status(404).end()
//             } 

//             return res.status(200).json({
//                 message: "Profile updated successfully",
//             })

//         })
//         .catch(function (error) {
//             res.status(500).json({
//                 message: 'INTERNAL SERVER ERROR',
//                 error: error
//             })
//         })

// }

// exports.deleteUser = function (req, res) { }


