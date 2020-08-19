const db = require('../models');

module.exports = function(app) {
    app.get('/api/workouts', function(req, res) {
        db.Workout.find({}).then(dbWorkouts => {
            res.json(dbWorkouts)
        })
        .catch(err => {
            res.status(400).json(err);
        })
    });

    app.get('/api/workouts/range', function(req,res) {
        db.Workout.find({}).then(dbWorkouts => {
            res.json(dbWorkouts)
        })
        .catch(err => {
            res.status(400).json(err);
        })
    });

    app.post('/api/workouts', function(req, res) {
        db.Workout.create(req.body).then(dbWorkouts => {
            res.json(dbWorkouts)
        })
        .catch(err => {
            res.status(400).json(err);
        }) 
    });

    app.put('/api/workouts/:id', function(req,res){
        db.Workout.findOneAndUpdate({_id: req.params.id}, {$push:{exercises: req.body}}, {new: true})
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.status(400).json(err);
            })
    });
}