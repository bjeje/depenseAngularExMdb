const Spent = require("../models/spentModel");
const { checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.getSpent = async function () {
  try {
    return Spent.find();
  } catch (e) {
    throw Error(e)
  }
}

module.exports.createSpent = async (req) => {
  try {
    let spent = new Spent({...req});
    if(spent.sub_category === "Impots") {
      spent.mentualize = true;
    }
    let result = await spent.save();
    return result.toObject();

  } catch (error) {
    console.log('Something went wrong: Service: createSpent', error);
    throw new Error(error);
  }
}

module.exports.deleteSpent = async ({ id }) => {
  try {
    checkObjectId(id);
    let spent = await Spent.findByIdAndDelete(id);
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }
    return spent;

  } catch (error) {
    console.log('Something went wrong: Service: deleteSpent', error);
    throw new Error(error);
  }
}

module.exports.getSpentById = async ({ id }) => {
  try {
    checkObjectId(id);
    let spent = await Spent.findById(id);
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }
    return spent;
  } catch (error) {
    console.log('Something went wrong: Service: getOneSpent', error);
    throw new Error(error);
  }
}

module.exports.updateSpent = async ({ id, updateInfo }) => {
  try {
    let spent;
    checkObjectId(id);

    if(updateInfo.category === "spentFixed") {

      spent = await Spent.findById(id);
      if (!spent) {
        throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
      }
      let oldValue = spent.value;
      let lastDate = spent.updatedAt;

      spent = await Spent.findOneAndUpdate(
          { _id: id },
          { $set: updateInfo, $inc: {nbrUpdated: 1},  $push: { oldRecords: { oldValue: oldValue, createdAt: lastDate}}},
          { new: true }
      )
    } else {
      spent = await Spent.findOneAndUpdate(
          { _id: id },
          { $set: updateInfo },
          { new: true }
      )
    }

    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }

    return spent;

  } catch (error) {
    console.log('Something went wrong: Service: updateSpent', error);
    throw new Error(error);
  }
}

module.exports.getNineSpentVariable = async (owner) => {
  try {
    let spent = await Spent.find({"category": "spentVariable", owner: owner.owner }).sort({_id: -1}).limit(9);
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }
    return spent;
  } catch (error) {
    console.log('Something went wrong: Service: getNineSpent', error);
    throw new Error(error);
  }
}

module.exports.getNineSpentFixed = async (owner) => {

  try {
    let spent = await Spent.find({"category": "spentFixed", owner: owner.owner }).sort({_id: -1}).limit(9);
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }
    return spent;
  } catch (error) {
    console.log('Something went wrong: Service: getNineSpent', error);
    throw new Error(error);
  }
}

module.exports.getSpentFixed = async (owner) => {
  try {
    let totalSpentFixed = 0;
    let spent = await Spent.find({category: "spentFixed", owner : owner.owner});
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }
    spent.forEach(spent =>{
        if(spent.mentualize === true) {
          let nbrToArround = Math.round((spent.value/12)*1000000)/1000000;
          totalSpentFixed += Math.round(nbrToArround * 100)/100;
        } else {
          totalSpentFixed += spent.value;
        }

        });
    spent.push({totalSpentFixed : totalSpentFixed});
    return spent;
  } catch (error) {
    console.log('Something went wrong: Service: getSpentFixedByDate', error);
    throw new Error(error);
  }
}

module.exports.getSpentFixedByDate = async ({ dateBegin, dateEnd, owner }) => {
  try {
    let totalSpentFixed = 0;
    let spent = await Spent.find({category: "spentFixed", owner: owner.owner, createdAt : {
      $gte: new Date(dateBegin),
      $lt: new Date(dateEnd)
    } });
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }
    spent.forEach(spent =>
        totalSpentFixed += spent.value);
    spent.push({totalSpentFixed : totalSpentFixed});
    return spent;
  } catch (error) {
    console.log('Something went wrong: Service: getSpentFixedByDate', error);
    throw new Error(error);
  }
}

module.exports.getSpentVariableByDate = async ({ dateBegin, dateEnd, owner }) => {
  try {
    let totalSpentVariable = 0;
    let spent = await Spent.distinct("sub_category").find({category: "spentVariable", owner, createdAt : {
        $gte: new Date(dateBegin),
        $lt: new Date(dateEnd)
      } });
    if (!spent) {
      throw new Error(constants.spentMessage.SPENT_NOT_FOUND);
    }

    spent.forEach(spent =>
    totalSpentVariable += spent.value);

    spent.push({totalSpentVariable : totalSpentVariable});
    return spent;

  } catch (error) {
    console.log('Something went wrong: Service: getSpentVariableByDate', error);
    throw new Error(error);
  }
}

module.exports.getSpentByDateAndSubCategory = async ({ dateBegin, dateEnd, owner }) => {

  function sort_array_by(array, sort, desc) {
    array.sort(function(a,b) {
      if (a.sort < b.sort) return -1;
      if (a.sort > b.sort) return 1;
      return 0;
    });
    if(desc) array.reverse();
    return array;
  }

  const pipeline = [
    {"$match": {"createdAt": {"$gte": new Date(dateBegin), "$lte": new Date(dateEnd)}, owner}},
    {
      "$group": {
        "_id": "$sub_category",
        //"id": {"$push" :"$_id"},
        "category": {"$first": "$category"},
        "count": {"$sum": 1},
        "value": {"$sum": "$value"},
      },
    }
  ];

  try {

    let totalSpentVariable = 0;
    let totalSpentFixed = 0;
    let spent = await
      Spent.aggregate(pipeline, function (err, results) {

        if(err) throw err;
        results.forEach(function(spent) {
          if(spent.category === "spentFixed") {
            totalSpentFixed += spent.amount;
          }
          if(spent.category === "spentVariable") {
            totalSpentVariable += spent.amount;
          }
        });
        return results;
      });
    spent.sort(function (a, b) {
      return (b.value < a.value) ? -1 : 1;
    });

    spent.push({totalSpentFixed: totalSpentFixed});
    spent.push({totalSpentVariable: totalSpentVariable});
    spent.push({total: totalSpentFixed + totalSpentVariable});

    return spent;

  } catch (error) {
    console.log('Something went wrong: Service: getSpentVariableByDate', error);
    throw new Error(error);
  }
};
