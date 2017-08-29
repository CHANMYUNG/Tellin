let mongoose = require('mongoose');

let Comment = mongoose.Schema({
    likeCount: { type: Number, default: 0 },
    createdAt: { type: String, required: true },
    commentBody: { type: String, require: true }
}, { collection: 'Comment' });

/* 
    likeCount : 공감수
    createdAt : 댓글 작성일
    commentBody : 댓글 작성 내용
*/
module.exports = mongoose.model('Comment', Comment);