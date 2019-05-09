'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: {
      unique: true,
      type: Sequelize.STRING
    },
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    vegLevel: DataTypes.STRING
  }, {
    timestamps: false
  });
  users.associate = function(models) {
    users.hasMany(models.user_res, {
      foreignKey: 'user_email',
      source:'email'
    })  
  };
  return users;
};
