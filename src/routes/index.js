const express = require('express');
const router = express.Router();

const calendarRouter = require('./calendarRoute')
const userRouter = require('./userRoute');
const bucketListRouter = require('./bucketListRoute');
const todoListRouter = require('./todoListRoute');
const pageRouter = require('./pageRoute');

// 버킷리스트 페이지
router.use('/bucketList', async (req, res) => {

  res.render('bucketList');
});

//메인페이지 관련 컨트롤로
router.use('/calendar', calendarRouter)
//회원 관련 컨트롤러로
router.use('/user', userRouter);
//투두리스트 관련 컨트롤러로
router.use('/todoList', todoListRouter);
//버킷리스트 관련 컨트롤러로
router.use('/bucketList', bucketListRouter);
//패아자 이동에 관한 라우터로
router.use('/', pageRouter);
// 메인페이지

module.exports = router;