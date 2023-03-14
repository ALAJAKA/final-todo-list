const TodoListService = require('../services/todoListService');

class TodoListController {
  todoListService = new TodoListService();


  getTodayTodo = async(req, res) =>{
    const {year, month, day} = req.query;
    const Day = (year+"-"+month+"-"+day)
    let userId = 1
    console.log(Day);
    const todayTodo = await this.todoListService.getTodayTodo(Day, userId)
    res.status(200).json({
      todayTodo
    });
  }
}// class 끝

module.exports = TodoListController;
