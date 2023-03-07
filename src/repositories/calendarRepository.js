const { BucketList, TodoList } = require('../models')

class CalendarRepository {
  constructor(TodoListModel, BucketListModel) {
    this.TodoListModel = TodoListModel;
    this.BucketListModel = BucketListModel;
  }

  findTodoList = async () => {
    const todolist = await this.TodoListModel.findAll({order: [['id']]});
    return todolist;
  };

  findBucketList = async () => {
    const bucketlist = await this.BucketListModel.findAll({order: [['id']]});
    return bucketlist;
  };
}

module.exports = CalendarRepository;