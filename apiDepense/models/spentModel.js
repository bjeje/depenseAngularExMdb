const mongoose = require('mongoose');

const SpentSchema  = new mongoose.Schema({
    category: String,
    sub_category: String,
    value: Number,
    date: Date,
})

const Spent = mongoose.model('spent', SpentSchema)

module.exports = Spent;
