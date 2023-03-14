const { TodoList } = require('../models');
const { BucketList } = require('../models');

class CalendarRepository {
  constructor(TodoListModel, BucketListModel) {
    this.todoListModel = TodoListModel;
    this.bucketListModel = BucketListModel;
  }

  findTodoList = async () => {
    const todolist = await this.todoListModel.findAll({
      order: [['id', 'desc']],
      // limit: 5
    });
    return todolist;
  };

  findBucketList = async () => {
    const bucketlist = await this.bucketListModel.findAll({
      order: [['id', 'desc']],
      // limit: 5
    });
    return bucketlist;
  };
}

module.exports = CalendarRepository;