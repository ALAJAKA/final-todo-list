const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const userController = new UserController();

router.get("/user/login",userController.login);

module.exports = router;
