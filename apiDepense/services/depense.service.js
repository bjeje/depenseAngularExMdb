const Tests = require("../models/depenseModel");

exports.getDepense = async function () {
  try {
    return Tests.find();
  } catch (e) {
    throw Error(e)
  }
}
