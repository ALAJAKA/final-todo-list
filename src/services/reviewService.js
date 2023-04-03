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

    todoReviews = async (access_token,title,name,date,myComment) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const todoListCardId = await this.reviewRepository.findTodoCardId(name,title,date);
        await this.reviewRepository.todoReviews(userId,todoListCardId,myComment);
    }
    getTodoReviews = async (title,name,date)=>{
        const todoListCardId = await this.reviewRepository.findTodoCardId(name,title,date);
        const todoListCardReviews = await this.reviewRepository.getTodoReviews(todoListCardId);
        return todoListCardReviews.map((x)=>{
            return {
                name:x.User.dataValues.name,
                content:x.dataValues.content
            }
        });
    }

    delTodoReviews= async (access_token,title,name,date,content)=>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const todoListCardId = await this.reviewRepository.findTodoCardId(name,title,date);
        await this.reviewRepository.delTodoReviews(userId,todoListCardId,content);
    }
}

module.exports = ReviewService;
