'use strict';
module.exports = (sequelize, DataTypes) => {
  const restaurants = sequelize.define('restaurants', {
    name: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    menu: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    vegLevel: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    timestamps: false,
  });
  restaurants.associate = function(models) {
    restaurants.hasMany(models.user_res, {
      foreignKey: 'res_name',
      source:'id'
    })  
  };
  return restaurants;
};