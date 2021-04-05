const Income = require("../models/incomeModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.deleteIncome = async ({ id }) => {
    try {
        checkObjectId(id);
        let income = await Income.findByIdAndDelete(id);
        if (!income) {
            throw new Error(constants.incomeMessage.INCOME_NOT_FOUND);
        }
        return income;

    } catch (error) {
        console.log('Something went wrong: Service: deleteIncome', error);
        throw new Error(error);
    }
}
