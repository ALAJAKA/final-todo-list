const express = require('express');
const router = express.Router();

const calendarRouter = require('./calendarRoute')
const userRouter = require('./userRoute');
const bucketListRouter = require('./bucketListRoute');
const todoListRouter = require('./todoListRoute')

// 버킷리스트 페이지
router.use('/bucketList', async (req, res) => {

  res.render('bucketList');
});

//메인페이지 관련 컨트롤로
router.use('/main', calendarRouter)
//회원 관련 컨트롤러로
router.use('/user', userRouter);
//투두리스트 관련 컨트롤러로
router.use('/todoList', todoListRouter);
//버킷리스트 관련 컨트롤러로
router.use('/bucketList', bucketListRouter);
// 메인페이지
router.get('/', async (req,res) => {
  return res.render('main');
});

module.exports = router;