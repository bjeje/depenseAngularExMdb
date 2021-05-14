const mongoose = require('mongoose');
const User = require("./userModel");
const Schema = mongoose.Schema;

const IncomeSchema  = new mongoose.Schema({
    category: String,
    owner: String,
    value: Number,
}, {
    timestamps: true,
    toObject: {
        transform: function(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});

const Income = mongoose.model('Income', IncomeSchema)

module.exports = Income;
