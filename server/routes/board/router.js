const router = require('express').Router();
const main = require('./main');
router.route('/main').get(main.home);

module.exports = router;