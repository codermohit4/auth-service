const UserRepository = require('../repository/user-repository');
const {JWT_KEY} = require('../config/serverconfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
class UserService {
    constructor() {
        this.userRepository = new UserRepository(); // create instance here
    }


    async create(data) {
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    createtoken(user){
        try{
            const result  = jwt.sign(user,JWT_KEY,{expiresIn:'30'});
            return result;
        }
        catch(error){
            console.log("something went wrong in token creation in user service")
            throw error;
        }
    }
        verifytoken(token){
            try{
                const response = jwt.verify(token,JWT_KEY);
                return response;
            }
            catch(error){
                console.log("something went wrongin token validation",error);
                throw error;
            }
        }
        checkpassword(userInputpassword, encryptedPassword){
            try{
                const response = bcrypt.compareSync(userInputpassword,encryptedPassword);
                // return response;
            }
            catch(error){
                console.log("something went wrong in password validation",error);
                throw error;
            }
        }
}

module.exports = UserService;
