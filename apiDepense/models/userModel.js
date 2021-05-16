const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema  = new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    name: String,
    firstname: String,
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

const User = mongoose.model('User', UserSchema)

module.exports = User;
