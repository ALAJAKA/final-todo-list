const UserService = require('../services/userService');

class UserController {

  userService = new UserService();

  //회원가입
  login = async (req,res)=>{
    return 123;
  }

}// class 끝

module.exports = UserController;
