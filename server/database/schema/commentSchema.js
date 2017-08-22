let mongoose = require('mongoose');
let schema = mongoose.Schema({
    like_count: { type: Number, default: null },
    comment_date: { type: Date, default: Date.now() },
    comment_body: { type: String, require: true }
}, { collection: 'CommetnData' });

/* 
    like_count : 공감수
    comment_date : 댓글 작성일
    comment_body : 댓글 작성 내용
*/
module.exports = mongoose.model('CommetnData', schema);