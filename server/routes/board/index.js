let router = require('express').Router();
let auth = require('../../middlewares/auth');
let controller = require('./board.controller');

router.route('/board').get(auth, controller.home);

module.exports = router;