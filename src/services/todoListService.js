const TodoListRepository = require('../repositories/todoListRepository')
const {TodoList, AllDayTodoList, AllDayTodoLists} = require('../models/index')
const jwtDecode = require("jwt-decode");

class TodoListService {
    todoListRepository = new TodoListRepository(TodoList, AllDayTodoList, AllDayTodoLists);

    getMonthTodo =async (date,date2,access_token)=>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const MonthTodo = await this.todoListRepository.getMonthTodo(date,date2,userId);
        return MonthTodo.map((TodoList) =>{
            return {
                title : TodoList.title,
                success : TodoList.success,
                today : TodoList.today
            };
        });
    }

    
    postAlldayTodo = async(title, content, image, date, share, access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const name = token.name;
        const success = "READY"
        const today = new Date().toISOString().substring(0,10);
        const shareCount = 0
        if (date==today){
            const postAlldayTodoLists = await this.todoListRepository.postAlldayTodoLists(title, content, image, userId, name, success)
        }
        const postAlldayTodoList = await this.todoListRepository.postAlldayTodoList(title, content, image, userId, name, share, shareCount)
        return postAlldayTodoList;
    }
    
    putAlldayTodo = async(date, beforeTitle, content, image, afterTitle, access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const today = new Date().toISOString().substring(0,10);

        if (date==today){
            const putAlldayTodoLists = await this.todoListRepository.putAlldayTodoLists(date, beforeTitle, content, image, afterTitle, userId)
        }
        const putAlldayTodoList = await this.todoListRepository.putAlldayTodoList(beforeTitle, content, image, afterTitle, userId)
        return putAlldayTodoList;
    }

    getAlldayTodo = async(date, access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const today = new Date().toISOString().substring(0,10);
        if (date > today){
            const getAlldayTodoList = await this.todoListRepository.getAlldayTodoList(date, userId)
            return getAlldayTodoList;
        }else{
            const getAlldayTodoLists = await this.todoListRepository.getAlldayTodoLists(date, userId)
            return getAlldayTodoLists;
        }
    }

    deleteAlldayTodo = async(date, title, access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const today = new Date().toISOString().substring(0,10);

        if (date==today){
            const deleteAlldayTodoLists = await this.todoListRepository.deleteAlldayTodoLists(date, title, userId)
        }
        const deleteAlldayTodoList = await this.todoListRepository.deleteAlldayTodoList(title, userId)
        return deleteAlldayTodoList;
    }

    postTodayTodo = async(date, title, access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const success = "READY"
        const postTodayTodo = await this.todoListRepository.postTodayTodo(date, title, success, userId)
        return postTodayTodo;
    }

    getTodayTodo = async(date, access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const getTodayTodo = await this.todoListRepository.getTodayTodo(date, userId)
        return getTodayTodo;
    }

    putTodayTodo = async(date, beforeTitle, afterTitle, access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const putTodayTodo = await this.todoListRepository.putTodayTodo(date, beforeTitle, afterTitle, userId)
        return putTodayTodo;
    }

    deleteTodayTodo = async(date, title, access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const deleteTodayTodo = await this.todoListRepository.deleteTodayTodo(date, title, userId)
        return deleteTodayTodo;
    }

    todoSuccess = async(date, title, success, access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const todoSuccess = await this.todoListRepository.todoSuccess(date, title, success, userId)
        return todoSuccess;
    }

    cardSuccess = async(date, title, success, access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const cardSuccess = await this.todoListRepository.cardSuccess(date, title, success, userId)
        return cardSuccess;
    }

    postTodoShare = async(shareTitle, shareName, shareCount, access_token) =>{
        const getTodoShare = await this.todoListRepository.getTodoShare(shareTitle, shareName)
        const updateTodoShareCount = await this.todoListRepository.updateTodoShareCount(shareTitle, shareName, shareCount)
        const title = getTodoShare.title
        const content = getTodoShare.content
        const image = getTodoShare.image
        const share = "NO"
        shareCount = 0

        const token = jwtDecode(access_token);
        const userId = token.userId;
        const name = token.name;
        const success = "READY"
        const postAlldayTodoLists = await this.todoListRepository.postAlldayTodoLists(title, content, image, userId, name, success)
        const postAlldayTodoList = await this.todoListRepository.postAlldayTodoList(title, content, image, userId, name, share, shareCount)
        return postAlldayTodoList;
    }
}

module.exports = TodoListService;
