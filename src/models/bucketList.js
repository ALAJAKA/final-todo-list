'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BucketList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
        db.BucketList.belongsTo(db.User,{
            foreignKey:{name:'userId'},
            targetKey:'id'
        });
    }
  }
  BucketList.init(
    {
        title: {
            type:DataTypes.STRING,
            allowNull:false
        },
        success: {
            type:DataTypes.ENUM('SUCCESS','READY'),
            defaultValue: 'READY'
        },
        d_day: {
            type:DataTypes.DATEONLY,
            defaultValue: null,
            allowNull:true
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
        tableName:'bucketLists',
      modelName: 'BucketList',
    }
  );
  return BucketList;
};
