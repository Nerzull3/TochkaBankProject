const mongoose = require("mongoose");

const schema = mongoose.Schema({
    sessionId: Number,
    login: String
});

module.exports = mongoose.model("session", schema);