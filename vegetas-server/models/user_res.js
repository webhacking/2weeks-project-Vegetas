'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_res = sequelize.define('user_res', {
    user_email: DataTypes.STRING,
    res_name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  user_res.associate = function(models) {
    user_res.belongsTo(models.restaurants, {
      foreignKey : 'res_name',
      target: 'id'
    })

    user_res.belongsTo(models.users, {
      foreignKey : 'user_email',
      target: 'email'
    })
  };
  return user_res;
};