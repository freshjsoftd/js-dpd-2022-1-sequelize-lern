'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Request, {foreignKey: 'customer_id'})
    }
  }
  Customer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
      set(value){
        this.setDataValue('password', bcrypt.hashSync(value, 7));
      }
    },
    birthday: {
      type: DataTypes.DATEONLY,
      validate: {
        isBefore: DataTypes.NOW
      }
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'Customers',
    timestamps: false,
    underscored: true
  });
  return Customer;
};