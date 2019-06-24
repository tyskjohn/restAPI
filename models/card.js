const db = require("mongoose");

const cardSchema = db.Schema({

    _id:            db.Schema.Types.ObjectId,
    title:          { type: String, required: true },
    text:           { type: String, required: true },
    footer:         { type: String, required: true },
    img:            { type: String, required: true },
    alt:            { type: String },
    
    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now },
});

module.exports = db.model("Card", cardSchema);