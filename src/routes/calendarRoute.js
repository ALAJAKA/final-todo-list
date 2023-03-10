const express = require('express');
const router = express.Router();

const CalendarController = require('../controllers/calendarController');
const calendarController = new CalendarController();

router.get('/preview/todo', calendarController.findTodoList);
router.get('/preview/bucket', calendarController.findBucketList);

module.exports = router;