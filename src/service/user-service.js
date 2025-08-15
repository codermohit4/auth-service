const UserRepository = require('../repository/user-repository');

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
}

module.exports = UserService;
