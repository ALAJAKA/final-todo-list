const TodoListService = require('../services/todoListService');

class TodoListController {
  todoListService = new TodoListService();

  getMonthTodo =async (req,res) => {
    const userId = 1;
    const {date,date2} = req.query;
    const monthTodoList = await this.todoListService.getMonthTodo(date,date2, userId);
    res.status(200).json({monthTodoList});
  }
  postAlldayTodo = async(req, res) =>{
    let image;
    if(req.file !== undefined) image = req.file.location;
    else image = '';
    const {title, content, date} = req.body;
    console.log(title, content, image, date);
    let userId = 1
    const postAlldayTodo = await this.todoListService.postAlldayTodo(title, content, image, date, userId)
    res.status(200).json({postAlldayTodo});
  }

  getAlldayTodo = async(req, res) =>{
    const {date} = req.query;
    let userId = 1
    const getAlldayTodo = await this.todoListService.getAlldayTodo(date, userId)
    res.status(200).json({
      getAlldayTodo
    });
  }

  putAlldayTodo = async(req, res) =>{
    let image;
    if(req.file !== undefined) image = req.file.location;
    else image = '';
    const {date, beforeTitle, content, afterTitle} = req.body;
    
    let userId = 1
    const putAlldayTodo = await this.todoListService.putAlldayTodo(date, beforeTitle, content, image, afterTitle, userId)
    res.status(201).json({
      image
    });
  }
  
  deleteAlldayTodo = async(req, res) =>{
    const {date, title} = req.body;
    console.log(req.body);
    let userId = 1
    const deleteAlldayTodo = await this.todoListService.deleteAlldayTodo(date, title, userId)
    res.status(201).json({
      deleteAlldayTodo
    });
  }

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

  cardSuccess = async(req, res) =>{
    const {date, title, success} = req.body;
    let userId = 1
    console.log(date);
    console.log(success);
    const cardSuccess = await this.todoListService.cardSuccess(date, title, success, userId)
    res.status(201).json({
      cardSuccess
    });
  }
}// class 끝

module.exports = TodoListController;
