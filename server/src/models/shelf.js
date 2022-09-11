'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shelf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shelf.hasMany(models.Book, {foreignKey: 'shelf_id'})
    }
  }
  Shelf.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'Shelf',
    tableName: 'Shelves',
    timestamps: false,
    underscored: true
  });
  return Shelf;
};