const router = require('express').Router();

let authRouter = require('./auth');
let mypageRouter = require('./mypage');
let postRouter = require('./post');

router.use('/', authRouter);
router.use('/', mypageRouter);
router.use('/', postRouter);

module.exports = router;