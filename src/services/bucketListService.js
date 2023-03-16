const BucketListRepository = require('../repositories/bucketRepository')


class BucketListService {
  bucketListRepository = new BucketListRepository();
  getBucketList = async (userId,date) => {
      const BucketList = await this.bucketListRepository.getBucketList(userId,date);
      return BucketList;
  }
    getBucketListCards = async (userId) => {
        const BucketListCards = await this.bucketListRepository.getBucketListCards(userId);
        return BucketListCards;
    }

    createBucketList = async (userId,title,date) => {
        const BucketList = await this.bucketListRepository.createBucketList(userId,title,date);
        return BucketList;
    }

    updateBucketList = async (userId,title,date,before,beforeDay) => {
        const BucketList = await this.bucketListRepository.updateBucketList(userId,title,date,before,beforeDay);
        return BucketList;
    }
    createBucketListCard = async (title,content,image,userId) =>{
      const BucketListCard = await this.bucketListRepository.createBucketListCard(title,content,image,userId);
      return BucketListCard;
    }
}

module.exports = BucketListService;
