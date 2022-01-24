'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class license extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  license.init(
    {
      name: DataTypes.STRING,
      expiration: DataTypes.STRING,
      userId : DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'license'
    }
  )
  return license
}
