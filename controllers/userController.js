
const db = require("./../models");
const passport = require('./../services/passport');

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
    logInUser(req, res){
        console.log(req);
        res.send("auth")
    }
    findAllUsers(req, res) {

    }
}

module.exports = new userController();