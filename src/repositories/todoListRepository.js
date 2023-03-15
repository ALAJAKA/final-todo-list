const { Op } = require('sequelize');
class TodoListRepository {
  constructor(TodoList, AllDayTodoList, AllDayTodoLists) {
    this.TodoList = TodoList;
    this.AllDayTodoList = AllDayTodoList;
    this.AllDayTodoLists = AllDayTodoLists;
  }
  postTodayTodo = async (date, title, success, userId) =>{
    const postTodayTodo = await this.TodoList.create({
      today:date,
      title,
      success,
      userId
    });
    return postTodayTodo;
  }

  getTodayTodo = async (date, userId) =>{
    const getTodayTodo = await this.TodoList.findAll({
      where: {
        [Op.and]: [{ today:date }, { userId }],
      },
      raw: true,
    });
    return getTodayTodo;
  }

  putTodayTodo = async (date, beforeTitle, afterTitle, userId) =>{
    const putTodayTodo = await this.TodoList.update(
      {title:afterTitle},{
      where: {
        [Op.and]: [{ today:date }, {title:beforeTitle}, { userId }],
      }
    });
    return putTodayTodo;
  }

  deleteTodayTodo = async (date, title, userId) =>{
    const deleteTodayTodo = await this.TodoList.destroy({
      where: {
        [Op.and]: [{ today:date }, {title}, { userId }],
      }
  });
    return deleteTodayTodo;
  }

  todoSuccess = async (date, title, success, userId) =>{
    console.log(date, title, success, userId);
    const todoSuccess = await this.TodoList.update(
      {success},{
      where: {
        [Op.and]: [{ today:date }, {title}, { userId }],
      }
    });
    console.log("성공성공", todoSuccess);
    return todoSuccess;
  }
}

module.exports = TodoListRepository;
