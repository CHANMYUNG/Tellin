const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const User = Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    nickname: { type: String, required: true, unique: true },
    entryDate: { type: String, required: true },
    signupType: { type: String, required: true },
    last10Watched: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    last10Liked: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
}, {
        collection: 'User'
    });

/*
email : 사용자 이메일 (로그인에 사용)
password : 패스워드
nickname : 사용자 닉네임
entryDate : 계정 회원가입 날짜
signupType : 보류중 :: 회원가입 타입 (common, facebook)
 */
User.statics.create = function (email, password, nickname, signupType) {
    if (signupType === 'common') {
        // 일반 회원가입
        const secret = process.env.TELLIN_PASSWORD_SECRET;

        const encrypted = crypto.createHmac('sha1', secret)
            .update(password)
            .digest('base64');

        const date = new Date();
        const entryDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
            date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        const user = new this({
            email,
            "password": encrypted,
            nickname,
            entryDate,
            signupType
        });

        return user.save();
    } else {
        // 페이스북 연결
        const date = new Date();
        const entryDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
            date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        const user = new this({
            // 짱짱 mongoose는 애트리뷰트랑 변수 이름을 알아서 매칭해서 넣어준다
            email,
            nickname,
            entryDate,
            signupType
        });

        return user.save();
    }
}

User.statics.findOneByEmail = function (email) {
    return this.findOne({
        email
    }).exec();
}

User.statics.findOneByNickname = function (nickname) {
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