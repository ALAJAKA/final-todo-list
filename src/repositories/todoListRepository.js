const { Op } = require('sequelize');
class TodoListRepository {
  constructor(TodoList, AllDayTodoList, AllDayTodoLists) {
    this.TodoList = TodoList;
    this.AllDayTodoList = AllDayTodoList;
    this.AllDayTodoLists = AllDayTodoLists;
  }
  getMonthTodo = async (date,date2,userId) =>{
    const MonthTodo = await this.TodoList.findAll({
      where :{
        userId,
        today : {[Op.between]:[date,date2]}
      },
      order:[['today','ASC']]
    });
    return MonthTodo;
  }



  postAlldayTodoList = async (inputTitle, inputContent, inputImage, userId) =>{
    const postAlldayTodoList = await this.AllDayTodoList.create({
      title:inputTitle, content:inputContent, image:inputImage, userId
    });
      console.log(2);
    return  postAlldayTodoList;
  }
  postAlldayTodoLists = async (inputTitle, inputContent, inputImage, userId, success) =>{
    const postAlldayTodoLists = await this.AllDayTodoLists.create({
      title:inputTitle, content:inputContent, image:inputImage, userId, success
    });
    console.log(3);
    return  postAlldayTodoLists;
  }
  
  getAlldayTodoLists = async (date, userId) =>{
    const getAlldayTodoLists = await this.AllDayTodoLists.findAll({
      where: {
        [Op.and]: [{ createdAt:date }, { userId }],
      },
      raw: true,
    });
    return getAlldayTodoLists;
  }

  getAlldayTodoList = async (date, userId) =>{
    const getAlldayTodoList = await this.AllDayTodoList.findAll({
      where: {
        [Op.and]: [{ createdAt: {[Op.lt]:date }}, { userId }],
      },
      raw: true,
    });
    return getAlldayTodoList;
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
    console.log("성공성공1", todoSuccess);
    return todoSuccess;
  }

  cardSuccess = async (date, title, success, userId) =>{
    console.log(date, title, success, userId);
    const cardSuccess = await this.AllDayTodoLists.update(
      {success},{
      where: {
        [Op.and]: [{ createdAt:date }, {title}, { userId }],
      }
    });
    console.log("성공성공2", cardSuccess);
    return cardSuccess;
  }
}

module.exports = TodoListRepository;
