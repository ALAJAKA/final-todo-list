const { Op } = require('sequelize');
const {User,TodoReview,BucketReview,BucketListCard,AllDayTodoList} = require('../models')
class ReviewRepository {

    findCardId = async (name,title,date) =>{
        const cardId = await BucketListCard.findOne({
            attributes:['id']
            ,where:{
            name:name,
            title:title,
            updatedAt:date,
            },
        });
        return cardId.dataValues.id;
    }
    bucketReviews = async (userId,bucketListCardId,myComment)=>{
        await BucketReview.create({
            userId:userId,
            BucketListCardId:bucketListCardId,
            content:myComment
        });
    }
    getBucketReviews = async (bucketListCardId) =>{
        const BucketReviews = await BucketReview.findAll({
            where:{BucketListCardId:bucketListCardId},
            include:[{
                model:User,
                attributes :['name'],
            },
            ],
        });
        return BucketReviews;
    }
    delBucketReviews = async (userId,bucketListCardId,content)=>{
        console.log('content',content);
        await BucketReview.destroy({
            where:{
                userId:userId,
                BucketListCardId:bucketListCardId,
                content:content
            }
        });
    }

}

module.exports = ReviewRepository;
