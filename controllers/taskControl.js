const db = require("../models/task");

module.exports = {
  findAll: function(req, res) {
    db.Tasks.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("get in here create()!");
    db.Tasks.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Tasks.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Tasks.findOneAndUpdate(req.params.id, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.Tasks.findByIdAndRemove(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json(err));
  }
};
