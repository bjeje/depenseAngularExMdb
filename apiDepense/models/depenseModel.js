const mongoose = require('mongoose');

const DepensesSchema  = new mongoose.Schema({
  user: {
    type: String,
    unique: true
  }
})

const Depenses = mongoose.model('depenses', DepensesSchema)

module.exports = Depenses;
