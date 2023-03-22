const UserRepository = require('../repositories/userRepository')
const config = require('../config/config');
const jwtDecode = require("jwt-decode");
const jwt = require('jsonwebtoken');

class UserService {
    userRepository = new UserRepository();
    login = async (id_token)=>{
        const token = jwtDecode(id_token);
        const sub = token.sub;
        const name = token.name;
        const email = token.email;
        const userId = await this.userRepository.login(sub,name,email);
        const Atoken =jwt.sign({
                userId:userId,
                email:email,
                name: name,
            },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
        );
        return {Atoken:Atoken,name:name};
    }
}

module.exports = UserService;
