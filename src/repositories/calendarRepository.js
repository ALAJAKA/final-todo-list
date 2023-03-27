const { TodoList } = require('../models');
const { BucketList } = require('../models');
const { Op } = require('sequelize');

class CalendarRepository {
  constructor(TodoListModel, BucketListModel, AllDayTodoListModel, BucketListCardModel, AllDayTodoListsModel) {
    this.todoListModel = TodoListModel;
    this.bucketListModel = BucketListModel;
    this.allDayTodoListModel = AllDayTodoListModel;
    this.bucketListCardModel = BucketListCardModel;
    this.allDayTodoListsModel = AllDayTodoListsModel;
  }

  findBucketCalendar = async (userId) => {
    const bucketCalendar = await this.bucketListModel.findAll({
      where: { userId },
      order: [['id', 'desc']],
    });
    return bucketCalendar;
  };

  findTodoCalendar = async (userId) => {
    const todoCalendar = await this.todoListModel.findAll({
      where: { userId },
      order: [['id', 'asc']],
    });
    return todoCalendar;
  };

  findTodoList = async (userId) => {
    const todoList = await this.todoListModel.findAll({
      where: { userId },
      order: [['today', 'asc']],
    });
    return todoList;
  };

  findBucketList = async (userId) => {
    const bucketList = await this.bucketListModel.findAll({
      where: { userId },
      order: [['d_day', 'asc']],
      limit: 6
    });
    return bucketList;
  };

  findAllDayTodoList = async (userId) => {
    const alldayTodoList = await this.allDayTodoListModel.findAll({
      where: {
        [Op.and]: [
        { share:"OK" },
        {userId:{[Op.ne]: userId}}
      ]},
      order: [['id', 'desc']],
    });
    return alldayTodoList;
  };

  findBucketListCard = async (userId) => {
    const bucketListCard = await this.bucketListCardModel.findAll({
      where: {
        [Op.and]: [
        { share:"OK" },
        {userId:{[Op.ne]: userId}}
      ]},
      order: [['id', 'desc']],
    });
    return bucketListCard;
  };

  findAllDayTodoLists = async (userId) => {
    const alldayTodoLists = await this.allDayTodoListsModel.findAll({
      where: { userId },
      order: [['id', 'desc']],
    });
    return alldayTodoLists;
  };
  
}

module.exports = CalendarRepository;