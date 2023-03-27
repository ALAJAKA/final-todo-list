const reviewRepository = require('../repositories/reviewRepository')
const config = require('../config/config');
const jwtDecode = require("jwt-decode");
const jwt = require('jsonwebtoken');

class ReviewService {
    reviewRepository = new reviewRepository();
    bucketReviews = async (access_token,title,name,date,myComment) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const bucketListCardId = await this.reviewRepository.findCardId(name,title,date);
        await this.reviewRepository.bucketReviews(userId,bucketListCardId,myComment);
    }
    getBucketReviews = async (title,name,date)=>{
        const bucketListCardId = await this.reviewRepository.findCardId(name,title,date);
        const bucketListCardReviews = await this.reviewRepository.getBucketReviews(bucketListCardId);
        return bucketListCardReviews.map((x)=>{
            return {
                name:x.User.dataValues.name,
                content:x.dataValues.content
            }
        });
    }

    delBucketReviews= async (access_token,title,name,date,content)=>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const bucketListCardId = await this.reviewRepository.findCardId(name,title,date);
        await this.reviewRepository.delBucketReviews(userId,bucketListCardId,content);
    }
}

module.exports = ReviewService;
