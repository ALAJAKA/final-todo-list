const AWS = require("@aws-sdk/client-s3");
const multer =require('multer');
const multerS3 =require('multer-s3');
require('dotenv').config();
const s3 = new AWS.S3Client({
    region:"ap-northeast-2",
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
    }
});

const todolist = 'todolist';
const bucketList = "bucketlist";
let S3upload = multer({
    storage : multerS3({
        s3:s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl:'public-read-write',
        key:(req,file,callback)=>{
            callback(null,`${todolist}/${Date.now()}_${file.originalname}`);
        },
    }),
})


module.exports = S3upload;