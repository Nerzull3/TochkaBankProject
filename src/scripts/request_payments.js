const mongoose = require("mongoose");

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    payer: Number,
    bik: Number,
    accountNumber: Number,
    VATtype: String,
    sum: Number,
    phone: String,
    mail: String
});

module.exports = mongoose.model("request_payments", schema);