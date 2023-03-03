const express = require('express');
const router = express.Router();
const TodoListController = require('../controllers/todoListController');
const todoListController = new TodoListController();

router.get("/month",todoListController.semplefunc);

module.exports = router;
