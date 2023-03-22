const BucketListRepository = require('../repositories/bucketRepository')
const jwtDecode = require("jwt-decode");


class BucketListService {
  bucketListRepository = new BucketListRepository();
  getBucketList = async (access_token,date) => {
      const token = jwtDecode(access_token);
      const userId = token.userId;
      const BucketList = await this.bucketListRepository.getBucketList(userId,date);
      return BucketList;
  }
    getBucketListCards = async (access_token) => {
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const BucketListCards = await this.bucketListRepository.getBucketListCards(userId);
        return BucketListCards;
    }

    createBucketList = async (access_token,title,date) => {
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const BucketList = await this.bucketListRepository.createBucketList(userId,title,date);
        return BucketList;
    }

    updateBucketList = async (access_token,title,date,before,beforeDay) => {
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const BucketList = await this.bucketListRepository.updateBucketList(userId,title,date,before,beforeDay);
        return BucketList;
    }
    createBucketListCard = async (title,content,image,access_token) =>{
      const token = jwtDecode(access_token);
      const userId = token.userId;
      const name = token.name;
      const BucketListCard = await this.bucketListRepository.createBucketListCard(title,name,content,image,userId);
      return BucketListCard;
    }
    deleteBucketList = async (title,dayValue,access_token) =>{
      const token = jwtDecode(access_token);
      const userId = token.userId;
      await this.bucketListRepository.deleteBucketList(title,dayValue,userId);
      return "삭제 완료";
    }

    deleteBucketListCard =async (title,content,img,access_token) =>{
      const token = jwtDecode(access_token);
      const userId = token.userId;
      await this.bucketListRepository.deleteBucketListCard(title,content,img,userId);
      return "삭제 완료;"
    }

    updateBucketListCard =async (title1,content1,img1,title,content,image,access_token)=>{
      const token = jwtDecode(access_token);
      const userId = token.userId;
      await this.bucketListRepository.updateBucketListCard(title1,content1,img1,title,content,image,userId);
      return "수정 완료";
    }
}

module.exports = BucketListService;
