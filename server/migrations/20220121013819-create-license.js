'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('licenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      expiration: {
        type: Sequelize.STRING
      },
      userId:{
        type: Sequelize.INTEGER
      },
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('licenses')
  }
}
