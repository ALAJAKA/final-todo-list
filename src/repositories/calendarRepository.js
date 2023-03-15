const { TodoList } = require('../models');
const { BucketList } = require('../models');

class CalendarRepository {
  constructor(TodoListModel, BucketListModel) {
    this.todoListModel = TodoListModel;
    this.bucketListModel = BucketListModel;
  }

  findCalendar = async () => {
    const calendar = await this.bucketListModel.findAll({
      order: [['id', 'desc']],
    });
    return calendar;
  };

  findTodoList = async () => {
    const todolist = await this.todoListModel.findAll({
      order: [['id', 'desc']],
      limit: 10
    });
    return todolist;
  };

  findBucketList = async () => {
    const bucketlist = await this.bucketListModel.findAll({
      order: [['id', 'desc']],
      limit: 10
    });
    return bucketlist;
  };
}

module.exports = CalendarRepository;