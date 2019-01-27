const mongoose = require("mongoose");

const schema = mongoose.Schema({
    payer: Number,
    bik: Number,
    accountNumber: Number,
    VATtype: String,
    sum: Number,
    phone: String,
    mail: String
});

module.exports = mongoose.model("request_payments", schema);