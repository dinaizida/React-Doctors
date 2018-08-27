const db = require("../models");

// defining methods for the doctorsController
module.exports = {
    findAll: function(req, res) {
        db.Doctor
            .find(req.query)
            .sort({ date: -1 })
            .then(dbDoctor => res.json(dbDoctor))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Doctor
            .findById(req.params.id)
            .then(dbDoctor => res.json(dbDoctor))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log(req.body)
        db.Doctor
            .create(req.body)
            .then(dbDoctor => res.json(dbDoctor))
            .catch(err => res.status(500).json(err));
    },
    update: function(req, res) {
        db.Doctor  
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbDoctor => res.json(dbDoctor))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Doctor
            .findById({ _id: req.params.id })
            .then(dbDoctor => dbDoctor.remove())
            .then(dbDoctor => res.json(dbDoctor))
            .catch(err => res.status(422).json(err));
    }
};


