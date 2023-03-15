const TodoListService = require('../services/todoListService');

class TodoListController {
  todoListService = new TodoListService();


  postTodayTodo = async(req, res) =>{
    const {date, title} = req.body;
    
    let userId = 1
    const postTodayTodo = await this.todoListService.postTodayTodo(date, title, userId)
    res.status(201).json({
      postTodayTodo
    });
  }

  getTodayTodo = async(req, res) =>{
    const {date} = req.query;
    
    let userId = 1
    const getTodayTodo = await this.todoListService.getTodayTodo(date, userId)
    res.status(200).json({
      getTodayTodo
    });
  }

  putTodayTodo = async(req, res) =>{
    const {date, beforeTitle, afterTitle} = req.body;
    
    let userId = 1
    const putTodayTodo = await this.todoListService.putTodayTodo(date, beforeTitle, afterTitle, userId)
    res.status(201).json({
      putTodayTodo
    });
  }

  deleteTodayTodo = async(req, res) =>{
    const {date, title} = req.body;
    console.log(req.body);
    let userId = 1
    const deleteTodayTodo = await this.todoListService.deleteTodayTodo(date, title, userId)
    res.status(201).json({
      deleteTodayTodo
    });
  }

  todoSuccess = async(req, res) =>{
    const {date, title, success} = req.body;
    let userId = 1
    console.log(date);
    console.log(success);
    const todoSuccess = await this.todoListService.todoSuccess(date, title, success, userId)
    res.status(201).json({
      todoSuccess
    });
  }
}// class 끝

module.exports = TodoListController;
