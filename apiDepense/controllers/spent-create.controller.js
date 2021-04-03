const SpentCreateService = require('../services/spent-create.service');

exports.create = async function (req, res) {

    if(!req.body.category) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const spent = {
        category: req.body.category,
        sub_category: req.body.sub_category,
        value: req.body.value,
        date: req.body.date,
    };

    return spent;

}
