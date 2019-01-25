const QueryHandler = require('./scripts/query_handler');

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(
    'mongodb+srv://Integro:Nerzull3@users-zwfoq.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', console.log.bind(console, 'We are connected successlfully!'));

// const User = mongoose.model(
//     'test_model',
//     mongoose.Schema({
//         _id: mongoose.Types.ObjectId,
//         name: String,
//         phoneNumber: String,
//         website: String,
//         email: String,
//         additionalInfo: String,
//         requisites: Object
//     })
// );

// const testRecord = new User({
//     _id: new mongoose.Types.ObjectId(),
//     name: "Белов Виктор Сергеевич",
//     phoneNumber: "+79895443632",
//     website: "www.belov.com",
//     email: "belov1979@gmail.com",
//     additionalInfo: "Информация о компании",
//     requisites: {
//         "ИНН": "6947385968",
//         "БИК": "477594201"
//     }
// });

// testRecord.save();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.post("/any_bank_payment", urlencodedParser, function (request, response) {
    QueryHandler.handleAnyBankQuery(request, response);
    //response.sendFile();
});

app.post("/your_bank_payment", urlencodedParser, function (request, response) {
    QueryHandler.handleYourBankQuery(request, response);
    //response.sendFile();
});

app.post("/request_payment", urlencodedParser, function (request, response) {
    QueryHandler.handleRequestPaymentQuery(request, response);
    //response.sendFile();
});

// create a GET route
// app.get("/express_backend", (req, res) => {
//     res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
