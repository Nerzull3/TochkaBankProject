const express = require("express");
const router = express.Router();

const cardPayment = require("./card_payments");
const requestPayment = require("./request_payments");
const auth_model = require("./auth_model");

function getAllPayments(request, response, model) {
    model
        .find()
        .exec()
        .then(docs => response.status(200).json(docs))
        .catch(error => response.status(400).json({error}));
}

function getSortedPayments(request, response, model) {
    model
        .find()
        .sort({ [request.query.field]: request.query.sort })
        .exec()
        .then(docs => response.status(200).json(docs))
        .catch(error => response.status(400).json({error}));
}

function getFindPayments(request, response, model) {
    model
        .find({ [request.query.field]: { $regex: request.query.filter, $options: "i" } })
        .exec()
        .then(docs => response.status(200).json(docs))
        .catch(error => response.status(400).json({ error }));
}

// function getPayments(request, response, model) {
//     model
//         .find()
//         .exec()
//         .then(docs => {
//             response.status(200).json(docs);
//         })
//         .catch(err => {
//             response.status(400).json({
//                 error: err
//             });
//         })
// }

function getPayments(model) {
    return (req, res) => {
        if (
            typeof req.query.sort !== "undefined" &&
            typeof req.query.field !== "undefined"
        ) {
            getSortedPayments(req, res, model);
        } else if (
            typeof req.query.filter !== "undefined" &&
            typeof req.query.field !== "undefined"
        ) {
            getFindPayments(req, res, model);
        } else {
            getAllPayments(req, res, model);
        }
    };
}

router.get("/api/card-payment", getPayments(cardPayment));
router.get("/api/request-payment", getPayments(requestPayment));

router.get("/api/auth-data",  (req, res) => {
    auth_model
        .find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(400).json({
                error: err
            });
        })
});

module.exports = router;