import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    recipes: [ {type: mongoose.Schema.ObjectId, ref: 'Recipe'}]
});

module.exports = mongoose.model('User', userSchema);
