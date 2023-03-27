const CalendarRepository = require('../repositories/calendarRepository');
const jwtDecode = require("jwt-decode");
const { TodoList, BucketList, AllDayTodoList, BucketListCard, AllDayTodoLists} = require('../models');

class CalendarService {
  calendarRepository = new CalendarRepository(TodoList, BucketList, AllDayTodoList, BucketListCard, AllDayTodoLists);

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
    const todoList = await this.calendarRepository.findTodoList(userId);
    return todoList;
  };

  findBucketList = async (access_token) => {
    const token = jwtDecode(access_token);
    const userId = token.userId;
    const bucketList = await this.calendarRepository.findBucketList(userId);
    return bucketList;
  };

  findAllDayTodoList = async () => {
    // const token = jwtDecode();
    // const userId = token.userId;
    const alldayTodoList = await this.calendarRepository.findAllDayTodoList();
    return alldayTodoList;
  };

  findBucketListCard = async () => {
    // const token = jwtDecode();
    // const userId = token.userId;
    const bucketListCard = await this.calendarRepository.findBucketListCard();
    return bucketListCard;
  };

  findAllDayTodoLists = async (access_token) => {
    const token = jwtDecode(access_token);
    const userId = token.userId;
    const alldayTodoLists = await this.calendarRepository.findAllDayTodoLists(userId);
    return alldayTodoLists;
  };
}

module.exports = CalendarService;