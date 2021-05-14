const mongoose = require('mongoose');

const EndMonthSchema  = new mongoose.Schema({
    owner: String,
    type_account: { type: String, default: "Compte chèque" },
    value: Number,
    percentage_stay: Number,
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

const EndMonth = mongoose.model('EndMonth', EndMonthSchema)

module.exports = EndMonth;
