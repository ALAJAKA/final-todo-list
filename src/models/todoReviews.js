'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {

        db.TodoReview.belongsTo(db.User,{
            foreignKey:{name:'userId'},
            targetKey:'id'
        });
        db.TodoReview.belongsTo(db.AllDayTodoList,{
            foreignKey:{name:'allDayTodoListId'},
            targetKey:'id'
        });
    }
  }
    TodoReview.init(
    {

      content: {
          type:DataTypes.STRING
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
        tableName:'todoReviews',
      modelName: 'TodoReview',
    }
  );
  return TodoReview;
};
