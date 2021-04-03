const Spents = require("../models/spentModel");

exports.createSpent = async function (res) {
    try {
        Spents.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Spend."
            });
        });
    } catch (e) {
        throw Error(e)
    }
}
