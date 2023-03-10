const CalendarRepository = require('../repositories/calendarRepository');
const { TodoList, BucketList } = require('../models');

class CalendarService {
  calendarRepository = new CalendarRepository(TodoList, BucketList);

  findTodoList = async () => {
    const todolist = await this.calendarRepository.findTodoList();
    return todolist;
  };

  findBucketList = async () => {
    const bucketlist = await this.calendarRepository.findBucketList();
    return bucketlist;
  };
}

module.exports = CalendarService;