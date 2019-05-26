const models = require('../models');

class PlayerController {
  static findAll(req, res, next) {
    models.Player.findAll({ order: [['id', 'DESC']] })
      .then(function(players) {
        res.json(players);
      })
      .catch(next);
  }

  static findByPk(req, res, next) {
    models.Player.findByPk(req.params.id)
      .then(function(player) {
        if (!player) {
          res.status(404).json({});
        } else {
          res.json(player);
        }
      })
      .catch(next);
  }

  static create(req, res, next) {
    const newPlayer = {
      name: req.body.name || null,
      position: req.body.position || null,
    };

    models.Player.create(newPlayer)
      .then(function(player) {
        res.status(201).json(player);
      })
      .catch(next);
  }

  static update(req, res, next) {
    models.Player.findByPk(req.params.id)
      .then(function(player) {
        if (!player) {
          throw { code: 404 };
        } else {
          player.name = req.body.name || null;
          player.position = req.body.position || null;

          return player.save();
        }
      })
      .then(function(updatedPlayer) {
        res.json(updatedPlayer);
      })
      .catch(next);
  }

  static destroy(req, res, next) {
    models.Player.findByPk(req.params.id)
      .then(function(player) {
        if (!player) {
          throw { code: 404 };
        } else {
          return models.Player.destroy({ where: { id: req.params.id } });
        }
      })
      .then(function(affectedRows) {
        res.json({
          id: req.params.id,
        });
      })
      .catch(next);
  }
}

module.exports = PlayerController;
