const TodoListRepository = require('../repositories/todoListRepository')
const {TodoList, AllDayTodoList, AllDayTodoLists} = require('../models/index')

class TodoListService {
    todoListRepository = new TodoListRepository(TodoList, AllDayTodoList, AllDayTodoLists);

    postTodayTodo = async(date, title, userId) =>{
        const success = "READY"
        const postTodayTodo = await this.todoListRepository.postTodayTodo(date, title, success, userId)
        return postTodayTodo;
    }

    getTodayTodo = async(date, userId) =>{

        const getTodayTodo = await this.todoListRepository.getTodayTodo(date, userId)
        return getTodayTodo;
    }

    putTodayTodo = async(date, beforeTitle, afterTitle, userId) =>{

        const putTodayTodo = await this.todoListRepository.putTodayTodo(date, beforeTitle, afterTitle, userId)
        return putTodayTodo;
    }

    deleteTodayTodo = async(date, title, userId) =>{

        const deleteTodayTodo = await this.todoListRepository.deleteTodayTodo(date, title, userId)
        return deleteTodayTodo;
    }

    todoSuccess = async(date, title, success, userId) =>{

        const todoSuccess = await this.todoListRepository.todoSuccess(date, title, success, userId)
        return todoSuccess;
    }
}

module.exports = TodoListService;
