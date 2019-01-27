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
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', console.log.bind(console, 'We are connected successlfully!'));

console.log(Object.keys(db.collections));
console.log(Object.keys(db.models));

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(require("./scripts/api"));

app.post("/auth_window", urlencodedParser, function (request, response) {
    const result = QueryHandler.handleAuthorization(request.body, response);
    console.log(result);
    if (result) {
        response.send(result);
    }
    else {
        response.send('No');
    }
})

app.post("/any_bank_payment", urlencodedParser, function (request, response) {
    QueryHandler.handleAnyBankQuery(request, response);
});

app.post("/your_bank_payment", urlencodedParser, function (request, response) {
    QueryHandler.handleYourBankQuery(request, response);
});

app.post("/request_payment", urlencodedParser, function (request, response) {
    QueryHandler.handleRequestPaymentQuery(request, response);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
