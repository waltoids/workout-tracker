const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        type: {
            type: String,
            required: 'Exercise Type:'
            },
        name: {
            type: String,
            trim: true,
            required: 'Exercise Name:'
            },
        duration: {
            type: Number,
            required: 'Exercise duration'
            },
        weight: {
            type: Number,
            default: 0
            },
        reps: {
            type: Number,
            default: 0
            },
        sets: {
            type: Number,
            default: 0
            },
        distance: {
            type: Number,
            default: 0
            },
        }
    ],
}, {
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual('totalDuration').get(function totalDuration() {
    return this.exercises.reduce((total, exercise) => total + exercise.duration, 0);
  });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;