const Income = require("../models/incomeModel");

module.exports.getIncome = async function () {
    try {
        return Income.find();
    } catch (e) {
        throw Error(e)
    }
}
