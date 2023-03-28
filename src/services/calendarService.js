const CalendarRepository = require('../repositories/calendarRepository');
const jwtDecode = require("jwt-decode");
const { TodoList, BucketList, AllDayTodoList, BucketListCard, AllDayTodoLists} = require('../models');

class CalendarService {
  calendarRepository = new CalendarRepository(TodoList, BucketList, AllDayTodoList, BucketListCard, AllDayTodoLists);

  findBucketCalendar = async (access_token) => {
    let userId;
    if(access_token!==undefined){
      const token = jwtDecode(access_token);
      userId = token.userId;
    }else{
      userId = 0;
    }
    const bucketCalendar = await this.calendarRepository.findBucketCalendar(userId);
    return bucketCalendar;
  };

  findTodoCalendar = async (access_token) => {
    let userId;
    if(access_token!==undefined){
      const token = jwtDecode(access_token);
      userId = token.userId;
    }else{
      userId = 0;
    }
    const todoCalendar = await this.calendarRepository.findTodoCalendar(userId);
    return todoCalendar;
  };

  findTodoList = async (access_token) => {
    let userId;
    if(access_token!==undefined){
      const token = jwtDecode(access_token);
      userId = token.userId;
    }else{
      userId = 0;
    }
    const todoList = await this.calendarRepository.findTodoList(userId);
    return todoList;
  };

  findBucketList = async (access_token) => {
    let userId;
    if(access_token!==undefined){
      const token = jwtDecode(access_token);
      userId = token.userId;
    }else{
      userId = 0;
    }
    const bucketList = await this.calendarRepository.findBucketList(userId);
    return bucketList;
  };

  findAllDayTodoList = async () => {
    const alldayTodoList = await this.calendarRepository.findAllDayTodoList();
    return alldayTodoList;
  };

  findBucketListCard = async () => {
    const bucketListCard = await this.calendarRepository.findBucketListCard();
    return bucketListCard;
  };

  findAllDayTodoLists = async (access_token) => {
    let userId;
    if(access_token!==undefined){
      const token = jwtDecode(access_token);
      userId = token.userId;
    }else{
      userId = 0;
    }
    const alldayTodoLists = await this.calendarRepository.findAllDayTodoLists(userId);
    return alldayTodoLists;
  };
}

module.exports = CalendarService;