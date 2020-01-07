import mongoose from 'mongoose';

var User = mongoose.model('User');

export function index(req, res) {

    User.find({}, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    })
    .populate('recipes');
}

export function show(req, res) {
    User.findById(req.params.id, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
}

export function store(req, res) {
    var user = new User(req.body);
    user.save((err, user) => {
        if (err) res.send(err);

        console.log("Saving user: "+req.body);
        res.json(user);
    });
}

export function update(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };