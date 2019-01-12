const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
});

userSchema.methods = {
    checkPassword: function(inputPassword){
        return bcrypt.compareSync(inputPassword, this.password);
    },
    hashpassword: (plainTextPassword) =>{
        return bcrypt.hashSync(plainTextPassword, 10);
    }
}

userSchema.pre('save', function(callback){
    if(!this.password){
        console.log("no password");
        callback();
    }else{
        this.password = this.hashpassword(this.password);
        callback();
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;