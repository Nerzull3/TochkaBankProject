const mongoose = require("mongoose");

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cardNumber: String,
    cardIssueDate: String,
    cardCVC: Number,
    sum: Number,
    comment: String,
    mail: String
});

module.exports = mongoose.model("card_payments", schema);