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
      success: {
        type:DataTypes.ENUM('SUCCESS','READY'),
        defaultValue: 'READY'
      },
      today: {
        type:DataTypes.DATEONLY
      },
        createdAt:{
          type:DataTypes.DATEONLY,
        },
        updatedAt:{
            type:DataTypes.DATEONLY,
        }
    },
    {
      sequelize,
        tableName:'todoLists',
      modelName: 'TodoList',
    }
  );
  return TodoList;
};
