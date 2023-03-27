const express = require('express');
const router = express.Router();

const CalendarController = require('../controllers/calendarController');
const calendarController = new CalendarController();

router.get('/calendar/todo', calendarController.findTodoCalendar);
router.get('/calendar/bucket', calendarController.findBucketCalendar);
router.get('/calendar/alldayTodo', calendarController.findAllDayTodoLists);
router.get('/preview/todo', calendarController.findTodoList);
router.get('/preview/bucket', calendarController.findBucketList);
router.get('/card/alldayTodo', calendarController.findAllDayTodoList);
router.get('/card/bucket', calendarController.findBucketListCard);

module.exports = router;