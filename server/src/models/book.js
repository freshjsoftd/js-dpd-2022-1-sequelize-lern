'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Genre, {foreignKey: 'genre_numb'});
      Book.belongsTo(models.Shelf);
      Book.belongsToMany(models.Author, {through: 'Athors_Books'})
    }
  }
  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /* genreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shelfId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, */
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'Books',
    // timestamps: false,
    underscored: true
  });
  return Book;
};