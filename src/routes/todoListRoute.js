const express = require('express');
const router = express.Router();
const TodoListController = require('../controllers/todoListController');
const todoListController = new TodoListController();
const S3upload = require('../middlewares/s3Uploader')

//매일하는 투두 
//등록
router.post("/alldayTodo", S3upload.single('image'), todoListController.postAlldayTodo);
//조회
router.get("/alldayTodo", todoListController.getAlldayTodo);
//수정
router.put("/alldayTodo", S3upload.single('image'), todoListController.putAlldayTodo);
//삭제
router.delete("/alldayTodo", todoListController.deleteAlldayTodo);
//완료
router.put("/cardSuccess", todoListController.cardSuccess);

//하루만하는 투두
//등록
router.post("/todayTodo", todoListController.postTodayTodo);
//조회
router.get("/todayTodo", todoListController.getTodayTodo);
//수정
router.put("/todayTodo", todoListController.putTodayTodo);
//삭제
router.delete("/todayTodo", todoListController.deleteTodayTodo);
//완료
router.put("/todoSuccess", todoListController.todoSuccess);

//투두쉐어
router.post("/todoShare", todoListController.postTodoShare);

router.get("/monthTodo", todoListController.getMonthTodo);
module.exports = router;
