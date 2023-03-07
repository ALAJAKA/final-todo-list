const CalendarRepository = require('../repositories/calendarRepository');
const { BucketList, TodoList } = require('../models');

class CalendarService {
  calendarRepository = new CalendarRepository(BucketList, TodoList);

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