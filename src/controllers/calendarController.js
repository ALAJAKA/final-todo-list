const CalendarService = require('../services/calendarService');

class CalendarController {
  calendarService = new CalendarService();

  findCalendar = async (req, res) => {
    try {
      const calendar = await this.calendarService.findCalendar();
      res.status(200).json({ data: calendar });
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