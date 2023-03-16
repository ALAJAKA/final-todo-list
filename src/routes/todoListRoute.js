const express = require('express');
const router = express.Router();
const TodoListController = require('../controllers/todoListController');
const todoListController = new TodoListController();

router.post("/alldayTodo",todoListController.postAlldayTodo);
router.get("/alldayTodo",todoListController.getAlldayTodo);
router.put("/alldayTodo",todoListController.putAlldayTodo);
// router.delete("/alldayTodo",todoListController.deleteAlldayTodo);
router.put("/cardSuccess",todoListController.cardSuccess);

router.post("/todayTodo",todoListController.postTodayTodo);
router.get("/todayTodo",todoListController.getTodayTodo);
router.put("/todayTodo",todoListController.putTodayTodo);
router.delete("/todayTodo",todoListController.deleteTodayTodo);
router.put("/todoSuccess",todoListController.todoSuccess);

router.get("/monthTodo", todoListController.getMonthTodo);
module.exports = router;
