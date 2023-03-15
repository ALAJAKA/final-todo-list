const { Op } = require('sequelize');
const { BucketList } = require('../models')

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
  createBucketList = async (userId,title,date) => {
    const bucketList = await BucketList.create({
      userId,
      title,
      d_day:date,
    });
    return bucketList;
  }
  updateBucketList= async (userId,title,date,before,beforeDay) => {
    console.log(title);
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
}

module.exports = BucketListRepository;
