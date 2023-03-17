const { TodoList } = require('../models');
const { BucketList } = require('../models');

class CalendarRepository {
  constructor(TodoListModel, BucketListModel) {
    this.todoListModel = TodoListModel;
    this.bucketListModel = BucketListModel;
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
      order: [['id', 'asc']],
      limit: 10
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
}

module.exports = CalendarRepository;