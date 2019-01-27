const express = require("express");
const router = express.Router();

const cardPayment = require("./card_payments");
const requestPayment = require("./request_payments");
const authModel = require("./auth_model");

function getAll(request, response, model) {
    model
        .find()
        .exec()
        .then(docs => response.status(200).json(docs))
        .catch(error => response.status(400).json({error}));
}

function getSorted(request, response, model) {
    model
        .find()
        .sort({ [request.query.field]: request.query.sort })
        .exec()
        .then(docs => response.status(200).json(docs))
        .catch(error => response.status(400).json({error}));
}

function getFound(request, response, model) {
    model
        .find({ [request.query.field]: { $regex: request.query.filter, $options: "i" } })
        .exec()
        .then(docs => response.status(200).json(docs))
        .catch(error => response.status(400).json({ error }));
}

function get(model) {
    return (req, res) => {
        if (typeof req.query.sort !== "undefined" && typeof req.query.field !== "undefined") {
            getSorted(req, res, model);
        } else if (typeof req.query.filter !== "undefined" && typeof req.query.field !== "undefined") {
            getFound(req, res, model);
        } else {
            getAll(req, res, model);
        }
    };
}

router.get("/api/card-payment", get(cardPayment));
router.get("/api/request-payment", get(requestPayment));
router.get("/api/auth", get(authModel));

module.exports = router;