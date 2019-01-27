const mongoose = require("mongoose");

const schema = mongoose.Schema({
    cardNumber: String,
    cardIssueDate: String,
    cardCVC: Number,
    sum: Number,
    comment: String,
    mail: String
});

module.exports = mongoose.model("card_payments", schema);