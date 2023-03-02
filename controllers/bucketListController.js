const BucketListService = require('../services/bucketListService');
class BucketListController {
  bucketListService = new BucketListService();

  //회원가입
  semplefunc = async (req,res)=>{
    await this.bucketListService.semplefunc(1,2);
    return res.send(0);
  }

}// class 끝

module.exports = BucketListController;
