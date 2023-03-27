const { TodoList } = require('../models');
const { BucketList } = require('../models');
const { Op } = require('sequelize');

class CalendarRepository {
  constructor(TodoListModel, BucketListModel, AllDayTodoListtModel, BucketListCardModel) {
    this.todoListModel = TodoListModel;
    this.bucketListModel = BucketListModel;
    this.allDayTodoListModel = AllDayTodoListtModel;
    this.bucketListCardModel = BucketListCardModel;
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
      order: [['id', 'desc']],
    });
    return todoCalendar;
  };

  findTodoList = async (userId) => {
    const todolist = await this.todoListModel.findAll({
      where: { userId },
      order: [['today', 'asc']],
    });
    return todolist;
  };

  findBucketList = async (userId) => {
    const bucketlist = await this.bucketListModel.findAll({
      where: { userId },
      order: [['d_day', 'asc']],
      limit: 6
    });
    return bucketlist;
  };

  findAllDayTodoList = async (userId) => {
    console.log(userId);
    const alldaytodolist = await this.allDayTodoListModel.findAll({
      where: {
        [Op.and]: [
        { share:"OK" },
        {userId:{[Op.ne]: userId}}
      ]},
      order: [['id', 'desc']],
    });
    return alldaytodolist;
  };

  findBucketListCard = async (userId) => {
    console.log(userId);
    const bucketlistcard = await this.bucketListCardModel.findAll({
      where: {
        [Op.and]: [
        { share:"OK" },
        {userId:{[Op.ne]: userId}}
      ]},
      order: [['id', 'desc']],
    });
    return bucketlistcard;
  };
}

module.exports = CalendarRepository;