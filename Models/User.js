const mongoose = require('mongoose');

const UserSchema = mongoose.Schema

const userSchema = new UserSchema({
    nom: String,
    prenom:String,
    email: String,
    password: String
})

module.exports = userSchema