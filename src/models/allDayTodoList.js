'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AllDayTodoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
        db.AllDayTodoList.belongsTo(db.User,{
            foreignKey:{name:'userId'},
            targetKey:'id'
        });
    }
  }
    AllDayTodoList.init(
    {
      title: {
        type:DataTypes.STRING,
        allowNull:false
      },
      name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      content: {
        type:DataTypes.STRING,
      },
      image: {
        type:DataTypes.STRING,
      },
      createdAt:{
        type:DataTypes.DATEONLY,
        defaultValue:new Date().toISOString()
      },
      updatedAt:{
        type:DataTypes.DATEONLY,
        defaultValue:new Date().toISOString()
      }
    },
    {
      sequelize,
        tableName:'allDayTodoList',
      modelName: 'AllDayTodoList',
    }
  );
  return AllDayTodoList;
};
