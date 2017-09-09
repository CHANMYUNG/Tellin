const post = require('../../database/models/post');

exports.home = (req, res) => {
    let pageNum = req.query.pageNum;
    post.view(pageNum, (find) => {
        res.status(200).json(find);
        res.end();
    });
};