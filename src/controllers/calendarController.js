const CalendarService = require('../services/calendarService');

class CalendarController {
  calendarService = new CalendarService();

  findBucketCalendar = async (req, res) => {
    try {
      const bucketCalendar = await this.calendarService.findBucketCalendar();
      res.status(200).json({ data: bucketCalendar });
    } catch (err) {
      console.log(err);
    }
  }

  findTodoCalendar = async (req, res) => {
    try {
      const todoCalendar = await this.calendarService.findTodoCalendar();
      res.status(200).json({ data: todoCalendar });
    } catch (err) {
      console.log(err);
    }
  }

  findTodoList = async (req, res) => {
    try {
      const todolist = await this.calendarService.findTodoList();
      res.status(200).json({ data: todolist });
    } catch (err) {
      console.log(err);
    }
  }

  findBucketList = async (req, res) => {
    try {
      const bucketlist = await this.calendarService.findBucketList();
      res.status(200).json({ data: bucketlist });
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = CalendarController;