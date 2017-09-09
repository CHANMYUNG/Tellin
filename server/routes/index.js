const router = require('express').Router();

let authRouter = require('./auth');
let mypageRouter = require('./mypage');
let postRouter = require('./post');
let boardRouter = require('./board');

router.use('/', authRouter);
router.use('/', mypageRouter);
router.use('/', postRouter);
router.use('/', boardRouter);

module.exports = router;