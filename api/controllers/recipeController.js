import mongoose from 'mongoose';

var Recipe = mongoose.model('Recipes');

export function index(req, res) {

    Recipe.find({}, (err, recipe) => {
        if (err) res.send(err);
        res.json(recipe);
    });
}

export function show(req, res) {
    Recipe.findById(req.params.id, (err, recipe) => {
        if (err) res.send(err);
        res.json(recipe);
    });
}

export function store(req, res) {
    var recipe = new Recipe(req.body);
    recipe.save((err, recipe) => {
        if (err) res.send(err);

        console.log("Saving recipe: "+req.body);
        res.json(recipe);
    });
}
