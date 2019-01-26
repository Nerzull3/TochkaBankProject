// const { check, validationResult } = require("express-validator/check");

module.exports = class ServerValidation {
    // getCardValidation() {
    //     return [
    //         check('cardNumber').matches(/^\d{4} \d{4} \d{4} \d{4}$/),
    //         check("cardIssueDate").matches(/^((?:0[1-9])|(?:1[0-2]))\/((?:1[7-9])|(?:2\d)|(?:3[0-5]))$/),
    //         check("cardCVC").isNumeric().isLength({ min: 3, max: 3}),
    //         check("sum").isInt({ min: 1000, max: 75000 }),
    //         check("comment").isLength({ max: 150 }),
    //         check("mail").isEmail()
    //     ];
    // }

    // getOnlineValidation() {
    //     return [

    //     ];
    // }

    validateCardNumber(value) {
        return /\d{4} \d{4} \d{4} \d{4}/.test(value);
    }

    validateCardIssueDate(value) {
        const matched = /(\d{2})\/(\d{2})/g.exec(value);
        if (matched) {
            const [month, year] = [parseInt(matched[1]), parseInt('20' + matched[2])];
            const monthIsInRange = 0 < month && month < 13;
            const yearNow = parseInt(new Date().getFullYear());
            const isValidData = year > yearNow || (year === yearNow && month >= parseInt(new Date().getMonth()));

            return monthIsInRange && isValidData;
        }

        return false;
    }

    validateCardCVC(value) {
        return /\d{3}/.test(value);
    }

    validateSum(value) {
        return /\d{4,5}/.test(value) && 1000 <= parseInt(value) && parseInt(value) <= 75000;
    }

    validateMail(value) {
        return /.+?@\w+?\.(ru|com)/.test(value) || value.length === 0;
    }

    validatePayer(value) {
        return /\d{10}|\d{12}/.test(value);
    }

    validateBIK(value) {
        return /\d{9}/.test(value);
    }

    validateAccountNumber(value) {
        return /\d{20}/.test(value);
    }

    validatePhone(value) {
        return /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(value);
    }
};