// const { User } = require('../models/index') is used because Sequelize’s default project structure generates a models/index.js file that:
// Loads all your model files in the models folder.
// Initializes Sequelize (sets up DB connection).
// Exports all models in a single object.
const {User} = require('../models/index')
// const { User } = require('../models'); // works the same




class UserRepository {
    async createUser(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (err) {
            console.log("Something went wrong in user-repository layer");
            throw err;
        }
    }

    async destroy(userId) {
        try {
            await User.destroy({ where: { id: userId } });
        } catch (err) {
            console.log("Something went wrong in user-repository layer");
            throw err;
        }
    }

    async getUser(email) {
        return await User.findOne({ where: { email: email } });
    }
}

module.exports = UserRepository; // export class
