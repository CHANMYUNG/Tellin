const Post = require('../../database/models/post');

module.exports = {
    upload: (req, res) => {
        const {
            category,
            title,
            content,
            enableComment,
            enableLike
        } = req.body;
        
        // const writer = undefined;
        if(Post.create(category, title, '', cotnent, enableComment, enableLike)) {
            res.sendStatus(201);
        } else {
            res.sendStatus(204);
        }
    },

    list: (req, res) => {

    },

    inquire: (req, res) => {

    },

    modify: (req, res) => {

    },

    delete: (req, res) => {

    }
}
