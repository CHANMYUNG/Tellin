let router = require('express').Router();
let auth = require('../../middlewares/auth');
let controller = require('./mypage.controller');

router.route('/mypage').get(auth, controller.getMypage);

module.exports = router;