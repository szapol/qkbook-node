class Controller {
    
    constructor(mongoose, model) {

        this.mongoose = mongoose;
        this.model = mongoose.model(model);
    }

    static index(req, res) {

        this.model.find({}, (err, model) => {
            if (err) res.send(err);
            res.json(model);
        });
    }
    
    static show(req, res) {
        this.model.findById(req.params.id, (err, recipe) => {
            if (err) res.send(err);
            res.json(recipe);
        });
    }

    static store(req, res) {
        var model = new Recipe(req.body);
        recipe.save((err, recipe) => {
            if (err) res.send(err);

            console.log("Saving recipe: "+req.body);
            res.json(recipe);
        });
    }
}