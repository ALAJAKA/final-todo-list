const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');
const reviewController = new ReviewController();

router.post("/bucket",reviewController.bucketReviews);
router.get("/bucket",reviewController.getBucketReviews);
router.delete("/bucket",reviewController.delBucketReviews);

module.exports = router;
