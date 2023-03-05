const BucketListRepository = require('../repositories/bucketRepository')
// const {BucketList} = require('../models/bucketList')
// const config = require('../config/config');

class BucketListService {
    bucketListRepository = new BucketListRepository();

    // C -------------------------------------------------------------------------------------------------------------------
    createBucketList = async (title, image, content, success, d_day, id) =>{
      const userId = id
      const createBucketList = await this.bucketListRepository.createBucketList(title, image, content, success, d_day, userId);
      return createBucketList;
    }

    // R -------------------------------------------------------------------------------------------------------------------
    getBucketList = async (userId) => {
      const userBucketList = await this.bucketListRepository.getBucketList(userId);
      return userBucketList;
    }

    // U -------------------------------------------------------------------------------------------------------------------
    editBucketList = async (id, title, image, content, success, d_day) => {
      const editBucketList = await this.bucketListRepository.editBucketList(id, title, image, content, success, d_day);
      return editBucketList;
  }

    // D -------------------------------------------------------------------------------------------------------------------
    deleteBucketList = async (id) => {
      await this.bucketListRepository.deleteBucketList(id);
  };
}

module.exports = BucketListService;
