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
      const todoList = await this.calendarService.findTodoList(access_token);
      res.status(200).json({ data: todoList });
    } catch (err) {
      console.log(err);
    }
  }

  findBucketList = async (req, res) => {
    try {
      const {access_token} = req.cookies;
      const bucketList = await this.calendarService.findBucketList(access_token);
      res.status(200).json({ data: bucketList });
    } catch (err) {
      console.log(err);
    }
  }

  findAllDayTodoList = async (req, res) => {
    try {
      const {access_token} = req.cookies;
      const alldayTodoList = await this.calendarService.findAllDayTodoList(access_token);
      res.status(200).json({ data: alldayTodoList });
    } catch (err) {
      console.log(err);
    }
  }

  findBucketListCard = async (req, res) => {
    try {
      const {access_token} = req.cookies;
      const bucketListCard = await this.calendarService.findBucketListCard(access_token);
      res.status(200).json({ data: bucketListCard });
    } catch (err) {
      console.log(err);
    }
  }

  findAllDayTodoLists = async (req, res) => {
    try {
      const {access_token} = req.cookies;
      const alldayTodoLists = await this.calendarService.findAllDayTodoLists(access_token);
      res.status(200).json({ data: alldayTodoLists });
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = CalendarController;