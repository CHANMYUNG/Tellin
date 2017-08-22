const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: String,
        required: true
    },
    signup_type: {
        type: String,
        required: true
    }
}, {
    collection: 'User'
});

User.statics.create = (email, password, nickname) => {
    const date = new Date();

    const createdAt = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const user = new this({
        email,
        password,
        nickname,
        createdAt
    })

    return user.save();
}

User.statics.findOneByEmail = (email) => {
    return this.findOne({
        email
    }).exec();
}

User.statics.findOneByNickname = (nickname) => {
    return this.findOne({
        nickname
    }).exec();
}

module.exports = mongoose.model('User', User);