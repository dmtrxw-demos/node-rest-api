'use strict';
module.exports = (sequelize, DataTypes) => {
  const errorMessages = {
    name: {
      empty: 'Please enter player name',
    },
    position: {
      empty: 'Please enter player position',
    },
  };

  const Player = sequelize.define('Player', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: errorMessages.name.empty,
        },
        notEmpty: {
          args: true,
          msg: errorMessages.name.empty,
        },
      },
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: errorMessages.position.empty,
        },
        notEmpty: {
          args: true,
          msg: errorMessages.position.empty,
        },
      },
    }
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};
