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
      name: {
          type:DataTypes.STRING
      },
      password:{
          type:DataTypes.STRING
      },
      phone: {
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
        tableName:'users',
      modelName: 'User',
    }
  );
  return User;
};
