const { Op } = require('sequelize');
const { BucketList } = require('../models')
// const BucketListModel = require('../models/bucketList');

class BucketListRepository {
  // constructor(BucketListModel) {
  //   this.bucketListModel = BucketListModel;
  // }

  // C -------------------------------------------------------------------------------------------------------------------
  createBucketList = async (title, image, content, success, d_day, userId) =>{
    const createBucketList = await BucketList.create({ title, image, content, success, d_day, userId });
    return createBucketList;
  }

  // R -------------------------------------------------------------------------------------------------------------------
  getBucketList = async (userId) => {
    const userBucketList = await BucketList.findAll({ where : { userId } });
    return userBucketList;
  }

  // U -------------------------------------------------------------------------------------------------------------------
  editBucketList = async (id, title, image, content, success, d_day) => {
    await BucketList.update( { title, image, content, success, d_day }, { where: { id } });
    const editBucketList = { id, title, image, content, success, d_day }
    return editBucketList;
  }

  // D -------------------------------------------------------------------------------------------------------------------
  deleteBucketList = async (id) => {
    await BucketList.destroy({ where: { id } });
  };
}

module.exports = BucketListRepository;
