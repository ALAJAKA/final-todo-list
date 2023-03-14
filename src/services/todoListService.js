const TodoListRepository = require('../repositories/todoListRepository')
const {TodoList} = require('../models/todoList')
const config = require('../config/config');

class TodoListService {

    todoListRepository = new TodoListRepository(TodoList);
    semplefunc = async (req,res)=>{
        await this.todoListRepository.semplefunc(1,2);
        return 0;
    }
}

module.exports = TodoListService;
