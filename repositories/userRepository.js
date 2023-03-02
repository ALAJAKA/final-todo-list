const { Op } = require('sequelize');
class UserRepository {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }
  login =(req,res) =>{
    return 0;
  }
}

module.exports = UserRepository;
