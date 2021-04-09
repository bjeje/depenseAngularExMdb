const mongoose = require('mongoose');

const UserSchema  = new mongoose.Schema({
    login: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    }, // todo change unique
    name: String,
    firstname: String,
    email: String, // todo change unique
    city: String,
    postalCode: Number,
    birthdate: Date,
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

const User = mongoose.model('user', UserSchema)

module.exports = User;
