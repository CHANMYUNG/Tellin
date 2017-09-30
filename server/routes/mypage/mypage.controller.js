const User = require('../../database/models/user');

// --------------------------
// 마이페이지 접속
exports.getMypage = (req, res) => {
    const userToken = req.decoded;

    /*
    ----------------
    최근 본 글 10개, 최근 공감한 글 10개, 최근 작성한 글 10개
    내용은 글 읽을 때, 공감할 때, 작성할 때 컨트롤
    */

    User.findById(userToken._id, {
            "_id": false,
            "password": false,
            "__v": false
        }).populate(['last10Watched', 'last10Liked', 'posts'])
        .then((user) => {
            if (!user) throw new Error('존재하지 않는 회원');
            user.last10Watched = user.last10Watched.slice(0, 10);
            user.last10Liked = user.last10Liked.slice(0, 10);
            user.posts = user.posts.slice(0, 10);
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(400).json({
                "message": err.message
            });
        });
}