const { Op } = require('sequelize');
class BucketListRepository {
  constructor(BucketListModel) {
    this.bucketListModel = BucketListModel;
  }
  semplefunc = async (req,res) =>{
    const sempleV = await this.bucketListModel;
    return sempleV;
  }
}

module.exports = BucketListRepository;
