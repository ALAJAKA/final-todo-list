const BucketListService = require('../services/bucketListService');

class BucketListController {
  bucketListService = new BucketListService();

  // C -------------------------------------------------------------------------------------------------------------------
  createBucketList = async (req, res) =>{
    try {
      // const userId = req.user.id;
      const id = 1;
      const { title, image, content, success, d_day } = req.body
      console.log({ title, image, content, success, d_day });
      const createBucketList = await this.bucketListService.createBucketList(title, image, content, success, d_day, id);
      res.status(200).json({ msg : "버킷리스트 정상 작성되었습니다.", data : createBucketList });
    } 
    catch (err) {
      console.error(err)
      res.status(400).json({ errorMessage: "버킷리스트 작성 요청이 잘못되었습니다" });
    };
  }

  // R -------------------------------------------------------------------------------------------------------------------
  getBucketList = async (req, res) => {
    try {
      // const userId = req.user.id;
      const id = 1
      const userBucketList = await this.bucketListService.getBucketList(id);
      res.status(200).json({ msg : userBucketList });
    }
    catch (err) {
      console.error(err)
      res.status(400).json({ errorMessage: "버킷리스트 목록 요청이 잘못되었습니다" });
    };
  }

  // U -------------------------------------------------------------------------------------------------------------------
  editBucketList = async (req, res) => {
    try {
      const { title, image, content, success, d_day } = req.body;
      const { id } = req.params;
      console.log({title, image, content, success, d_day})
      console.log(id)
      // const userId = req.user.id;
      // const imgPath = req.file.path;
      // const image   = imgPath.split("\\")[3];
      const editBucketList = await this.bucketListService.editBucketList(id, title, image, content, success, d_day);
      res.status(200).json({ msg : "버킷리스트가 정상적으로 수정 되었습니다.", data : editBucketList});
    }
    catch (err) {
      console.error(err)
      res.status(400).json({ errorMessage: "버킷리스트 수정 요청이 잘못되었습니다" });
    };
  }

  // D -------------------------------------------------------------------------------------------------------------------
  deleteBucketList = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteBucketList = await this.bucketListService.deleteBucketList(id);
      res.status(200).json({ msg : "버킷리스트가 정상적으로 삭제 되었습니다.", data : id});
    }
    catch (err) {
      console.error(err)
      res.status(400).json({ errorMessage: "버킷리스트 삭제 요청이 잘못되었습니다" });
    };
  };
}

module.exports = BucketListController;
