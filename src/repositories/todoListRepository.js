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



  postAlldayTodoList = async (title, content, image, userId, name, share, shareCount) =>{
    const postAlldayTodoList = await this.AllDayTodoList.create({
      title, content, image, userId, name, share, shareCount
    });
    return  postAlldayTodoList;
  }
  postAlldayTodoLists = async (title,content, image, userId, name, success) =>{
    const postAlldayTodoLists = await this.AllDayTodoLists.create({
      title, content, image, userId, name, success
    });
    return  postAlldayTodoLists;
  }
  
  putAlldayTodoList = async ( beforeTitle, content, image, afterTitle, userId, share) =>{
    if (image){
      const putAlldayTodoList = await this.AllDayTodoList.update(
        {title:afterTitle, content, image, share},{
        where: {
          [Op.and]: [ {title:beforeTitle}, { userId }],
        }
      });
      return putAlldayTodoList;
    }else{
      const putAlldayTodoList = await this.AllDayTodoList.update(
        {title:afterTitle, content, share},{
        where: {
          [Op.and]: [ {title:beforeTitle}, { userId }],
        }
      });
      return putAlldayTodoList;
    }
  }

  putAlldayTodoLists = async (date, beforeTitle, content, image, afterTitle, userId) =>{
    if(image){
      const putAlldayTodoLists = await this.AllDayTodoLists.update(
        {title:afterTitle, content, image},{
        where: {
          [Op.and]: [{ createdAt:date }, {title:beforeTitle}, { userId }],
        }
      });
      return putAlldayTodoLists;
    }else{
      const putAlldayTodoLists = await this.AllDayTodoLists.update(
        {title:afterTitle, content},{
        where: {
          [Op.and]: [{ createdAt:date }, {title:beforeTitle}, { userId }],
        }
      });
      return putAlldayTodoLists;
    }
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

  getAlldayTodoLists = async (date, userId) =>{
    const getAlldayTodoLists = await this.AllDayTodoLists.findAll({
      where: {
        [Op.and]: [{ createdAt:date }, { userId }],
      },
      raw: true,
    });
    return getAlldayTodoLists;
  }

  deleteAlldayTodoList = async (title, userId) =>{
    const deleteAlldayTodoList = await this.AllDayTodoList.destroy({
      where: {
        [Op.and]: [ {title}, { userId }],
      }
  });
    return deleteAlldayTodoList;
  }
    
  deleteAlldayTodoLists = async (date, title, userId) =>{
    const deleteAlldayTodoLists = await this.AllDayTodoLists.destroy({
      where: {
        [Op.and]: [{ createdAt:date }, {title}, { userId }],
      }
  });
    return deleteAlldayTodoLists;
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
    const todoSuccess = await this.TodoList.update(
      {success},{
      where: {
        [Op.and]: [{ today:date }, {title}, { userId }],
      }
    });
    return todoSuccess;
  }

  cardSuccess = async (date, title, success, userId) =>{
    const cardSuccess = await this.AllDayTodoLists.update(
      {success},{
      where: {
        [Op.and]: [{ createdAt:date }, {title}, { userId }],
      }
    });
    return cardSuccess;
  }
  getTodoShare = async (shareTitle, shareName) =>{
    const getTodoShare = await this.AllDayTodoList.findOne({
      where: {
        [Op.and]: [{ title:shareTitle }, { name:shareName }],
      },
      raw: true,
    });
    return getTodoShare;
  }
  updateTodoShareCount = async(shareTitle, shareName, shareCount)=>{
    let newCount = Number(shareCount)+1
    const updateTodoShareCount = await this.AllDayTodoList.update(
      {shareCount:newCount},{
      where: {
        [Op.and]: [ { title:shareTitle }, { name:shareName }],
      }
    });
    return updateTodoShareCount;
  }
}

module.exports = TodoListRepository;
