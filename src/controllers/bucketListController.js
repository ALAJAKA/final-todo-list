const BucketListService = require('../services/bucketListService');

class BucketListController {
  bucketListService = new BucketListService();

  getBucketList = async (req, res) => {
    try {
      const userId = 1;
      const {date} = req.query;
      const BucketList = await this.bucketListService.getBucketList(userId,date);
      return res.status(200).json(BucketList);
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
            return res.status(200).json(BucketListCards);
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
      return res.status(200).json({msg:'등록완료'});
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
            return res.status(200).json({msg: '수정완료'});
        } catch (err) {
            //error는 나중에
            console.log(err);
        };
    }

    createBucketListCard = async (req, res) => {
        try {
            const userId = 1;
            let image;
            if(req.file !== undefined) image = req.file.location;
            else image = '';
            const {title,content} = req.body;
            await this.bucketListService.createBucketListCard(title,content,image,userId);
            return res.status(200);
        } catch (err) {
            //error는 나중에
            console.log(err);
        };
    }

    deleteBucketList = async (req,res)=>{
        const userId= 1;
        const {title,dayValue} = req.body;
        const delBucket = await this.bucketListService.deleteBucketList(title,dayValue,userId);

      return res.status(200).json({msg:delBucket});
    }

    deleteBucketListCard = async (req,res)=>{
      const {title,content,img} = req.body;
      const userId = 1;
      const delBucketCard = await this.bucketListService.deleteBucketListCard(title,content,img,userId);

    }

}

module.exports = BucketListController;
