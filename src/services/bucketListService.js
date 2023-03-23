const BucketListRepository = require('../repositories/bucketRepository')
const jwtDecode = require("jwt-decode");


class BucketListService {
  bucketListRepository = new BucketListRepository();
  //버킷리스트 생성
  createBucketList = async (access_token,title,date) => {
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const BucketList = await this.bucketListRepository.createBucketList(userId,title,date);
        return BucketList;
    }
  //버킷 리스트 조회
  getBucketList = async (access_token,date) => {
      const token = jwtDecode(access_token);
      const userId = token.userId;
      const BucketList = await this.bucketListRepository.getBucketList(userId,date);
      return BucketList;
  }
  //버킷 리스트 수정
    updateBucketList = async (access_token,title,date,before,beforeDay) => {
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const BucketList = await this.bucketListRepository.updateBucketList(userId,title,date,before,beforeDay);
        return BucketList;
    }

    //버킷 리스트 삭제
    deleteBucketList = async (title,dayValue,access_token) =>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        await this.bucketListRepository.deleteBucketList(title,dayValue,userId);
        return "삭제 완료";
    }
  //버킷 리스트 카드 조회
    getBucketListCards = async (access_token) => {
        const token = jwtDecode(access_token);
        const userId = token.userId;
        const BucketListCards = await this.bucketListRepository.getBucketListCards(userId);
        return BucketListCards;
    }
    //버킷 리스트 카드 생성
    createBucketListCard = async (title,content,image,access_token) =>{
      const token = jwtDecode(access_token);
      const userId = token.userId;
      const name = token.name;
      const BucketListCard = await this.bucketListRepository.createBucketListCard(title,name,content,image,userId);
      return BucketListCard;
    }
    //버킷 리스트 카드 삭제
    deleteBucketListCard =async (title,content,img,access_token) =>{
      const token = jwtDecode(access_token);
      const userId = token.userId;
      await this.bucketListRepository.deleteBucketListCard(title,content,img,userId);
      return "삭제 완료";
    }
    //버킷 리스트 카드 수정
    updateBucketListCard =async (title1,content1,img1,title,content,image,access_token)=>{
      const token = jwtDecode(access_token);
      const userId = token.userId;
      await this.bucketListRepository.updateBucketListCard(title1,content1,img1,title,content,image,userId);
      return "수정 완료";
    }
    //버킷 리스트 카드 완료
    bucketListCardOk =async (title,content,image,access_token)=>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        await this.bucketListRepository.bucketListCardOk(title,content,image,userId);
        return "버킷 완료";
    }
    //버킷리스트 완료취소
    bucketListCardCancel =async (title,content,image,access_token)=>{
        const token = jwtDecode(access_token);
        const userId = token.userId;
        await this.bucketListRepository.bucketListCardCancel(title,content,image,userId);
        return "버킷 완료가 취소되었습니다.";
    }
}

module.exports = BucketListService;
