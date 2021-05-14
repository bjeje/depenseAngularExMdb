const Income = require("../models/incomeModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.getIncome = async function (owner) {
    try {
        return Income.find({ owner : owner.owner });
    } catch (e) {
        throw Error(e)
    }
}

module.exports.createIncome = async (req) => {
    try {
        let income = new Income({...req});
        let result = await income.save();
        return result.toObject();

    } catch (error) {
        console.log('Something went wrong: Service: createIncome', error);
        throw new Error(error);
    }
}

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

module.exports.updateIncome = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id);
        let income = await Income.findOneAndUpdate(
            { _id: id },
            updateInfo,
            { new: true }
        )
        if (!income) {
            throw new Error(constants.incomeMessage.INCOME_NOT_FOUND);
        }
        return income;

    } catch (error) {
        console.log('Something went wrong: Service: updateIncome', error);
        throw new Error(error);
    }
}

module.exports.getNineIncome = async (owner) => {
    try {
        let spent = await Income.find({ owner: owner.owner }).sort({_id: -1}).limit(9);
        if (!spent) {
            throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
        }
        return spent;
    } catch (error) {
        console.log('Something went wrong: Service: getNineIncome', error);
        throw new Error(error);
    }
}

module.exports.getIncomeByDate = async ({ dateBegin, dateEnd, owner }) => {
    try {
        let totalIncome = 0;
        let income = await Income.find({createdAt : {
                $gte: new Date(dateBegin),
                $lt: new Date(dateEnd)
            }, owner });
        if (!income) {
            throw new Error(constants.incomeMessage.INCOME_NOT_FOUND);
        }
        income.forEach(income =>
            totalIncome += income.value);
        income.push({totalIncome : totalIncome});
        return income;
    } catch (error) {
        console.log('Something went wrong: Service: getIncomeByDate', error);
        throw new Error(error);
    }
}

module.exports.getIncomeByDateAndCategory = async ({ dateBegin, dateEnd, owner }) => {

    const pipeline = [
        {"$match": {"createdAt": {"$gte": new Date(dateBegin), "$lte": new Date(dateEnd)}, owner: owner.owner}},
        {
            "$group": {
                "_id": "$category",
                //"id": {"$push" :"$_id"},
                "count": {"$sum": 1},
                "amount": {"$sum": "$value"},
            },
        }
    ];

    try {

        let totalIncome = 0;
        let income = await
            Income.aggregate(pipeline, function (err, results) {

                if(err) throw err;
                results.forEach(function(income) {
                    totalIncome += income.amount;
                });

                return results;
            });

        income.push({total: totalIncome});
        return income;

    } catch (error) {
        console.log('Something went wrong: Service: getIncomeByDateAndCategory', error);
        throw new Error(error);
    }
};
