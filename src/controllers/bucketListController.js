const BucketListService = require('../services/bucketListService');

class BucketListController {
  bucketListService = new BucketListService();

  getBucketList = async (req, res) => {
    try {
      const userId = 1;
      const {date} = req.query;
      const BucketList = await this.bucketListService.getBucketList(userId,date);
      res.status(200).json(BucketList);
    }
    catch (err) {
        //error는 나중에
        console.log(err);
    };
  }

    getBucketListCard= async (req, res) => {
        try {
            const userId = 1;
            const BucketListCards = await this.bucketListService.getBucketListCards(userId);
            res.status(200).json(BucketListCards);
        }
        catch (err) {
            //error는 나중에
            console.log(err);
        };
    }

  createBucketList = async (req, res) => {
    try {
      const userId = 1;
      const {date} = req.body;
      const {title} = req.body;
      await this.bucketListService.createBucketList(userId,title,date);
      res.status(200).json({msg:'등록완료'});
    }
    catch (err) {
        //error는 나중에
        console.log(err);
    };
  }

    updateBucketList= async (req, res) => {
        try {
            const userId = 1;
            const {date,title,before,beforeDay} = req.body;
            await this.bucketListService.updateBucketList(userId, title, date,before,beforeDay);
            res.status(200).json({msg: '수정완료'});
        } catch (err) {
            //error는 나중에
            console.log(err);
        };
    }

    createBucketListCard = async (req, res) => {
        try {
            const userId = 1;
            console.log(req.body);
            console.log(req.file);
            console.log('req',req);
            res.status(200).json({msg: '수정완료'});
        } catch (err) {
            //error는 나중에
            console.log(err);
        };
    }
}

module.exports = BucketListController;
