const mongoose = require("mongoose");

const schema = mongoose.Schema({
    login: String,
    passwordHash: String
});

module.exports = mongoose.model("auth_datas", schema);