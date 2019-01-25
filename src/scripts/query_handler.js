

class QueryHandler {
    static handleAuthorization(request, response) {
        // отправить на проверку в БД
        if (!request) {
            return 'error';
        }

        return 'success';
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