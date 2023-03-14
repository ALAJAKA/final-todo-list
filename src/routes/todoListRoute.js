const express = require('express');
const router = express.Router();
const TodoListController = require('../controllers/todoListController');
const todoListController = new TodoListController();

router.get("/1234",todoListController.semplefunc);

module.exports = router;
