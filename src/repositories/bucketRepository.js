const { Op } = require('sequelize');
const { BucketList } = require('../models')
const {BucketListCard} = require('../models')

class BucketListRepository {
  //버킷리스트 하단 조회
  getBucketList = async (userId,date) => {
    const BucketLists = await BucketList.findAll({ where : {
      userId ,
      d_day: {[Op.gte]:date},
    },
      order:[['d_day','ASC']]
    });
    return BucketLists;
  }
  //버킷리스트 하단 생성
  createBucketList = async (userId,title,date) => {
    const bucketList = await BucketList.create({
      userId,
      title,
      d_day:date,
    });
    return bucketList;
  }
  //버킷리스트 하단 수정
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

  // 버킷리스트 하단 삭제
  deleteBucketList = async (title,dayValue,userId)=>{
    await BucketList.destroy({
      where:{
        title:title,
        d_day:dayValue,
        userId:userId,
      }
    });
  }
  // 버킷리스트 카드 생성
  createBucketListCard = async (title,name,content,image,userId,share) =>{
    const bucketListCard = await BucketListCard.create({
      title,
      name,
      content,
      image:image,
      userId,
      share,
    });
    return bucketListCard;
  }
  // 버킷리스트 카드 조회
  getBucketListCards= async (userId) => {
    const BucketListCards = await BucketListCard.findAll({ where : {
        userId
      }
    });
    return BucketListCards;
  }
  // 카드 삭제
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
  // 카드 수정
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
  // 카드 완료
  bucketListCardOk = async (title,content, image , userId)=>{
    await BucketListCard.update({
      success:1,
    },{where:{
      title:title,
        content:content,
        image:image,
        userId:userId
      }
    });
  }
  bucketListCardCancel= async (title,content, image , userId)=>{
    await BucketListCard.update({
      success:2,
    },{where:{
        title:title,
        content:content,
        image:image,
        userId:userId
      }
    });
  }
  getBucketShare = async (shareTitle, shareName) =>{
    const getBucketShare = await BucketListCard.findOne({
      where: {
        [Op.and]: [{ title:shareTitle }, { name:shareName }],
      },
      raw: true,
    });
    return getBucketShare;
  }
  updateBucketShareCount = async(shareTitle, shareName, shareCount)=>{
    let newCount = Number(shareCount)+1
    await BucketListCard.update(
      {shareCount:newCount},{
      where: {
        [Op.and]: [ { title:shareTitle }, { name:shareName }],
      }
    });
  }
}

module.exports = BucketListRepository;
