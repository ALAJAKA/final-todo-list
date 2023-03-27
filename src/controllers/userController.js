const UserService = require('../services/userService');
class UserController {

  userService = new UserService();

  //회원가입
  login = async (req,res)=>{
      try{
          const id_token = req.body.data.split('id_token=')[1].split('&')[0];
          const access_token = await this.userService.login(id_token);
          res.status(200).json(access_token);
      }catch(e){
          console.log(e);
      }

  }

}// class 끝

module.exports = UserController;
