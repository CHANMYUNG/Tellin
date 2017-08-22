let mongoose = require('mongoose');
let CommetnData = require('./commentSchema');

let schema = mongoose.Schema({
    category: { type: String, },
    title: { type: String, required: true, },
    writeDate: { type: Date, default: Date.now() },
    writer: { type: String, required: true },
    contents: { type: String, required: true },
    like: { type: Number, default: null },
    unlike: { type: Number, default: null },
    comment: [{ type: Object, ref: 'CommetnData' }],
    comment_private: { type: Number, required: true },
    like_private: { type: Number, required: true }
}, { collection: 'BoardData' });

module.exports = schema;

/* 
    category : 카테고리
    title : 제목
    writeDate : 작성일
    writer : 작성자
    contents : 게시글 내용
    like : 공감수
    unlike : 비공감수
    comment : 댓글
    comment_private : 댓글 작성 여부 1 : true, 0 : false
    like_private : 공감 여부 1 : true, 0 : false
*/