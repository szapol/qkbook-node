import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    title: String,
    url: String
});

module.exports = mongoose.model('Recipes', recipeSchema);
