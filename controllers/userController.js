
const db = require("./../models");

class userController {
    constructor() {
    }
    createUser(req, res) {
        db.User.create(req.body).then(
            (results) => {
                res.json(results);
            }
        );

    }
    findAllUsers(req, res) {

    }
}

module.exports = new userController();