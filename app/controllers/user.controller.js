const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.userName) {
        res.status(400).send({
            message: "User can not be empty!"
        });
        return;
    };
    
    const user = {
        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password
    };

    User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while signup."
      });
    });
}

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};



