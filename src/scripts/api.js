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

function getFindPayments(req, res, model) {
    model
        .find({ [req.query.field]: { $regex: req.query.filter, $options: "i" } })
        .exec()
        .then(docs => res.status(200).json(docs))
        .catch(error => res.status(400).json({ error }));
}

function getPayments(model) {
    return (req, res) => {
        if (typeof req.query.sort !== "undefined" && typeof req.query.field !== "undefined") {
            getSortedPayments(req, res, model);
        } else if (typeof req.query.filter !== "undefined" && typeof req.query.field !== "undefined") {
            getFindPayments(req, res, model);
        } else {
            getAllPayments(req, res, model);
        }
    };
}
