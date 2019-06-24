const db = require("mongoose");

const customerIssueSchema = db.Schema({
    _id:            db.Schema.Types.ObjectId,

    customeremail:  { type: String, required: true },
    title:          { type: String, required: true },
    description:    { type: String, required: true },
    status:         { type: String, required: true },

    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now },
});

module.exports = db.model("Issue", customerIssueSchema);