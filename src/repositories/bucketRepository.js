const { Op } = require('sequelize');
const { BucketList } = require('../models')
const {BucketListCard} = require('../models')

class BucketListRepository {

  getBucketList = async (userId,date) => {
    const BucketLists = await BucketList.findAll({ where : {
      userId ,
      d_day: {[Op.gte]:date},
    },
      order:[['d_day','ASC']]
    });
    return BucketLists;
  }

  getBucketListCards= async (userId) => {
    const BucketListCards = await BucketListCard.findAll({ where : {
        userId
      }
    });
    return BucketListCards;
  }


  createBucketList = async (userId,title,date) => {
    const bucketList = await BucketList.create({
      userId,
      title,
      d_day:date,
    });
    return bucketList;
  }
  updateBucketList= async (userId,title,date,before,beforeDay) => {
    const bucketList = await BucketList.update({
      title:title,
      d_day:date,
    },{where :{
        userId:userId,
        title:before,
        d_day:beforeDay
      },
      limit:1
    });
    return bucketList;
  }
  createBucketListCard = async (title,content,image,userId) =>{
    const bucketListCard = await BucketListCard.create({
      title,
      content,
      image:image,
      userId
    });
    return bucketListCard;
  }

  deleteBucketList = async (title,dayValue,userId)=>{
    await BucketList.destroy({
      where:{
        title:title,
        d_day:dayValue,
        userId:userId,
      }
    });
  }
  deleteBucketListCard = async  (title,content,img,userId)=>{
    await BucketListCard.destroy({
      where:{
        title:title,
        content:content,
        image:img,
        userId:userId,
      }
    });
  }

  updateBucketListCard = async (title1,content1,img1,title,content,image,userId)=>{
    await BucketListCard.update({
      title:title,
      content:content,
      image:image,
    },{where:{
        title:title1,
        content:content1,
        image:img1,
        userId:userId
      }
    });
  }
}

module.exports = BucketListRepository;
