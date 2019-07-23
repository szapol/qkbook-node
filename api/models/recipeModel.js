import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    title: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model('Recipes', RecipeSchema);
