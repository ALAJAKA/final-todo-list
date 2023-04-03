const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');
const userAuthToken = require("../middlewares/user-auth-middleware");
const reviewController = new ReviewController();

router.post("/bucket",userAuthToken,reviewController.bucketReviews);
router.get("/bucket",reviewController.getBucketReviews);
router.delete("/bucket",userAuthToken,reviewController.delBucketReviews);

router.post("/todo",userAuthToken,reviewController.todoReviews);
router.get("/todo",reviewController.getTodoReviews);
router.delete("/todo",userAuthToken,reviewController.delTodoReviews);

module.exports = router;
