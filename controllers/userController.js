const UserService = require('../services/userService');
class UserController {
  userService = new UserService();

  //회원가입
  login = async (req,res)=>{

    return res.send(0);
  }

}// class 끝

module.exports = UserController;
