'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('scholarships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      products: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      uni: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.STRING
      },
      standard: {
        type: Sequelize.STRING
      },
      money: {
        type: Sequelize.STRING
      },
      period: {
        type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      document: {
        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.INTEGER
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('scholarships')
  }
}
