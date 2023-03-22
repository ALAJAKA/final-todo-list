const BucketListService = require('../services/bucketListService');

class BucketListController {
  bucketListService = new BucketListService();

  getBucketList = async (req, res) => {
    try {
      const {access_token} = req.cookies;
      const {date} = req.query;
      const BucketList = await this.bucketListService.getBucketList(access_token,date);
      return res.status(200).json(BucketList);
    }
    catch (err) {
        //error는 나중에
        console.log(err);
    };
  }

    getBucketListCard= async (req, res) => {
        try {
            const {access_token} = req.cookies;
            const BucketListCards = await this.bucketListService.getBucketListCards(access_token);
            return res.status(200).json(BucketListCards);
        }
        catch (err) {
            //error는 나중에
            console.log(err);
        };
    }

  createBucketList = async (req, res) => {
    try {
      const {access_token} = req.cookies;
      const {date} = req.body;
      const {title} = req.body;
      await this.bucketListService.createBucketList(access_token,title,date);
      return res.status(200).json({msg:'등록완료'});
    }
    catch (err) {
        //error는 나중에
        console.log(err);
    };
  }

    updateBucketList= async (req, res) => {
        try {
            const {access_token} = req.cookies;
            const {date,title,before,beforeDay} = req.body;
            await this.bucketListService.updateBucketList(access_token, title, date,before,beforeDay);
            return res.status(200).json({msg: '수정완료'});
        } catch (err) {
            //error는 나중에
            console.log(err);
        };
    }

    createBucketListCard = async (req, res) => {
        try {
            const {access_token} = req.cookies;
            let image;
            if(req.file !== undefined) image = req.file.location;
            else image = '';
            const {title,content} = req.body;
            await this.bucketListService.createBucketListCard(title,content,image,access_token);
            return res.status(200).json({msg:"카드생성완료"});
        } catch (err) {
            //error는 나중에
            console.log(err);
        };
    }

    deleteBucketList = async (req,res)=>{
        const {access_token} = req.cookies;
        const {title,dayValue} = req.body;
        const delBucket = await this.bucketListService.deleteBucketList(title,dayValue,access_token);
        return res.status(200).json({msg:delBucket});
    }

    deleteBucketListCard = async (req,res)=>{
      const {access_token} = req.cookies;
      const {title,content,img} = req.body;
      const delBucketCard = await this.bucketListService.deleteBucketListCard(title,content,img,access_token);
      return res.status(200).json({msg:delBucketCard});
    }

    updateBucketListCard = async (req,res)=>{
      const {access_token} = req.cookies;
      const {title1,content1,img1,title,content} =req.body;
      let {image} = req.body;
      if(req.file!==undefined) image = req.file.location;
      else image = img1;
      const BucketListCard = await this.bucketListService.updateBucketListCard(title1,content1,img1,title,content,image,access_token);
      return res.status(200).json({msg:BucketListCard});;
    }
}

module.exports = BucketListController;
