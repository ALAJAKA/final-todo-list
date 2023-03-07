const express = require('express');
const router = express.Router();

const CalendarController = require('../controllers/calendarController');
const calendarController = new CalendarController();

router.get('/todo', calendarController.findTodoList);
router.get('/bucket', calendarController.findBucketList);

module.exports = router;