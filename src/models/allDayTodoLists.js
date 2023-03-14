'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AllDayTodoLists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
        db.AllDayTodoLists.belongsTo(db.User,{
            foreignKey:{name:'userId'},
            targetKey:'id'
        });
    }
  }
    AllDayTodoLists.init(
    {
      title: {
        type:DataTypes.STRING,
        allowNull:false
      },
      content: {
        type:DataTypes.STRING,
        allowNull:false
      },
      image: {
        type:DataTypes.STRING,
        allowNull:false
      },
      success: {
        type:DataTypes.ENUM('SUCCESS','READY'),
        defaultValue: 'READY'
      },
    },
    {
      sequelize,
        tableName:'allDayTodoLists',
      modelName: 'AllDayTodoLists',
    }
  );
  return AllDayTodoLists;
};
