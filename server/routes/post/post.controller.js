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

    },

    like: (req, res) => {
        const _id = req.decoded._id;
        const pid = req.params.pid;

        Post.findOne({
                "_id": pid
            })
            .then(post => {
                if (!post) throw new Error('Post Not Found');
                return post.like(_id);
            })
            .then(post => {
                return User.findById(_id);
            })
            .then(user => {
                if (!user) throw new Error('User Not Found');
                return user.like(pid);
            })
            .then(() => {
                return res.sendStatus(200);
            })
            .catch(err => {
                if (err.message === 'Post Not Found') res.status(404).end();
                else res.status(500).json({
                    "message": message
                });
            });
    },

    unlike: (req, res) => {
        const _id = req.decoded._id;
        const pid = req.params.pid;

        Post.findOne({
            "_id": pid
        })
        .then(post => {
            if (!post) throw new Error('Post Not Found');
            return post.unlike(_id);
        })
        .then(post => {
            return User.findById(_id);
        })
        .then(user => {
            if (!user) throw new Error('User Not Found');
            return user.unlike(pid);
        })
        .then(() => {
            return res.sendStatus(200);
        })
        .catch(err => {
            if (err.message === 'Post Not Found') res.status(404).end();
            else res.status(500).json({
                "message": message
            });
        });
    }
}