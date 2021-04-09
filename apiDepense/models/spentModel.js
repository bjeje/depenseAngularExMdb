const mongoose = require('mongoose');

const SpentSchema  = new mongoose.Schema({
    category: String,
    sub_category: String,
    value: Number,
    nbrUpdated: Number,
    oldRecords: [{
        oldValue: Number,
        lastDateUpdate: Date
    }]
}, {
    //TODO VERIFY IF STRICT IS NECESSARY FOR UPDATE NOW
    strict: false,
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

const Spent = mongoose.model('spent', SpentSchema)

module.exports = Spent;
