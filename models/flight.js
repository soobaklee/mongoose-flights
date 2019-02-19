var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
    },
    arrival: {
        type: Date,
    }
}, {
    timestamps: true,
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true,
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA',
        required: true,
    },
    destinations: {
        type: [destinationSchema],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true,
    },
    departs: {
        type: Date,
        default: function () {
            var date = new Date();
            return new Date(date.setFullYear(date.getFullYear() + 1));
        }
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('Flight', flightSchema);