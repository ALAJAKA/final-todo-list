const express = require('express');
const router = express.Router();
const TodoListController = require('../controllers/todoListController');
const todoListController = new TodoListController();

router.post("/todayTodo",todoListController.postTodayTodo);
router.get("/todayTodo",todoListController.getTodayTodo);
router.put("/todayTodo",todoListController.putTodayTodo);
router.delete("/todayTodo",todoListController.deleteTodayTodo);
router.put("/todoSuccess",todoListController.todoSuccess);

module.exports = router;
