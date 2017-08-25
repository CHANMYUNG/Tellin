const router = require('express').Router();

let authRouter = require('./auth');

router.use('/', authRouter);

module.exports = router;