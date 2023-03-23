const { TodoList } = require('../models');
const { BucketList } = require('../models');

class CalendarRepository {
  constructor(TodoListModel, BucketListModel, AllDayTodoListtModel, BucketListCardModel) {
    this.todoListModel = TodoListModel;
    this.bucketListModel = BucketListModel;
    this.allDayTodoListModel = AllDayTodoListtModel;
    this.bucketListCardModel = BucketListCardModel;
  }

  findBucketCalendar = async () => {
    const bucketCalendar = await this.bucketListModel.findAll({
      order: [['id', 'desc']],
    });
    return bucketCalendar;
  };

  findTodoCalendar = async () => {
    const todoCalendar = await this.todoListModel.findAll({
      order: [['id', 'desc']],
    });
    return todoCalendar;
  };

  findTodoList = async () => {
    const todolist = await this.todoListModel.findAll({
      order: [['today', 'asc']],
    });
    return todolist;
  };

  findBucketList = async () => {
    const bucketlist = await this.bucketListModel.findAll({
      order: [['d_day', 'asc']],
      limit: 10
    });
    return bucketlist;
  };

  findAllDayTodoList = async () => {
    const alldaytodolist = await this.allDayTodoListModel.findAll({
      order: [['id', 'desc']],
    });
    return alldaytodolist;
  };

  findBucketListCard = async () => {
    const bucketlistcard = await this.bucketListCardModel.findAll({
      order: [['id', 'desc']],
    });
    return bucketlistcard;
  };
}

module.exports = CalendarRepository;