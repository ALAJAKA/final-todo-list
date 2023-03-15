const BucketListRepository = require('../repositories/bucketRepository')
// const {BucketList} = require('../models/bucketList')
// const config = require('../config/config');

class BucketListService {
  bucketListRepository = new BucketListRepository();
  getBucketList = async (userId,date) => {
      const BucketList = await this.bucketListRepository.getBucketList(userId,date);
      return BucketList;
  }

    createBucketList = async (userId,title,date) => {
        const BucketList = await this.bucketListRepository.createBucketList(userId,title,date);
        return BucketList;
    }

    updateBucketList = async (userId,title,date,before,beforeDay) => {
        const BucketList = await this.bucketListRepository.updateBucketList(userId,title,date,before,beforeDay);
        return BucketList;
    }
}

module.exports = BucketListService;
