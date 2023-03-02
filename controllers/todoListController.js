const TodoListService = require('../services/todoListService');
class TodoListController {
  todoListService = new TodoListService();

  //회원가입
  semplefunc = async (req,res)=>{
    await this.todoListService.semplefunc(1,2);
    return res.send(0);
  }

}// class 끝

module.exports = TodoListController;
