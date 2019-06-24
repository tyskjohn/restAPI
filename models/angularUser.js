const db = require("mongoose");

const userSchema = db.Schema({
    _id:            db.Schema.Types.ObjectId,
    firstname:      { type: String, required: true },
    lastname:       { type: String, required: true },
    middlename:     { type: String},
    dateofbirth:    { type: String, required: true },
    addressline:    { type: String, required: true },
    zipcode:        { type: String, required: true },
    city:           { type: String, required: true },
    country:        { type: String, required: true },

    addressline2:   { type: String },
    zipcode2:       { type: String },
    city2:          { type: String },
    country2:       { type: String },

    email:          { type: String, required: true, unique: true },
    password:       { type: String, required: true },

    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now },
});

module.exports = db.model("User", userSchema);