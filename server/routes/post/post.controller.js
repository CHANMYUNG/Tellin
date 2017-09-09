const Post = require('../../database/models/post');
const User = require('../../database/models/user');

module.exports = {
    upload: (req, res) => {
        const _id = req.decoded._id;

        const {
            category,
            title,
            content,
            enableComment,
            enableLike
        } = req.body;

        // const writer = undefined;
        Post.create(category, title, _id, cotnent, enableComment, enableLike)
            .then((post) => {
                return {
                    "user": User.findById(post.writer),
                    "pid": post._id
                };
            })
            .then((info) => {
                let posts = info.user.posts;
                let user = info.user;
                user.posts = posts.unshift(info.pid);

                return user.save();
            })
            .then((user) => {
                res.sendStatus(201);
            })
            .catch((err) => {
                res.status(204).json({
                    "message": err.message
                });
            })
    },

    list: (req, res) => {
        res.json(Post.find({
            category: req.body.category
        }));
    },

    inquire: (req, res) => {

    },

    modify: (req, res) => {

    },

    delete: (req, res) => {

    }
}