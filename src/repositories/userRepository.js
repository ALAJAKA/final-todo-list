const { Op } = require('sequelize');
const {User} = require('../models')
class UserRepository {
  login =async (sub,name,email) =>{
    const userId = await User.findOrCreate({
      attributes:['id'],
      where:{
        sub:sub,
        name:name,
        email:email,
      }
    })
    return userId[0].id;
  }

}

module.exports = UserRepository;
