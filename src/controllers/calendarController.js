const CalendarService = require('../services/calendarService');

class CalendarController {
  calendarService = new CalendarService();

  findBucketCalendar = async (req, res) => {
    try {
      const {access_token} = req.cookies;
      const bucketCalendar = await this.calendarService.findBucketCalendar(access_token);
      res.status(200).json({ data: bucketCalendar });
    } catch (err) {
      console.log(err);
    }
  }

  findTodoCalendar = async (req, res) => {
    try {
      const {access_token} = req.cookies;
      const todoCalendar = await this.calendarService.findTodoCalendar(access_token);
      res.status(200).json({ data: todoCalendar });
    } catch (err) {
      console.log(err);
    }
  }

  findTodoList = async (req, res) => {
    try {
      const {access_token} = req.cookies;
      const todolist = await this.calendarService.findTodoList(access_token);
      res.status(200).json({ data: todolist });
    } catch (err) {
      console.log(err);
    }
  }

  findBucketList = async (req, res) => {
    try {
      const {access_token} = req.cookies;
      const bucketlist = await this.calendarService.findBucketList(access_token);
      res.status(200).json({ data: bucketlist });
    } catch (err) {
      console.log(err);
    }
  }

  findAllDayTodoList = async (req, res) => {
    try {
      // const {access_token} = req.cookies;
      const alldaytodolist = await this.calendarService.findAllDayTodoList();
      res.status(200).json({ data: alldaytodolist });
    } catch (err) {
      console.log(err);
    }
  }

  findBucketListCard = async (req, res) => {
    try {
      // const {access_token} = req.cookies;
      const bucketlistcard = await this.calendarService.findBucketListCard();
      res.status(200).json({ data: bucketlistcard });
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = CalendarController;