const CalendarRepository = require('../repositories/calendarRepository');
const jwtDecode = require("jwt-decode");
const { TodoList, BucketList, AllDayTodoList, BucketListCard} = require('../models');

class CalendarService {
  calendarRepository = new CalendarRepository(TodoList, BucketList, AllDayTodoList, BucketListCard);

  findBucketCalendar = async (access_token) => {
    const token = jwtDecode(access_token);
    const userId = token.userId;
    const bucketCalendar = await this.calendarRepository.findBucketCalendar(userId);
    return bucketCalendar;
  };

  findTodoCalendar = async (access_token) => {
    const token = jwtDecode(access_token);
    const userId = token.userId;
    const todoCalendar = await this.calendarRepository.findTodoCalendar(userId);
    return todoCalendar;
  };

  findTodoList = async (access_token) => {
    const token = jwtDecode(access_token);
    const userId = token.userId;
    const todolist = await this.calendarRepository.findTodoList(userId);
    return todolist;
  };

  findBucketList = async (access_token) => {
    const token = jwtDecode(access_token);
    const userId = token.userId;
    const bucketlist = await this.calendarRepository.findBucketList(userId);
    return bucketlist;
  };

  findAllDayTodoList = async (access_token) => {
    const token = jwtDecode(access_token);
    const userId = token.userId;
    const alldaytodolist = await this.calendarRepository.findAllDayTodoList(userId);
    return alldaytodolist;
  };

  findBucketListCard = async (access_token) => {
    const token = jwtDecode(access_token);
    const userId = token.userId;
    const bucketlistcard = await this.calendarRepository.findBucketListCard(userId);
    return bucketlistcard;
  };
}

module.exports = CalendarService;