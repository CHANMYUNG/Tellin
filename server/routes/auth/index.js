let router = require('express').Router();
let controller = require('./auth.controller');

router.route('/signup').post(controller.commonRegister);
router.route('/signup/facebook').post(controller.facebookRegister);
router.route('/signin').post(controller.login);

module.exports = router;