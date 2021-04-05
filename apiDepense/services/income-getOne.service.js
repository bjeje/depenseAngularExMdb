const Income = require("../models/incomeModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.getIncomeById = async ({ id }) => {
    try {
        checkObjectId(id);
        let income = await Income.findById(id);
        if (!income) {
            throw new Error(constants.incomeMessage.INCOME_NOT_FOUND);
        }
        return income;
    } catch (error) {
        console.log('Something went wrong: Service: getOneIncome', error);
        throw new Error(error);
    }
}
