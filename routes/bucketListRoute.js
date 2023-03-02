const express = require('express');
const router = express.Router();
const BucketListController = require('../controllers/bucketListController');
const bucketListController = new BucketListController();

router.get("/user/login",bucketListController.semplefunc);

module.exports = router;
