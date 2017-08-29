const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const User = Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true, unique: true },
    createdAt: { type: String, required: true },
    signupType: { type: String, required: true }
}, {
    collection: 'User'
});

/*
email : 사용자 이메일 (로그인에 사용)
password : 패스워드
nickname : 사용자 닉네임
createdAt : 계정 회원가입 날짜
signupType : 보류중 :: 회원가입 타입 (common, facebook)
 */
User.statics.create = function(email, password, nickname, signupType) {
    const secret = process.env.TELLIN_PASSWORD_SECRET;

    const encrypted = crypto.createHmac('sha1', secret)
    .update(password)
    .digest('base64');
    
    const date = new Date();
    const createdAt = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const user = new this({
        email,
        "password" : encrypted,
        nickname,
        createdAt,
        signupType
    })

    return user.save();
}

User.statics.findOneByEmail = function(email) {
    return this.findOne({
        email
    }).exec();
}

User.statics.findOneByNickname = function(nickname) {
    return this.findOne({
        nickname
    }).exec();
}

User.methods.verify = function (password) {
    const secret = process.env.TELLIN_PASSWORD_SECRET;
    
    const encrypted = crypto.createHmac('sha1', secret)
    .update(password)
    .digest('base64');
    return this.password === encrypted;
}
module.exports = mongoose.model('User', User);