const mongoose = require("mongoose");

const schema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    login: String,
    passwordHash: String
});

module.exports = mongoose.model("auth_datas", schema);