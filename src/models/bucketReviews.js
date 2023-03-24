'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BucketReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {

        db.BucketReview.belongsTo(db.User,{
            foreignKey:{name:'userId'},
            targetKey:'id'
        });
        db.BucketReview.belongsTo(db.BucketListCard,{
            foreignKey:{name:'BucketListCardId'},
            targetKey:'id'
        });
    }
  }
    BucketReview.init(
    {

      content: {
          type:DataTypes.STRING
      },
        createdAt:{
            type:DataTypes.DATEONLY,
            defaultValue:new Date()
        },
        updatedAt:{
            type:DataTypes.DATEONLY,
            defaultValue:new Date()
        }
    },
    {
      sequelize,
        tableName:'bucketReviews',
      modelName: 'BucketReview',
    }
  );
  return BucketReview;
};
