const {AllDayTodoList, AllDayTodoLists} = require('../models/index')

const AllDayTodoReset = async () =>{
    const getAllDayTodoList = await AllDayTodoList.findAll({
      attributes: ['title','content','image','userId'],
      raw: true,
    });
    const postAllDayTodoList = await AllDayTodoLists.bulkCreate(getAllDayTodoList);
  }


module.exports.AllDayTodoReset = AllDayTodoReset;
