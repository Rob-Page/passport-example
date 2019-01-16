
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
    logInUser(req, res ){
        const {username, password} = req.body;
        console.log(username)
        db.User.findOne({username:username}).then(results=>{
            const {username, email, first_name, last_name, _id} = results;
            res.json({username, email, first_name, last_name, _id});
        })
        // res.send("auth")
    }
    findAllUsers(req, res) {

    }
}

module.exports = new userController();