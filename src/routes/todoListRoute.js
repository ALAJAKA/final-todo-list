const express = require('express');
const router = express.Router();
const TodoListController = require('../controllers/todoListController');
const todoListController = new TodoListController();

router.get("/month",todoListController.semplefunc);
router.get('/detail', (req, res) => {
  res.render('todoListDetail');
});

module.exports = router;
