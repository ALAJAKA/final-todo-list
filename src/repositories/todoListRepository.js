const { Op } = require('sequelize');
class TodoListRepository {
  constructor(TodoList, AllDayTodoList, AllDayTodoLists) {
    this.TodoList = TodoList;
    this.AllDayTodoList = AllDayTodoList;
    this.AllDayTodoLists = AllDayTodoLists;
  }
  getTodayTodo = async (Day, userId) =>{
    const todayTodo = await this.TodoList.findAll({
      where: {
        [Op.and]: [{ today:Day }, { userId }],
      },
      raw: true,
    });
    console.log(todayTodo);
    return todayTodo;
  }
}

module.exports = TodoListRepository;
