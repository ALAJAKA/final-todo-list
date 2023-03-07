const CalendarService = require('../services/calendarService');

class CalendarController {
  calendarService = new CalendarService();

  findTodoList = async (req, res, next) => {
    try {
      const todolist = await this.calendarService.findTodoList();
      res.status(200).json({ data: todolist });
    } catch (err) {
      console.log(err);
    }
  };

  findBucketList = async (req, res, next) => {
    try {
      const bucketlist = await this.calendarService.findBucketList();
      res.status(200).json({ data: bucketlist });
    } catch (err) {
      console.log(err);
    }
  };
};

module.exports = CalendarController;