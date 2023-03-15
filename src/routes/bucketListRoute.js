const express = require('express');
const router = express.Router();
const BucketListController = require('../controllers/bucketListController');
const bucketListController = new BucketListController();

router.get("/plan", bucketListController.getBucketList);
router.post("/plan", bucketListController.createBucketList);
router.put("/plan", bucketListController.updateBucketList);

module.exports = router;
