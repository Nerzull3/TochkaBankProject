const QueryHandler = require('./scripts/query_handler');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const session = require('express-session');
const cookieSession = require('cookie-session');
const helmet = require('helmet');
// const MongoStore = require('connect-mongo')(session);
// const sessions = require('./scripts/sessions');

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

app.use(helmet());
app.use(require("./scripts/api"));
// app.use(express.cookieDecoder());
// app.use(express.session());


// const connection = mongoose.createConnection();
// app.use(session({
//     secret: '1t_1s_f1ag_40r_y0ur_s1st3r',
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({
//         mongooseConnection: connection,
//         autoRemove: 'interval',
//         autoRemoveInterval: 1
//     }) // TODO
// }));

app.post("/auth_window", urlencodedParser, async function (request, response) {
    isAuthorized = await QueryHandler.handleAuthorization(request.body, response);
    console.log('RESULT IS HERE!');
    if (isAuthorized) {
        // request.session.user = {id: }; // TODO
        response.redirect('/');
    }
    else {
        response.redirect('/auth_window');
    }
})

app.post("/card-payment", urlencodedParser, function (request, response) {
    QueryHandler.handleAnyBankQuery(request, response);
});

app.post("/your-bank-payment", urlencodedParser, function (request, response) {
    QueryHandler.handleYourBankQuery(request, response);
});

app.post("/request-payment", urlencodedParser, function (request, response) {
    QueryHandler.handleRequestPaymentQuery(request, response);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {isAuthorized};