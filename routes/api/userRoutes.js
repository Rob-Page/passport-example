const router = require("express").Router();
const userController = require('./../../controllers/userController');
const passport = require('./../../services/passport');


router
    .route('/create')
    .post(userController.createUser);

router.route('/login',passport.authenticate('local'))
    .post(userController.logInUser);

module.exports = router;