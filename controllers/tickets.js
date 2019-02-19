var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('tickets/new', { title: 'New Ticket', flight });
    });
}

function create(req, res) {
    Ticket.create({ flight: req.params.id, pName: req.body.pName, seat: req.body.seat, price: req.body.price}, function(err, ticket) {
        res.redirect(`/flights/${ticket.flight}`);
    });
}


