const TodoListRepository = require('../repositories/todoListRepository')
const {TodoList, AllDayTodoList, AllDayTodoLists} = require('../models/index')

class TodoListService {
    todoListRepository = new TodoListRepository(TodoList, AllDayTodoList, AllDayTodoLists);

    getTodayTodo = async(Day, userId) =>{

        const getTodayTodo = await this.todoListRepository.getTodayTodo(Day, userId)
        return getTodayTodo;
    }
}

module.exports = TodoListService;
