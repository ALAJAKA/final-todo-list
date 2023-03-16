const TodoListRepository = require('../repositories/todoListRepository')
const {TodoList, AllDayTodoList, AllDayTodoLists} = require('../models/index')

class TodoListService {
    todoListRepository = new TodoListRepository(TodoList, AllDayTodoList, AllDayTodoLists);

    getMonthTodo =async (date,date2,userId)=>{
        const MonthTodo = await this.todoListRepository.getMonthTodo(date,date2,userId);
        return MonthTodo.map((TodoList) =>{
            return {
                title : TodoList.title,
                success : TodoList.success,
                today : TodoList.today
            };
        });
    }

    
    postAlldayTodo = async(inputTitle, inputContent, inputImage, date, userId) =>{
        const success = "READY"
        const today = new Date().toISOString().substring(0,10);
        console.log(date, today);

        if (date==today){
            const postAlldayTodoLists = await this.todoListRepository.postAlldayTodoLists(inputTitle, inputContent, inputImage, userId, success)
            console.log(22);
        }
        const postAlldayTodoList = await this.todoListRepository.postAlldayTodoList(inputTitle, inputContent, inputImage, userId)
        console.log(33);
        return postAlldayTodoList;
    }
    
    getAlldayTodo = async(date, userId) =>{
        const today = new Date().toISOString().substring(0,10);
        if (date > today){
            const getAlldayTodoList = await this.todoListRepository.getAlldayTodoList(date, userId)
            return getAlldayTodoList;
        }else{
            const getAlldayTodoLists = await this.todoListRepository.getAlldayTodoLists(date, userId)
            return getAlldayTodoLists;
        }
    }

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

    cardSuccess = async(date, title, success, userId) =>{
        const cardSuccess = await this.todoListRepository.cardSuccess(date, title, success, userId)
        return cardSuccess;
    }
}

module.exports = TodoListService;
