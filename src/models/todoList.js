'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
        db.TodoList.belongsTo(db.User,{
            foreignKey:{name:'userId'},
            targetKey:'id'
        });
    }
  }
  TodoList.init(
    {
      title: {
          type:DataTypes.STRING,
          allowNull:false
      },
      image: {
          type:DataTypes.STRING
      },
      content:{
          type:DataTypes.STRING
      },
        success: {
            type:DataTypes.ENUM('SUCCESS','READY'),
            defaultValue: 'READY'
      },
        d_day: {
          type:DataTypes.DATEONLY
        },
        role: {
            type:DataTypes.ENUM('ALWAYS','ONEDAY'),
            defaultValue:'ONEDAY'
        },
    },
    {
      sequelize,
        tableName:'todoLists',
      modelName: 'TodoList',
    }
  );
  return TodoList;
};
