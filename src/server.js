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

const urlencodedParser = bodyParser.urlencoded({extended: false});
let isAuthorized = false;

app.use(require("./scripts/api"));

app.post("/auth_window", urlencodedParser, async function (request, response) {
    isAuthorized = await QueryHandler.handleAuthorization(request.body, response);
    console.log('RESULT IS HERE!');
    if (isAuthorized) {
        response.send(isAuthorized);
    }
    else {
        response.redirect('/auth_window');
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

module.exports = isAuthorized;