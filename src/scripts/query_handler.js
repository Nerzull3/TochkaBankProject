const compare = require('./authorization');

const cardPayment = require("./card_payments");
const requestPayment = require("./request_payments");
const authModel = require("./auth_model");

class QueryHandler {
    static handleAuthorization(request, response) {
        if (!request) {
            return Promise.resolve(false);
        }
        const [login, password] = [request.login, request.password];
        return QueryHandler.checkUser(login, password);
    }

    static checkUser(login, password) {
        return authModel
            .findOne({ login: login })
            .then(user => {
                if (!user || !compare(password, user.passwordHash)) {
                    return Promise.resolve(false);
                }

                return Promise.resolve(true);
            });
    }

    static handleAnyBankQuery(request, response) {
        if (!request.body) {
            return response.statusCode(400);
        }

        const payment = new cardPayment(request.body);
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

        const payment = new requestPayment(request.body);
        payment.save();
        response.status(200).send('Good job!');
    }
}

 module.exports = QueryHandler;