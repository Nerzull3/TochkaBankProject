const Authorization = require('./authorization');

const cardPayment = require("./card_payments");
const requestPayment = require("./request_payments");
const authModel = require("./auth_model");
const mongoose = require("mongoose");

class QueryHandler {
    static handleAuthorization(request, response) {
        if (!request) {
            return false;
        }
        const [login, password] = [request.login, request.password];
        console.log();
        const hash = 'e7c8fe2c9ed4061fa22a8e1341717925';
        console.log(QueryHandler.checkUser(login, password));
        // if (auth.compare(password, hash)) {
        //     return true;
        // }

        // return false;
    }

    static checkUser(login, password) {
        const auth = new Authorization();
        return authModel
            .findOne({'login': login})
            .then(doc => {
                if (doc.passwordHash === auth.compare(password)) {
                    console.log("User password is ok");
                    return Promise.resolve(doc);
                }

                console.log('No:(');
                return Promise.reject("Error wrong");
            })
    }

    static handleAnyBankQuery(request, response) {
        if (!request.body) {
            return response.statusCode(400);
        }

        const payment = new cardPayment(Object.assign(request.body, {_id: new mongoose.Types.ObjectId()}));
        payment.save();
        response.status(200).send('Good job!');
    }

    static handleYourBankQuery(request, response) {
        const body = request.body;
        if (!body) {
            response.statusCode(400);
            return;
        }

        response.attachment(`payment.txt`);
        response.send(
            `Платёж от ${new Date(Date.now())}\r\n\r\n
            ИНН отправителя: ${body.payer}\r\n
            БИК отправителя: ${body.bik}\r\n
            Номер счёта: ${body.accountNumber}\r\n
            В том числе: ${body.VATtype}\r\n
            Сумма платежа: ${body.sum}\r\n\r\n\r\n                                     Подпись: ________`
        );
        response.status(200).send('Good job!');
    }

    static handleRequestPaymentQuery(request, response) {
        if (!request.body) {
            return response.statusCode(400);
        }

        const payment = new requestPayment(Object.assign(request.body, {_id: new mongoose.Types.ObjectId()}));
        payment.save();
        response.status(200).send('Good job!');
    }
}

 module.exports = QueryHandler;