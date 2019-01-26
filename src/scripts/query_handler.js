const Authorization = require('./authorization');

class QueryHandler {
    static handleAuthorization(request) {
        if (!request) {
            return false;
        }
        const [login, password] = [request.login, request.password];
        console.log(login, password);
        // отправить на проверку в БД
        // TODO
        const hash = 'e7c8fe2c9ed4061fa22a8e1341717925';
        const auth = new Authorization();
        if (auth.compare(password, hash)) {
            return true;
        }

        return false;
    }

    static handleAnyBankQuery(request, response) {
        if (!request.body) {
            return response.statusCode(400);
        }



        for (const prop of Object.keys(request.body)) {
            const element = request.body[prop];
            console.log(prop, element);
        }

        return response.send('Good job!');
    }

    static handleYourBankQuery(request, response) {
        if (!request.body) {
            return response.statusCode(400);
        }

        for (const prop of Object.keys(request.body)) {
            const element = request.body[prop];
            console.log(prop, element);
        }

        return response.send('Good job!');
    }

    static handleRequestPaymentQuery(request, response) {
        if (!request.body) {
            return response.statusCode(400);
        }

        for (const prop of Object.keys(request.body)) {
            const element = request.body[prop];
            console.log(prop, element);
        }

        return response.send('Good job!');
    }
}

 module.exports = QueryHandler;