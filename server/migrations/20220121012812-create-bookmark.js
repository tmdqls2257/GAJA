'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('bookmarks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('bookmarks')
  }
}
