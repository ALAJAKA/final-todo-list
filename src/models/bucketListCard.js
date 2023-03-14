'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BucketListCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
        db.BucketListCard.belongsTo(db.User,{
            foreignKey:{name:'userId'},
            targetKey:'id'
        });
    }
  }
    BucketListCard.init(
    {
        title: {
            type:DataTypes.STRING,
            allowNull:false
        },
        image: {
            type:DataTypes.STRING,
            allowNull:false
        },
        content: {
            type:DataTypes.STRING,
            allowNull:false
        },
        success: {
            type:DataTypes.ENUM('SUCCESS','READY'),
            defaultValue: 'READY'
        }
    },
    {
      sequelize,
        tableName:'bucketListCard',
      modelName: 'BucketListCard',
    }
  );
  return BucketListCard;
};
