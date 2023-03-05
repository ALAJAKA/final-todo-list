const express = require('express');
const router = express.Router();

const userRouter = require('./userRoute');
const bucketListRouter = require('./bucketListRoute');
const todoListRouter = require('./todoListRoute')


// 메인페이지
router.use('/main', async (req, res) => {

  res.render('main');
});

// 버킷리스트 페이지
router.use('/bucketList', async (req, res) => {

  res.render('bucketList');
});

//회원 관련 컨트롤러로
router.use('/user', userRouter);
//투두리스트 관련 컨트롤러로
router.use('/todoList', todoListRouter);
//버킷리스트 관련 컨트롤러로
router.use('/bucketList', bucketListRouter);

module.exports = router;

