const ReviewService = require('../services/reviewService');
class ReviewController {

    reviewService = new ReviewService();

    //리뷰작성
    bucketReviews = async (req,res)=>{
        const {access_token} = req.cookies;
        const {title,name,date,myComment} = req.body;
        await this.reviewService.bucketReviews(access_token,title,name,date,myComment);
        return res.status(201).json({msg:"댓글작성 완료"});
    }
    //리뷰조회
    getBucketReviews =async (req,res)=>{
        const {title,date,name} = req.query;
        const bucketReviews = await this.reviewService.getBucketReviews(title,name,date);
        return res.status(200).json(bucketReviews);
    }
    delBucketReviews =async (req,res)=>{
        const {access_token} = req.cookies;
        const {title,name,date,content} = req.body;
        await this.reviewService.delBucketReviews(access_token,title,name,date,content);
        return res.status(200).json({msg:'댓글 삭제 완료'});
    }

}// class 끝

module.exports = ReviewController;
