const CalendarRepository = require('../repositories/calendarRepository');
const { TodoList, BucketList, AllDayTodoList, BucketListCard} = require('../models');

class CalendarService {
  calendarRepository = new CalendarRepository(TodoList, BucketList, AllDayTodoList, BucketListCard);

  findBucketCalendar = async () => {
    const bucketCalendar = await this.calendarRepository.findBucketCalendar();
    return bucketCalendar;
  };

  findTodoCalendar = async () => {
    const todoCalendar = await this.calendarRepository.findTodoCalendar();
    return todoCalendar;
  };

  findTodoList = async () => {
    const todolist = await this.calendarRepository.findTodoList();
    return todolist;
  };

  findBucketList = async () => {
    const bucketlist = await this.calendarRepository.findBucketList();
    return bucketlist;
  };

  findAllDayTodoList = async () => {
    const alldaytodolist = await this.calendarRepository.findAllDayTodoList();
    return alldaytodolist;
  };

  findBucketListCard = async () => {
    const bucketlistcard = await this.calendarRepository.findBucketListCard();
    return bucketlistcard;
  };
}

module.exports = CalendarService;