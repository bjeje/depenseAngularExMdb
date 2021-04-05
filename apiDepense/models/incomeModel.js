const mongoose = require('mongoose');

const IncomeSchema  = new mongoose.Schema({
    category: String,
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

const Income = mongoose.model('income', IncomeSchema)

module.exports = Income;
