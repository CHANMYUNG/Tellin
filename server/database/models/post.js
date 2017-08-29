let mongoose = require('mongoose');
let CommetnData = require('./comment');

let Post = mongoose.Schema({
    category: { type: String, required: true },
    title: { type: String, required: true, },
    createdAt: { type: String, required: true },
    writer: { type: String, required: true },
    contents: { type: String, required: true },
    like: { type: Number, required:true, default: 0 },
    unlike: { type: Number, required: true, default: 0 },
    comment: [{ type: Object, ref: 'CommetnData' }],
    enableComment: { type: Number, required: true },
    enableLike: { type: Number, required: true }
}, { collection: 'Post' });


/* 
    category : 카테고리
    title : 제목
    createdAt : 작성일
    writer : 작성자
    contents : 게시글 내용
    like : 공감수
    unlike : 비공감수
    comment : 댓글
    enableComment : 댓글 작성 여부 1 : true, 0 : false
    enableLike : 공감 여부 1 : true, 0 : false
*/

module.exports = mongoose.model('Post', Post);