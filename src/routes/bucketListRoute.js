const express = require('express');
const router = express.Router();
const BucketListController = require('../controllers/bucketListController');
const bucketListController = new BucketListController();
const S3upload = require('../middlewares/s3Uploader')


//하단 버킷리스트 데이터 받아오기
router.get("/plan", bucketListController.getBucketList);
//하단 버킷리스트 데이터 수정
router.put("/plan", bucketListController.updateBucketList);
//하단 버킷리스트 데이터 생성
router.post("/plan", bucketListController.createBucketList);
// 하단 버킷리스트 데이터 삭제
router.delete("/plan", bucketListController.deleteBucketList);

//카드 생성
router.post("/cards",S3upload.single('image'), bucketListController.createBucketListCard);
//카드 데이터 받아오기
router.get("/cards", bucketListController.getBucketListCard);
//카드 삭제
router.delete("/cards", bucketListController.deleteBucketListCard);
//카드 수정
router.put("/cards",S3upload.single('image'), bucketListController.updateBucketListCard);
//카드 완료
router.put("/cards/ok",bucketListController.bucketListCardOk);
//카드 완료 취소
router.put("/cards/cancel",bucketListController.bucketListCardCancel);

router.post("/bucketShare", bucketListController.postBucketShare);

module.exports = router;
