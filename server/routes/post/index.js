let router = require('express').Router();
let auth = require('../../middlewares/auth');
let controller = require('./post.controller');

router.route('/post')
    .post(auth, controller.upload)
    .get(auth, controller.list);

module.exports = router;