const express = require('express');
const router = express.Router();
const BucketListController = require('../controllers/bucketListController');
const bucketListController = new BucketListController();

// C
router.post("/api/bucket",bucketListController.createBucketList);
// R
router.get("/api/bucket", bucketListController.getBucketList);
// U
router.put("/api/bucket/:id", bucketListController.editBucketList);
// D
router.delete("/api/bucket/:id", bucketListController.deleteBucketList);

module.exports = router;
