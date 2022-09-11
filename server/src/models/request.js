'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Request.belongsTo(models.Customer)
    }
  }
  Request.init({
    startedAt: DataTypes.DATEONLY,
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    /* customerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, */
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Request',
    tableName: 'Requests',
    // timestamps: false,
    underscored: true
  });
  return Request;
};