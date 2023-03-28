const BucketListService = require('../services/bucketListService');

class BucketListController {
  bucketListService = new BucketListService();

    //버킷리스트 생성
    createBucketList = async (req, res) => {
        try{
            const {access_token} = req.cookies;
            const {date} = req.body;
            const {title} = req.body;
            await this.bucketListService.createBucketList(access_token,title,date);
            return res.status(200).json({msg:'등록완료'});
        }catch(e){
            console.log(e);
        }

    }

  //버킷리스트 조회
    getBucketList = async (req, res) => {
        try{
            const {access_token} = req.cookies;
            const {date} = req.query;
            const BucketList = await this.bucketListService.getBucketList(access_token,date);
            return res.status(200).json(BucketList);
        }catch (e){
            console.log(e);
        }

    }
    //버킷리스트 수정
    updateBucketList= async (req, res) => {
        try{
            const {access_token} = req.cookies;
            const {date,title,before,beforeDay} = req.body;
            await this.bucketListService.updateBucketList(access_token, title, date,before,beforeDay);
            return res.status(200).json({msg: '수정완료'});
        }catch(e){
            console.log(e);
        }

    }

    //버킷리스트 삭제
    deleteBucketList = async (req,res)=>{
        try{
            const {access_token} = req.cookies;
            const {title,dayValue} = req.body;
            const delBucket = await this.bucketListService.deleteBucketList(title,dayValue,access_token);
            return res.status(200).json({msg:delBucket});
        }catch(e){
            console.log(e);
        }

    }
    //버킷리스트 카드 생성
    createBucketListCard = async (req, res) => {
        try{
            const {access_token} = req.cookies;
            let image;
            if(req.file !== undefined) image = req.file.location;
            else image = '';
            const {title,content,share} = req.body;
            await this.bucketListService.createBucketListCard(title,content,image,access_token,share);
            return res.status(200).json({msg:"카드생성완료"});
        }catch(e){
            console.log(e)
        }

    }
    //버킷리스트 카드 조회
    getBucketListCard= async (req, res) => {
        try{
            const {access_token} = req.cookies;
            const BucketListCards = await this.bucketListService.getBucketListCards(access_token);
            return res.status(200).json(BucketListCards);
        }catch (e){
            console.log(e);
        }

    }
    //버킷리스트 카드 삭제
    deleteBucketListCard = async (req,res)=>{
        try{
            const {access_token} = req.cookies;
            const {title,content,img} = req.body;
            const delBucketCard = await this.bucketListService.deleteBucketListCard(title,content,img,access_token);
            return res.status(200).json({msg:delBucketCard});
        }catch(e){
            console.log(e);
        }

    }
    //버킷리스트 카드 수정
    updateBucketListCard = async (req,res)=>{
        try{
            const {access_token} = req.cookies;
            const {title1,content1,img1,title,content,share} =req.body;
            let {image} = req.body;
            if(req.file!==undefined) image = req.file.location;
            else image = img1;
            const BucketListCard = await this.bucketListService.updateBucketListCard(title1,content1,img1,title,content,image,access_token,share);
            return res.status(200).json({msg:BucketListCard});
        }catch(e){
            console.log(e);
        }

    }
    //버킷리스트 카드 완료
    bucketListCardOk = async (req,res)=>{
        try{
            const {access_token} = req.cookies;
            const {image,title,content} = req.body;
            const BucketListCardOk = await this.bucketListService.bucketListCardOk(title,content,image,access_token);
            return res.status(200).json({msg:BucketListCardOk})
        }catch(e){
            console.log(e);
        }

    }
//버킷리스트 완료취소
    bucketListCardCancel =async (req,res)=>{
        try{
            const {access_token} = req.cookies;
            const {image,title,content} = req.body;
            const BucketListCardCancel = await this.bucketListService.bucketListCardCancel(title,content,image,access_token);
            return res.status(200).json({msg:BucketListCardCancel})
        }catch(e){
            console.log(e);
        }

    }

    postBucketShare = async(req, res) =>{
      try{
        const {shareTitle, shareName, shareCount} = req.body;
        console.log(shareTitle, shareName);
        const {access_token} = req.cookies;
        const postBucketShare = await this.bucketListService.postBucketShare(shareTitle, shareName, shareCount, access_token)
        return res.status(201).json({
          msg: '등록되었습니다.'});
      } catch (err) {
        //error는 나중에
        console.log(err);
      };
    }
}

module.exports = BucketListController;
