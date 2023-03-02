const BucketListRepository = require('../repositories/todoListRepository')
const {BucketList} = require('../models/bucketList')
const config = require('../config/config');

class BucketListService {

    bucketListRepository = new BucketListRepository(BucketList);
    semplefunc = async (req,res)=>{
        await this.bucketListRepository.semplefunc(1,2);
        return 0;
    }
}

module.exports = BucketListService;
