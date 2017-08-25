let router = require('express').Router();
let controller = require('./auth.controller');

router.route('/signup').post(controller.commonRegister);

router.route('/signin').post(controller.login);

module.exports = router;