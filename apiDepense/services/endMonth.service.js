const EndMonth = require("../models/endMonthModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.getEndMonth = async function (owner) {
    try {
        let endMonth = await EndMonth.find({ owner: owner.owner });
        if (!endMonth) {
            throw new Error(constants.endMonthMessage.END_MONTH_NOT_FOUND);
        }
        return endMonth;
    } catch (e) {
        throw Error(e)
    }
}

module.exports.createEndMonth = async (req) => {
    try {
        let endMonth = new EndMonth({...req});
        let result = await endMonth.save();
        return result.toObject();

    } catch (error) {
        console.log('Something went wrong: Service: createEndMonth', error);
        throw new Error(error);
    }
}

module.exports.deleteEndMonth = async ({ id }) => {
    try {
        checkObjectId(id);
        let endMonth = await EndMonth.findByIdAndDelete(id);
        if (!endMonth) {
            throw new Error(constants.endMonthMessage.END_MONTH_NOT_FOUND);
        }
        return endMonth;

    } catch (error) {
        console.log('Something went wrong: Service: deleteEndMonth', error);
        throw new Error(error);
    }
}

module.exports.getEndMonthById = async ({ id }) => {
    try {
        checkObjectId(id);
        let endMonth = await EndMonth.findById(id);
        if (!endMonth) {
            throw new Error(constants.endMonthMessage.END_MONTH_NOT_FOUND);
        }
        return endMonth;
    } catch (error) {
        console.log('Something went wrong: Service: getOneEndMonth', error);
        throw new Error(error);
    }
}

module.exports.updateEndMonth = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id);
        let endMonth = await EndMonth.findOneAndUpdate(
            { _id: id },
            updateInfo,
            { new: true }
        )
        if (!endMonth) {
            throw new Error(constants.endMonthMessage.END_MONTH_NOT_FOUND);
        }
        return endMonth;

    } catch (error) {
        console.log('Something went wrong: Service: updateEndMonth', error);
        throw new Error(error);
    }
}

module.exports.getLastEndMonth = async (owner) => {
    try {
        let endMonth = await EndMonth.find({ owner: owner.owner }).sort({_id: -1}).limit(1);
        if (!endMonth) {
            throw new Error(constants.endMonthMessage.END_MONTH_NOT_FOUND);
        }
        return endMonth;
    } catch (error) {
        console.log('Something went wrong: Service: getLastEndMonth', error);
        throw new Error(error);
    }
}

module.exports.getTwelveEndMonth = async (owner) => {
    try {
        let endMonth = await EndMonth.find({ owner: owner.owner }).sort({_id: -1}).limit(12);
        if (!endMonth) {
            throw new Error(constants.endMonthMessage.END_MONTH_NOT_FOUND);
        }
        return endMonth;
    } catch (error) {
        console.log('Something went wrong: Service: getTwelveEndMonth', error);
        throw new Error(error);
    }
}

module.exports.getEndMonthByDate = async ({ dateBegin, dateEnd, owner }) => {
    try {
        let totalEndMonth = 0;
        let endMonth = await EndMonth.find({createdAt : {
                $gte: new Date(dateBegin),
                $lt: new Date(dateEnd)
            }, owner });
        if (!endMonth) {
            throw new Error(constants.endMonthMessage.END_MONTH_NOT_FOUND);
        }
        endMonth.forEach(endMonth =>
            totalEndMonth += endMonth.value);
        endMonth.push({totalEndMonth : totalEndMonth});
        return endMonth;
    } catch (error) {
        console.log('Something went wrong: Service: getEndMonthByDate', error);
        throw new Error(error);
    }
}
