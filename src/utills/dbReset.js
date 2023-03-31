const {AllDayTodoList, AllDayTodoLists} = require('../models/index')

const AllDayTodoReset = async () =>{
    const getAllDayTodoList = await AllDayTodoList.findAll({
      attributes: ['title','name','content','image','userId'],
      raw: true,
    });
    console.log(getAllDayTodoList)
    const postAllDayTodoList = await AllDayTodoLists.bulkCreate(getAllDayTodoList);
  }


module.exports.AllDayTodoReset = AllDayTodoReset;
