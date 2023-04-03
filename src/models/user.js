'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
        db.User.hasMany(db.TodoList,{
            foreignKey:{name:'userId'},
            sourceKey:'id'
        });

    }
  }
  User.init(
    {
      email: {
          type:DataTypes.STRING,
          allowNull:false
      },
      sub: {
          type:DataTypes.STRING,
          allowNull:false
      },
      name: {
          type:DataTypes.STRING,
          allowNull:false
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
        tableName:'users',
      modelName: 'User',
    }
  );
  return User;
};
